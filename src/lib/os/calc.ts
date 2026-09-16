import { addDays } from "@/lib/utils";
import type { Daily, Edict, OverheadLine, Product, ProductId, RoleId } from "./types";
import { PAR } from "./defaults";
import { uid } from "@/lib/utils";

export type DayResult = {
  date: string;
  rev: Record<ProductId, number>;
  cost: Record<ProductId, number>;
  gm: Record<ProductId, number>;
  totRev: number;
  totCost: number;
  totGm: number;
  floor: number;
  net: number;
  classify: "profit" | "breakeven" | "loss" | "empty";
  cashVar: number;
  cokeVar: number;
  ricePerKg: number | null;
  chickenYield: number | null;
  coleslawPerHead: number | null;
  wastage: number;
  belowPar: string[];
  uncovered: boolean;
  sealed: boolean;
};

const PIDS: ProductId[] = ["rice", "chicken", "coleslaw", "coke"];

export function productMap(products: Product[]): Record<ProductId, Product> {
  return Object.fromEntries(products.map((p) => [p.id, p])) as Record<ProductId, Product>;
}

export function monthlyOverhead(lines: OverheadLine[]): number {
  return lines.reduce((s, l) => s + (Number(l.monthly) || 0), 0);
}

export function dailyFloor(lines: OverheadLine[], daysInMonth: number): number {
  const d = Math.max(1, daysInMonth || 30);
  return monthlyOverhead(lines) / d;
}

export function coverMargin(products: Product[]): number {
  return products.reduce((s, p) => s + (p.price - p.rawCost), 0);
}

export function breakEvenCovers(floor: number, margin: number): number {
  if (margin <= 0) return Infinity;
  return Math.ceil(floor / margin);
}

export function targetCovers(floor: number, margin: number, buffer = 0.15): number {
  if (margin <= 0) return Infinity;
  return Math.ceil((floor * (1 + buffer)) / margin);
}

export function ricePerKg(d: Daily): number | null {
  const raw = d.rice.reduce((s, b) => s + (Number(b.rawG) || 0), 0);
  const y = d.rice.reduce((s, b) => s + (Number(b.yielded) || 0), 0);
  if (raw <= 0 || y <= 0) return null;
  return y / (raw / 1000);
}

export function chickenYield(d: Daily): number | null {
  const samples = d.chicken.filter((b) => (b.portionsIn || 0) > 0 && (b.sampleG || 0) > 0);
  if (!samples.length) return null;
  const avg = samples.reduce((s, b) => s + b.sampleG, 0) / samples.length;
  return (avg / 250) * 100;
}

export function coleslawPerHead(d: Daily): number | null {
  if (!d.coleslawHeads) return null;
  return d.coleslawPortions / d.coleslawHeads;
}

export function wastageKes(d: Daily): number {
  return d.wastage.reduce((s, w) => s + (Number(w.kes) || 0), 0);
}

export function cokeVariance(d: Daily): number {
  const start = (Number(d.cokeOpen) || 0) * 24;
  const added = (Number(d.cokeAdded) || 0) * 24;
  const sold = Number(d.sales.coke) || 0;
  const remaining = Number(d.cokeRemaining) || 0;
  const expected = start + added - sold;
  return remaining - expected;
}

export function evaluateDay(d: Daily, products: Product[], floor: number): DayResult {
  const map = productMap(products);
  const rev = {} as Record<ProductId, number>;
  const cost = {} as Record<ProductId, number>;
  const gm = {} as Record<ProductId, number>;
  let totRev = 0;
  let totCost = 0;
  let totGm = 0;
  let soldAny = false;
  for (const id of PIDS) {
    const s = Number(d.sales[id]) || 0;
    if (s) soldAny = true;
    const p = map[id];
    rev[id] = s * p.price;
    cost[id] = s * p.rawCost;
    gm[id] = rev[id] - cost[id];
    totRev += rev[id];
    totCost += cost[id];
    totGm += gm[id];
  }
  const net = totGm - floor;
  const classify: DayResult["classify"] = !soldAny
    ? "empty"
    : net > 0
      ? "profit"
      : net === 0
        ? "breakeven"
        : "loss";
  const belowPar = (Object.keys(PAR) as (keyof typeof PAR)[]).filter((k) => d.belowPar[k]);
  return {
    date: d.date,
    rev,
    cost,
    gm,
    totRev,
    totCost,
    totGm,
    floor,
    net,
    classify,
    cashVar: (Number(d.till) || 0) - totRev,
    cokeVar: cokeVariance(d),
    ricePerKg: ricePerKg(d),
    chickenYield: chickenYield(d),
    coleslawPerHead: coleslawPerHead(d),
    wastage: wastageKes(d),
    belowPar,
    uncovered: d.absence === "uncovered",
    sealed: d.sealed,
  };
}

