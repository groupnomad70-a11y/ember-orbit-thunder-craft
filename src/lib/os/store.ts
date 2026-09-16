import { create } from "zustand";
import { persist } from "zustand/middleware";
import { isoDate, mondayOf, uid } from "@/lib/utils";
import {
  PRODUCTS,
  OVERHEAD,
  blankDaily,
  blankPO,
  blankWO,
  blankPrice,
  seedDailies,
  seedEdicts,
} from "./defaults";
import { applyRecurrence, dailyFloor, edictsFromResult, evaluateDay, mergeEdicts } from "./calc";
import type { AuditEntry, Daily, Edict, OsState, Product, OverheadLine } from "./types";

type OsStore = OsState & {
  hydrated: boolean;
  setHydrated: (v: boolean) => void;
  setVenue: (v: string) => void;
  patchProduct: (id: Product["id"], patch: Partial<Product>) => void;
  patchOverhead: (id: string, monthly: number) => void;
  setDaysInMonth: (n: number) => void;
  ensureDay: (date: string) => void;
  patchDay: (date: string, patch: Partial<Daily> | ((d: Daily) => Daily)) => void;
  sealDay: (date: string, gmSig: string) => void;
  setEdict: (id: string, patch: Partial<Edict>) => void;
  patchPo: (patch: Partial<OsState["po"]>) => void;
  patchWo: (patch: Partial<OsState["wo"]>) => void;
  patchPrice: (patch: Partial<OsState["priceChange"]>) => void;
  sealPrice: () => void;
  log: (actor: AuditEntry["actor"], action: string, detail: string) => void;
  resetDemo: () => void;
  clearAll: () => void;
};

function audit(actor: AuditEntry["actor"], action: string, detail: string): AuditEntry {
  return { id: uid("au"), ts: new Date().toISOString(), actor, action, detail };
}

function initial(): OsState {
  const dailies = seedDailies();
  return {
    venue: "Four-Product Kitchen · Eastlands",
    products: PRODUCTS.map((p) => ({ ...p })),
    overhead: OVERHEAD.map((l) => ({ ...l })),
    daysInMonth: 30,
    dailies,
    edicts: seedEdicts(dailies),
    audit: [
      audit("system", "Ledger opened", "Demo civic week seeded from the current Monday. All figures are editable."),
    ],
    po: blankPO(),
    wo: blankWO(),
    priceChange: blankPrice(),
  };
}

export const useOs = create<OsStore>()(
  persist(
    (set, get) => ({
      ...initial(),
      hydrated: false,
      setHydrated: (v) => set({ hydrated: v }),
      setVenue: (venue) => set({ venue }),
      patchProduct: (id, patch) =>
        set((s) => ({
          products: s.products.map((p) => (p.id === id ? { ...p, ...patch } : p)),
        })),
      patchOverhead: (id, monthly) =>
        set((s) => ({
          overhead: s.overhead.map((l) => (l.id === id ? { ...l, monthly } : l)),
        })),
      setDaysInMonth: (n) => set({ daysInMonth: n }),
      ensureDay: (date) =>
        set((s) => {
          if (s.dailies[date]) return s;
          return { dailies: { ...s.dailies, [date]: blankDaily(date) } };
        }),
      patchDay: (date, patch) =>
        set((s) => {
          const prev = s.dailies[date] ?? blankDaily(date);
          const next = typeof patch === "function" ? patch(prev) : { ...prev, ...patch };
          return { dailies: { ...s.dailies, [date]: next } };
        }),
      sealDay: (date, gmSig) =>
        set((s) => {
          const d = { ...(s.dailies[date] ?? blankDaily(date)), gmSig, sealed: true };
          const floor = dailyFloor(s.overhead, s.daysInMonth);
          const result = evaluateDay(d, s.products, floor);
          d.classify = result.classify === "empty" ? "" : result.classify;
          const generated = edictsFromResult(d, result, s.products);
          let edicts = mergeEdicts(s.edicts, generated);
          edicts = applyRecurrence(edicts, mondayOf(date));
          return {
            dailies: { ...s.dailies, [date]: d },
            edicts,
            audit: [
              audit("gm", "Day sealed", `${date} classified ${d.classify || "empty"} · net KES ${Math.round(result.net)}`),
              ...s.audit,
            ].slice(0, 80),
          };
        }),
      setEdict: (id, patch) =>
        set((s) => ({
          edicts: s.edicts.map((e) => (e.id === id ? { ...e, ...patch } : e)),
        })),
      patchPo: (patch) => set((s) => ({ po: { ...s.po, ...patch } })),
      patchWo: (patch) => set((s) => ({ wo: { ...s.wo, ...patch } })),
      patchPrice: (patch) => set((s) => ({ priceChange: { ...s.priceChange, ...patch } })),
      sealPrice: () =>
        set((s) => {
          const pc = s.priceChange;
          if (!pc.gmName.trim()) return s;
          return {
            priceChange: { ...pc, sealed: true },
            products: s.products.map((p) => (p.id === pc.product ? { ...p, price: pc.to } : p)),
            audit: [audit("gm", "Price instrument sealed (vestigial)", `${pc.product} ${pc.from} → ${pc.to}`), ...s.audit],
          };
        }),
      log: (actor, action, detail) =>
        set((s) => ({ audit: [audit(actor, action, detail), ...s.audit].slice(0, 80) })),
      resetDemo: () => set({ ...initial(), hydrated: true, audit: [audit("system", "Demo week restored", isoDate())] }),
      clearAll: () =>
        set({
          ...initial(),
          dailies: {},
          edicts: [],
          audit: [audit("system", "Ledger cleared", "All daily records removed")],
          hydrated: true,
        }),
    }),
    {
      name: "guardian-parliament-4p",
      skipHydration: true,
      partialize: (s) => {
        const { hydrated, ...rest } = s;
        void hydrated;
        return rest;
      },
    },
  ),
);

export function hydrateOs() {
  try {
    void useOs.persist.rehydrate();
  } finally {
    useOs.getState().setHydrated(true);
  }
}
