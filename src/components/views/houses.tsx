import { HouseChip, Kicker, Panel } from "@/components/ui/primitives";
import { JDS, RIGHTS, SPECTRUM } from "@/lib/os/doctrine";
import { ROLES } from "@/lib/os/defaults";
import type { RoleId } from "@/lib/os/types";

export function HousesView() {
  return (
    <div className="flex flex-col gap-8">
      <header>
        <Kicker>Four houses · bounded authority</Kicker>
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          Duties expressed as daily measurable obligations
        </h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-stone">
          If a duty cannot be reduced to a number on the daily checklist, it does not belong in the job description. Each house owns one or more raw-material levers and is evaluated against those levers, not against effort.
        </p>
      </header>

      <div className="grid gap-3 md:grid-cols-4">
        {SPECTRUM.map((s) => (
          <Panel key={s.n} className="p-4">
            <p className="font-mono text-[11px] text-clay">{s.n}</p>
            <h2 className="mt-1 font-display text-base font-semibold">{s.name}</h2>
            <p className="mt-1 text-[12px] text-stone">{s.house}</p>
          </Panel>
        ))}
      </div>

      {ROLES.map((r) => (
        <JdCard key={r.id} role={r.id} />
      ))}

      <div>
        <h2 className="mb-3 font-display text-xl font-semibold">Rights matrix</h2>
        <p className="mb-4 max-w-2xl text-sm text-stone">
          Authority is bounded. No house may execute an act that belongs to another. Price change is vestigial: the market sets the price; the GM is the only role that may even record a change.
        </p>
        <div className="overflow-x-auto rounded-xl border border-paper-3">
          <table className="w-full min-w-[720px] text-left text-sm">
            <thead className="bg-ink text-[11px] tracking-wider text-cream uppercase">
              <tr>
                <th className="px-3 py-2.5 font-semibold">Act</th>
                <th className="px-3 py-2.5 font-semibold">PC</th>
                <th className="px-3 py-2.5 font-semibold">OM</th>
                <th className="px-3 py-2.5 font-semibold">FM</th>
                <th className="px-3 py-2.5 font-semibold">GM</th>
              </tr>
            </thead>
            <tbody>
              {RIGHTS.map((row) => (
                <tr key={row.action} className="border-t border-paper-3 bg-cream even:bg-paper-2">
                  <td className="px-3 py-2.5 font-medium">{row.action}</td>
                  <td className="px-3 py-2.5 text-stone">{row.pc}</td>
                  <td className="px-3 py-2.5 text-stone">{row.om}</td>
                  <td className="px-3 py-2.5 text-stone">{row.fm}</td>
                  <td className="px-3 py-2.5 text-stone">{row.gm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function JdCard({ role }: { role: RoleId }) {
  const r = ROLES.find((x) => x.id === role)!;
  const duties = JDS[role];
  const bar: Record<RoleId, string> = {
    gm: "border-l-house-gm",
    fm: "border-l-house-fm",
    om: "border-l-house-om",
    pc: "border-l-house-pc",
  };
  return (
    <article className={`overflow-hidden rounded-xl border border-paper-3 border-l-4 bg-cream ${bar[role]}`}>
      <header className="flex flex-wrap items-baseline justify-between gap-2 bg-paper-2 px-5 py-4">
        <div>
          <h2 className="font-display text-lg font-semibold">{r.title}</h2>
          <p className="text-sm text-stone">{r.house} · {r.stage}</p>
        </div>
        <HouseChip role={role} />
      </header>
      <div className="px-5 py-2">
        <div className="grid grid-cols-[1fr_140px_110px] gap-2 py-2 text-[10px] font-semibold tracking-wider text-stone uppercase">
          <span>Duty</span>
          <span className="text-center">Daily metric</span>
          <span className="text-center">Cadence</span>
        </div>
        {duties.map((d) => (
          <div
            key={d.metric}
            className="grid grid-cols-1 gap-1 border-t border-paper-3 py-3 text-sm md:grid-cols-[1fr_140px_110px] md:items-center md:gap-2"
          >
            <p className="leading-snug">{d.text}</p>
            <p className="text-clay md:text-center">{d.metric}</p>
            <p className="text-stone md:text-center">{d.cadence}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
