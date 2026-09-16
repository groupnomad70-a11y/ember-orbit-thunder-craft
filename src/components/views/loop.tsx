import { ArrowRight, Landmark } from "lucide-react";
import { HouseChip, Kicker, Panel, Signal } from "@/components/ui/primitives";
import { SPECTRUM, LOOP_THESIS } from "@/lib/os/doctrine";
import { ROLES } from "@/lib/os/defaults";
import { dailyFloor, evaluateDay, loopStages } from "@/lib/os/calc";
import { useOs } from "@/lib/os/store";
import { kes, prettyDate, isoDate } from "@/lib/utils";
import type { ViewId } from "@/lib/os/types";

export function LoopView({ onView }: { onView: (v: ViewId) => void }) {
  const products = useOs((s) => s.products);
  const overhead = useOs((s) => s.overhead);
  const daysInMonth = useOs((s) => s.daysInMonth);
  const dailies = useOs((s) => s.dailies);
  const edicts = useOs((s) => s.edicts);
  const venue = useOs((s) => s.venue);
  const today = isoDate();
  const day = dailies[today];
  const floor = dailyFloor(overhead, daysInMonth);
  const result = day ? evaluateDay(day, products, floor) : undefined;
  const stages = loopStages(day, result);
  const openEdicts = edicts.filter((e) => e.status !== "closed").slice(0, 4);
  const kind =
    !result || result.classify === "empty"
      ? "idle"
      : result.classify === "profit"
        ? "ok"
        : result.classify === "breakeven"
          ? "warn"
          : "danger";

  return (
    <div className="flex flex-col gap-8">
      <header>
        <Kicker>Closed-loop developmental OS</Kicker>
        <h1 className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
          The unit of measure is the only lever
        </h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-stone">{LOOP_THESIS}</p>
        <p className="mt-2 text-xs tracking-wide text-dust uppercase">{venue} · {prettyDate(today)}</p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        <Panel className="md:col-span-2">
          <p className="text-[10px] font-semibold tracking-[0.18em] text-stone uppercase">
            Today vs overhead floor
          </p>
          <div className="mt-2 font-display text-5xl font-semibold tabular-nums tracking-tight">
            {result && result.classify !== "empty" ? (
              <span className={result.net >= 0 ? "text-ok" : "text-danger"}>
                {result.net >= 0 ? "+" : "−"}
                {kes(Math.abs(result.net))}
              </span>
            ) : (
              <span className="text-dust">—</span>
            )}
          </div>
          <div className="mt-3">
            <Signal kind={kind}>
              {result?.classify === "profit"
                ? `Profit — floor of KES ${kes(floor)} cleared`
                : result?.classify === "loss"
                  ? `Loss — short of the KES ${kes(floor)} floor`
                  : result?.classify === "breakeven"
                    ? "Exactly break-even"
                    : "Seal today’s sales on the Daily desk to generate the signal"}
            </Signal>
          </div>
          <button
            onClick={() => onView("daily")}
            className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-clay hover:underline"
          >
            Open today’s desk <ArrowRight className="size-4" />
          </button>
        </Panel>
        <Panel>
          <p className="text-[10px] font-semibold tracking-[0.18em] text-stone uppercase">Floor</p>
          <div className="mt-2 font-display text-4xl font-semibold tabular-nums text-ink">
            {kes(Math.round(floor))}
          </div>
          <p className="mt-2 text-sm text-stone">
            KES per day. Fixed. Does not move with covers. Edit the lines on Units.
          </p>
        </Panel>
      </div>

      <div>
        <h2 className="mb-4 font-display text-xl font-semibold">The developmental sequence</h2>
        <ol className="grid gap-3 md:grid-cols-5">
          {SPECTRUM.map((s, i) => {
            const st = stages[i];
            return (
              <li key={s.n} className="rounded-xl border border-paper-3 bg-cream p-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[11px] text-clay">{s.n}</span>
                  <span
                    className={
                      st?.done
                        ? "size-2 rounded-full bg-ok"
                        : "size-2 rounded-full bg-dust"
                    }
                  />
                </div>
                <h3 className="mt-2 font-display text-[15px] font-semibold leading-snug">{s.name}</h3>
                <p className="mt-1 text-[11px] tracking-wide text-stone uppercase">{s.house}</p>
                <p className="mt-2 text-[12px] leading-relaxed text-stone">{s.body}</p>
                <p className="mt-3 text-[11px] font-medium text-ink">{st?.note ?? s.measure}</p>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Panel>
          <h2 className="font-display text-lg font-semibold">Four houses</h2>
          <ul className="mt-4 divide-y divide-paper-3">
            {ROLES.map((r) => (
              <li key={r.id} className="flex items-start justify-between gap-3 py-3">
                <div>
                  <div className="flex items-center gap-2">
                    <HouseChip role={r.id} />
                    <span className="font-medium">{r.house}</span>
                  </div>
                  <p className="mt-1 text-sm text-stone">{r.brief}</p>
                </div>
              </li>
            ))}
          </ul>
        </Panel>
        <Panel>
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-semibold">Open edicts</h2>
            <Landmark className="size-4 text-clay" />
          </div>
          {openEdicts.length === 0 ? (
            <p className="mt-4 text-sm text-stone">No open edicts. Red cells on the weekly matrix issue them automatically.</p>
          ) : (
            <ul className="mt-4 space-y-3">
              {openEdicts.map((e) => (
                <li key={e.id} className="rounded-lg border border-paper-3 bg-paper px-3 py-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-mono text-[11px] text-clay">Class {e.class}</span>
                    <HouseChip role={e.house} />
                  </div>
                  <p className="mt-1 text-sm font-medium">{e.title}</p>
                  <p className="text-[12px] text-stone">
                    {e.actual} against {e.standard}
                  </p>
                </li>
              ))}
            </ul>
          )}
          <button
            onClick={() => onView("edicts")}
            className="mt-4 text-sm font-medium text-clay hover:underline"
          >
            Rights matrix & audit
          </button>
        </Panel>
      </div>
    </div>
  );
}