export function edictsFromResult(
  d: Daily,
  r: DayResult,
  products: Product[],
): Omit<Edict, "id" | "status" | "directive">[] {
  const out: Omit<Edict, "id" | "status" | "directive">[] = [];
  const riceT = products.find((p) => p.id === "rice")?.yieldTarget ?? 10;
  const chT = products.find((p) => p.id === "chicken")?.yieldTarget ?? 84;
  const slT = products.find((p) => p.id === "coleslaw")?.yieldTarget ?? 8;

  const push = (
    cls: Edict["class"],
    house: RoleId,
    title: string,
    metric: string,
    actual: string,
    standard: string,
  ) => out.push({ date: d.date, class: cls, house, title, metric, actual, standard });

  if (r.chickenYield != null && r.chickenYield < chT) {
    push("I", "om", "Chicken fry yield below standard", "Fry yield", `${r.chickenYield.toFixed(1)}%`, `≥ ${chT}%`);
  }
  if (r.ricePerKg != null && r.ricePerKg < riceT) {
    push("I", "om", "Rice portions per kg below standard", "Rice yield", r.ricePerKg.toFixed(1), `≥ ${riceT} / kg`);
  }
  if (r.coleslawPerHead != null && r.coleslawPerHead < slT) {
    push("I", "om", "Coleslaw portions per head below standard", "Coleslaw yield", r.coleslawPerHead.toFixed(1), `≥ ${slT} / head`);
  }
  if (r.wastage > 500) {
    push("I", "om", "Wastage exceeds write-off threshold", "Wastage", `KES ${Math.round(r.wastage)}`, "≤ KES 500 without WO-01");
  }
  if (Math.abs(r.cashVar) >= 1 && r.totRev > 0) {
    push("II", "fm", "Cash variance at close", "Cash variance", `KES ${Math.round(r.cashVar)}`, "KES 0");
  }
  if (Math.abs(r.cokeVar) >= 1 && r.totRev > 0) {
    push("II", "fm", "Diet Coke unit variance", "Can variance", `${r.cokeVar} cans`, "0 cans");
  }
  if (r.belowPar.length && r.totRev > 0) {
    push("II", "fm", "Opening stock below par", "Below par", r.belowPar.join(", "), "All items at par");
  }
  if (r.uncovered) {
    push("III", "pc", "Absence without cover", "Staff on station", String(d.staffCount), "Full roster");
  }
  if (d.staff.some((s) => s.name && !s.cert) && (r.totRev > 0 || d.pcSig)) {
    push("III", "pc", "Food-handler certificate not confirmed", "Certificates", "Gap on roster", "All valid");
  }
  if (r.classify === "loss") {
    push("IV", "gm", "Day failed to clear the overhead floor", "Net vs floor", `KES ${Math.round(r.net)}`, "Net ≥ 0");
  }
  return out;
}

export function mergeEdicts(existing: Edict[], generated: Omit<Edict, "id" | "status" | "directive">[]): Edict[] {
  const key = (e: { date: string; title: string }) => `${e.date}::${e.title}`;
  const map = new Map(existing.map((e) => [key(e), e]));
  for (const g of generated) {
    const k = key(g);
    if (!map.has(k)) {
      map.set(k, { ...g, id: uid("ed"), status: "open", directive: "" });
    }
  }
  return [...map.values()];
}

export function applyRecurrence(edicts: Edict[], weekStart: string): Edict[] {
  const weekEnd = addDays(weekStart, 5);
  const inWeek = edicts.filter((e) => e.date >= weekStart && e.date < weekEnd && e.class !== "V");
  const byTitle = new Map<string, Edict[]>();
  for (const e of inWeek) {
    const arr = byTitle.get(e.title) ?? [];
    arr.push(e);
    byTitle.set(e.title, arr);
  }
  const extra: Edict[] = [];
  for (const [title, arr] of byTitle) {
    const days = new Set(arr.map((e) => e.date));
    if (days.size >= 2) {
      const exists = edicts.some((e) => e.class === "V" && e.metric === title && e.date >= weekStart && e.date < weekEnd);
      if (!exists) {
        extra.push({
          id: uid("ed"),
          date: [...days].sort()[1],
          class: "V",
          house: "gm",
          title: "Repeated red cell within the civic week",
          metric: title,
          actual: [...days].sort().join(" + "),
          standard: "No repeated red cell in 5 days",
          status: "open",
          directive: "",
        });
      }
    }
  }
  return extra.length ? [...edicts, ...extra] : edicts;
}

export type WeekRow = {
  key: string;
  label: string;
  house: RoleId | "civic";
  unit: string;
  values: (number | null)[];
  total: number | null;
  avg: number | null;
  target?: number;
  invert?: boolean;
};

