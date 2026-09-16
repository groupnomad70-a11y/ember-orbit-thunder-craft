import { Button, Field, HouseChip, Kicker, Panel, Select, TextInput } from "@/components/ui/primitives";
import { EDICT_CLASSES } from "@/lib/os/defaults";
import { RIGHTS } from "@/lib/os/doctrine";
import { useOs } from "@/lib/os/store";
import { prettyDate } from "@/lib/utils";
import type { EdictStatus } from "@/lib/os/types";

export function EdictsView() {
  const edicts = useOs((s) => s.edicts);
  const setEdict = useOs((s) => s.setEdict);
  const audit = useOs((s) => s.audit);
  const resetDemo = useOs((s) => s.resetDemo);
  const clearAll = useOs((s) => s.clearAll);
  const log = useOs((s) => s.log);

  const open = edicts.filter((e) => e.status !== "closed");
  const closed = edicts.filter((e) => e.status === "closed");

  return (
    <div className="flex flex-col gap-8">
      <header>
        <Kicker>Parliament roll · Spectrum, edict, audit</Kicker>
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          A red cell is an edict of a named class
        </h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-stone">
          The weekly matrix does not persuade. It classifies. Class I is yield (OM). Class II is ledger (FM). Class III is presence (PC). Class IV is the floor (GM). Class V is recurrence — the civic week repeating a failure.
        </p>
      </header>

      <div className="grid gap-3 md:grid-cols-5">
        {Object.entries(EDICT_CLASSES).map(([k, v]) => (
          <Panel key={k} className="p-4">
            <p className="font-mono text-[11px] text-clay">Class {k}</p>
            <h2 className="mt-1 font-display text-base font-semibold">{v.name}</h2>
            <p className="mt-1 text-[12px] text-stone">{v.house}</p>
            <p className="mt-2 text-[12px] leading-relaxed text-stone">{v.trigger}</p>
          </Panel>
        ))}
      </div>

      <section>
        <h2 className="mb-3 font-display text-xl font-semibold">Open edicts</h2>
        {open.length === 0 ? (
          <Panel>
            <p className="text-sm text-stone">None open. Seal a day with a red cell to issue one.</p>
          </Panel>
        ) : (
          <ul className="space-y-3">
            {open.map((e) => (
              <li key={e.id} className="rounded-xl border border-paper-3 bg-cream p-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] text-clay">Class {e.class}</span>
                    <HouseChip role={e.house} />
                    <span className="text-[12px] text-stone">{prettyDate(e.date)}</span>
                  </div>
                  <Select
                    className="w-40 min-h-10"
                    value={e.status}
                    onChange={(ev) => setEdict(e.id, { status: ev.target.value as EdictStatus })}
                  >
                    <option value="open">Open</option>
                    <option value="directed">Directed</option>
                    <option value="closed">Closed</option>
                  </Select>
                </div>
                <h3 className="mt-2 font-display text-lg font-semibold">{e.title}</h3>
                <p className="text-sm text-stone">
                  {e.metric}: {e.actual} · standard {e.standard}
                </p>
                <Field label="Directive to the owning house" className="mt-3">
                  <TextInput
                    value={e.directive}
                    onChange={(ev) => setEdict(e.id, { directive: ev.target.value })}
                    placeholder="What the house will change before the next shift"
                  />
                </Field>
                <Button
                  className="mt-3 min-h-10"
                  variant="paper"
                  onClick={() => {
                    setEdict(e.id, { status: "directed" });
                    log("gm", "Edict directed", `${e.class} · ${e.title}`);
                  }}
                >
                  Direct the house
                </Button>
              </li>
            ))}
          </ul>
        )}
      </section>

      {closed.length ? (
        <section>
          <h2 className="mb-3 font-display text-lg font-semibold">Closed</h2>
          <ul className="space-y-2 text-sm text-stone">
            {closed.map((e) => (
              <li key={e.id}>
                Class {e.class} · {e.title} · {prettyDate(e.date)}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section>
        <h2 className="mb-3 font-display text-xl font-semibold">Audit trail</h2>
        <div className="overflow-hidden rounded-xl border border-paper-3">
          {audit.length === 0 ? (
            <p className="p-4 text-sm text-stone">Empty.</p>
          ) : (
            <ul className="divide-y divide-paper-3 bg-cream">
              {audit.map((a) => (
                <li key={a.id} className="grid gap-1 px-4 py-3 text-sm md:grid-cols-[160px_80px_1fr]">
                  <span className="font-mono text-[11px] text-stone">
                    {new Date(a.ts).toLocaleString("en-KE", { hour12: false })}
                  </span>
                  <span className="text-[11px] font-semibold tracking-wider text-clay uppercase">{a.actor}</span>
                  <span>
                    <span className="font-medium text-ink">{a.action}</span>
                    <span className="text-stone"> — {a.detail}</span>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <Panel>
        <h2 className="font-display text-lg font-semibold">Ledger controls</h2>
        <p className="mt-1 text-sm text-stone">
          This OS stores itself in the browser. Download HTML for a portable copy that works without a network.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Button variant="paper" onClick={resetDemo}>
            Restore demo week
          </Button>
          <Button variant="ghost" onClick={clearAll}>
            Clear all records
          </Button>
        </div>
      </Panel>

      <details className="rounded-xl border border-paper-3 bg-cream p-4">
        <summary className="cursor-pointer font-display text-base font-semibold">Rights matrix (reference)</summary>
        <div className="mt-3 overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="text-[11px] tracking-wider text-stone uppercase">
              <tr>
                <th className="py-2">Act</th>
                <th>PC</th>
                <th>OM</th>
                <th>FM</th>
                <th>GM</th>
              </tr>
            </thead>
            <tbody>
              {RIGHTS.map((r) => (
                <tr key={r.action} className="border-t border-paper-3">
                  <td className="py-2 font-medium">{r.action}</td>
                  <td className="text-stone">{r.pc}</td>
                  <td className="text-stone">{r.om}</td>
                  <td className="text-stone">{r.fm}</td>
                  <td className="text-stone">{r.gm}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>
    </div>
  );
}
