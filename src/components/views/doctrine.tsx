import { Kicker, Panel } from "@/components/ui/primitives";
import { SOPS } from "@/lib/os/doctrine";

export function DoctrineView() {
  return (
    <div className="flex flex-col gap-6">
      <header>
        <Kicker>Standard operating procedures</Kicker>
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          Five core SOPs — the physical unit in every step
        </h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-stone">
          Each SOP names the exact quantity at every step. Where a quantity is the standard, any deviation is logged immediately and brought to the OM.
        </p>
      </header>
      {SOPS.map((sop) => (
        <article key={sop.id} className="overflow-hidden rounded-xl border border-paper-3 bg-cream">
          <header className="flex flex-wrap items-center justify-between gap-2 bg-ink px-5 py-3 text-cream">
            <h2 className="font-display text-base font-semibold">
              {sop.id} · {sop.title}
            </h2>
            <span className="text-[11px] text-dust">{sop.owner}</span>
          </header>
          <ol className="divide-y divide-paper-3 px-5">
            {sop.steps.map((st, i) => (
              <li key={st.measure} className="grid grid-cols-[28px_1fr_auto] items-start gap-3 py-3">
                <span className="mt-0.5 flex size-6 items-center justify-center rounded-full bg-clay text-[11px] font-semibold text-clay-fg">
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed">{st.text}</p>
                <span className="mt-0.5 shrink-0 rounded-sm bg-paper-2 px-2 py-1 text-[10px] font-semibold text-ok">
                  {st.measure}
                </span>
              </li>
            ))}
          </ol>
        </article>
      ))}
      <Panel>
        <p className="text-sm text-stone">
          These five procedures close the loop: procure the unit, convert it through rice, chicken and coleslaw, then reconcile cash and wastage against the floor. Sales close is SOP-05. There is no sixth product and no sixth procedure.
        </p>
      </Panel>
    </div>
  );
}