export function weekRows(
  weekStart: string,
  dailies: Record<string, Daily>,
  products: Product[],
  floor: number,
): { dates: string[]; rows: WeekRow[]; results: (DayResult | null)[] } {
  const dates = [0, 1, 2, 3, 4].map((i) => addDays(weekStart, i));
  const results = dates.map((dt) => {
    const d = dailies[dt];
    return d ? evaluateDay(d, products, floor) : null;
  });
  const sum = (pick: (r: DayResult) => number | null) => {
    const vals = results.map((r) => (r ? pick(r) : null));
    const nums = vals.filter((v): v is number => v != null);
    const total = nums.length ? nums.reduce((s, n) => s + n, 0) : null;
    const avg = nums.length ? total! / nums.length : null;
    return { values: vals, total, avg };
  };

  const riceT = products.find((p) => p.id === "rice")?.yieldTarget ?? 10;
  const chT = products.find((p) => p.id === "chicken")?.yieldTarget ?? 84;
  const slT = products.find((p) => p.id === "coleslaw")?.yieldTarget ?? 8;

  const rows: WeekRow[] = [
    { key: "riceSold", label: "Rice portions sold", house: "fm", unit: "n", ...sum((r) => r.rev.rice ? r.rev.rice / (products.find((p) => p.id === "rice")?.price || 120) : 0) },
    { key: "chSold", label: "Chicken portions sold", house: "fm", unit: "n", ...sum((r) => r.rev.chicken / (products.find((p) => p.id === "chicken")?.price || 320)) },
    { key: "slSold", label: "Coleslaw portions sold", house: "fm", unit: "n", ...sum((r) => r.rev.coleslaw / (products.find((p) => p.id === "coleslaw")?.price || 80)) },
    { key: "cokeSold", label: "Diet Coke cans sold", house: "fm", unit: "n", ...sum((r) => r.rev.coke / (products.find((p) => p.id === "coke")?.price || 100)) },
    { key: "rev", label: "Gross revenue", house: "fm", unit: "kes", ...sum((r) => r.totRev) },
    { key: "cost", label: "Raw material cost", house: "fm", unit: "kes", ...sum((r) => r.totCost) },
    { key: "gm", label: "Gross margin", house: "civic", unit: "kes", ...sum((r) => r.totGm) },
    { key: "floor", label: "Overhead floor (fixed)", house: "civic", unit: "kes", values: results.map((r) => (r ? r.floor : floor)), total: floor * 5, avg: floor },
    { key: "net", label: "Net profit / (loss)", house: "gm", unit: "kes", ...sum((r) => (r.classify === "empty" ? null : r.net)), target: 0 },
    { key: "chY", label: "Chicken fry yield", house: "om", unit: "pct", ...sum((r) => r.chickenYield), target: chT },
    { key: "riceY", label: "Rice portions / kg raw", house: "om", unit: "n", ...sum((r) => r.ricePerKg), target: riceT },
    { key: "slY", label: "Coleslaw portions / head", house: "om", unit: "n", ...sum((r) => r.coleslawPerHead), target: slT },
    { key: "waste", label: "Wastage", house: "om", unit: "kes", ...sum((r) => r.wastage), target: 500, invert: true },
  ];
  return { dates, rows, results };
}

export function cellRed(row: WeekRow, value: number | null): boolean {
  if (value == null || row.target == null) return false;
  if (row.key === "net") return value < 0;
  if (row.invert) return value > row.target;
  return value < row.target;
}

export function loopStages(d: Daily | undefined, r: DayResult | undefined) {
  const pc = Boolean(d?.pcSig);
  const omOpen = Boolean(d?.omOpenSig);
  const witness = (d?.rice.some((b) => b.yielded > 0) || d?.chicken.some((b) => b.portionsIn > 0) || (d?.coleslawPortions ?? 0) > 0);
  const memory = (d?.wastage.some((w) => w.kes > 0) || Boolean(d?.omCloseSig));
  const fm = Boolean(d?.fmSig);
  const seal = Boolean(d?.sealed && d?.gmSig);
  return [
    { id: "pc", label: "Caretaker presence", house: "PC", done: pc, note: pc ? "Roster confirmed" : "Opening staff check" },
    { id: "om", label: "Frontline witness", house: "OM", done: omOpen && witness, note: witness ? "Yield logged" : "Production not yet logged" },
    { id: "mem", label: "Narrative memory", house: "OM / FM", done: memory || fm, note: memory ? "Deviations on the day book" : "No deviations logged" },
    { id: "fm", label: "Self-regulation", house: "FM", done: fm, note: fm ? "Cash reconciled" : "Close the till" },
    { id: "gm", label: "Legitimate authority", house: "GM", done: seal, note: seal ? `Day sealed · ${r?.classify}` : "Awaiting GM seal" },
    { id: "civic", label: "Civic score", house: "Week", done: seal, note: "Feeds the Monday matrix" },
  ] as const;
}
