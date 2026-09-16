import { Drumstick, CupSoda, Salad, Wheat } from "lucide-react";
import { Field, Kicker, NumInput, Panel, TextInput } from "@/components/ui/primitives";
import {
  breakEvenCovers,
  coverMargin,
  dailyFloor,
  monthlyOverhead,
  targetCovers,
} from "@/lib/os/calc";
import { useOs } from "@/lib/os/store";
import { kes } from "@/lib/utils";
import type { ProductId } from "@/lib/os/types";

const ICONS: Record<ProductId, typeof Wheat> = {
  rice: Wheat,
  chicken: Drumstick,
  coleslaw: Salad,
  coke: CupSoda,
};
const TINT: Record<ProductId, string> = {
  rice: "text-unit-rice",
  chicken: "text-unit-chicken",
  coleslaw: "text-unit-coleslaw",
  coke: "text-unit-coke",
};

export function UnitsView() {
  const products = useOs((s) => s.products);
  const overhead = useOs((s) => s.overhead);
  const days = useOs((s) => s.daysInMonth);
  const venue = useOs((s) => s.venue);
  const patchProduct = useOs((s) => s.patchProduct);
  const patchOverhead = useOs((s) => s.patchOverhead);
  const setDaysInMonth = useOs((s) => s.setDaysInMonth);
  const setVenue = useOs((s) => s.setVenue);
  const floor = dailyFloor(overhead, days);
  const gm = coverMargin(products);
  const be = breakEvenCovers(floor, gm);
  const tgt = targetCovers(floor, gm);

  return (
    <div className="flex flex-col gap-8">
      <header>
        <Kicker>Standard units of truth</Kicker>
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          Four products, a floor, and nothing else
        </h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-stone">
          Every duty, checklist item, and edict traces to these cards. Selling prices are market-fixed.
          Change a number here and the daily desk, weekly matrix, and edicts recompute.
        </p>
      </header>

      <Field label="Venue" className="max-w-md">
        <TextInput value={venue} onChange={(e) => setVenue(e.target.value)} />
      </Field>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((p) => {
          const Icon = ICONS[p.id];
          const margin = p.price - p.rawCost;
          return (
            <article key={p.id} className="rounded-xl border border-paper-3 bg-cream p-4">
              <div className="flex items-center justify-between">
                <Icon className={`size-5 ${TINT[p.id]}`} strokeWidth={1.6} />
                <span className="text-[10px] tracking-wider text-stone uppercase">{p.owner} owns yield</span>
              </div>
              <h2 className="mt-3 font-display text-lg font-semibold">{p.name}</h2>
              <p className="text-[12px] text-stone">{p.rawMaterial}</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <Field label="Sell (KES)">
                  <NumInput value={p.price} onValue={(n) => patchProduct(p.id, { price: n })} />
                </Field>
                <Field label="Raw cost">
                  <NumInput value={p.rawCost} onValue={(n) => patchProduct(p.id, { rawCost: n })} />
                </Field>
              </div>
              <p className={`mt-3 font-display text-2xl font-semibold tabular-nums ${TINT[p.id]}`}>
                {kes(p.price)}
              </p>
              <p className="text-[12px] text-stone">{p.stdPortion}</p>
              <p className="mt-2 text-[12px]">
                Margin <span className="font-medium tabular-nums text-ok">KES {kes(margin)}</span>
              </p>
              <dl className="mt-3 space-y-1 text-[11px] text-stone">
                <div>Buy: {p.purchaseUnit}</div>
                <div>Yield: {p.portionsPerUnit}</div>
                <div>Waste: {p.wastageTolerance}</div>
                <div>
                  Target: {p.yieldTarget} {p.yieldLabel}
                </div>
              </dl>
            </article>
          );
        })}
      </div>

      <div>
        <h2 className="mb-3 font-display text-xl font-semibold">Fixed daily overhead — the floor</h2>
        <p className="mb-4 max-w-2xl text-sm text-stone">
          These costs exist whether one plate is sold or one hundred. Gross margin from the four units must exceed this floor before profit exists. East-African urban baseline; every line is editable.
        </p>
        <div className="overflow-hidden rounded-xl border border-paper-3">
          <div className="grid grid-cols-[1fr_110px_110px_1fr] bg-ink px-4 py-2.5 text-[11px] font-semibold tracking-wider text-cream uppercase">
            <span>Cost line</span>
            <span className="text-right">Monthly</span>
            <span className="text-right">Daily</span>
            <span className="text-right">Basis</span>
          </div>
          {overhead.map((l) => (
            <div
              key={l.id}
              className="grid grid-cols-[1fr_110px_110px_1fr] items-center gap-2 border-b border-paper-3 bg-cream px-4 py-2 text-sm last:border-0"
            >
              <span>{l.label}</span>
              <NumInput value={l.monthly} onValue={(n) => patchOverhead(l.id, n)} className="min-h-9" />
              <span className="text-right tabular-nums">{kes(l.monthly / Math.max(1, days))}</span>
              <span className="text-right text-[11px] text-stone">{l.basis}</span>
            </div>
          ))}
          <div className="grid grid-cols-[1fr_110px_110px_1fr] bg-paper-2 px-4 py-3 text-sm font-semibold">
            <span>Daily overhead floor</span>
            <span className="text-right tabular-nums">{kes(monthlyOverhead(overhead))}</span>
            <span className="text-right tabular-nums text-danger">{kes(Math.round(floor))}</span>
            <span className="text-right text-[11px] text-stone">Every day</span>
          </div>
        </div>
        <div className="mt-3 max-w-xs">
          <Field label="Days in month" hint="Floor = monthly total ÷ this">
            <NumInput value={days} onValue={setDaysInMonth} step="1" />
          </Field>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <Panel className="text-center">
          <p className="text-[10px] tracking-[0.16em] text-stone uppercase">Break-even covers</p>
          <p className="mt-2 font-display text-4xl font-semibold tabular-nums">{Number.isFinite(be) ? be : "—"}</p>
          <p className="mt-1 text-xs text-stone">full covers / day minimum</p>
        </Panel>
        <Panel className="text-center">
          <p className="text-[10px] tracking-[0.16em] text-stone uppercase">Gross margin / full cover</p>
          <p className="mt-2 font-display text-4xl font-semibold tabular-nums text-ok">{kes(gm)}</p>
          <p className="mt-1 text-xs text-stone">KES after raw material</p>
        </Panel>
        <Panel className="text-center">
          <p className="text-[10px] tracking-[0.16em] text-stone uppercase">Target (15% buffer)</p>
          <p className="mt-2 font-display text-4xl font-semibold tabular-nums text-clay">{Number.isFinite(tgt) ? tgt : "—"}</p>
          <p className="mt-1 text-xs text-stone">covers to hold a profit buffer</p>
        </Panel>
      </div>
    </div>
  );
}
