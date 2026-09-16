import { useMemo, useState } from "react";
import { Button, Field, HouseChip, Kicker, Panel, Select, TextInput } from "@/components/ui/primitives";
import { cellRed, dailyFloor, weekRows } from "@/lib/os/calc";
import { useOs } from "@/lib/os/store";
import { isoDate, kes, mondayOf, prettyDate } from "@/lib/utils";
import type { RoleId } from "@/lib/os/types";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri"];

function fmt(unit: string, n: number | null) {
  if (n == null) return "—";
  if (unit === "kes") return kes(Math.round(n));
  if (unit === "pct") return `${n.toFixed(1)}%`;
  return n.toFixed(n % 1 ? 1 : 0);
}

export function WeeklyView() {
  const [week, setWeek] = useState(mondayOf(isoDate()));
  const [klass, setKlass] = useState("");
  const [lowest, setLowest] = useState("");
  const [assigned, setAssigned] = useState("");
  const [deadline, setDeadline] = useState("");
  const [gm, setGm] = useState("");
  const [fm, setFm] = useState("");
  const dailies = useOs((s) => s.dailies);
  const products = useOs((s) => s.products);
  const floor = dailyFloor(useOs((s) => s.overhead), useOs((s) => s.daysInMonth));
  const log = useOs((s) => s.log);
  const { dates, rows } = useMemo(
    () => weekRows(week, dailies, products, floor),
    [week, dailies, products, floor],
  );

  return (
    <div className="flex flex-col gap-6">
      <header>
        <Kicker>Civic score · Monday before 09:00</Kicker>
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          Five days at a glance
        </h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-stone">
          Compiled from the five sealed daily desks. A red cell is not a comment. It is an edict against the owning house. Totals are calculated — they cannot be typed.
        </p>
      </header>

      <Field label="Week commencing Monday" className="w-52">
        <TextInput
          type="date"
          value={week}
          onChange={(e) => setWeek(mondayOf(e.target.value || week))}
        />
      </Field>

      <div className="overflow-x-auto rounded-xl border border-paper-3">
        <table className="w-full min-w-[760px] text-sm">
          <thead>
            <tr className="bg-ink text-[11px] tracking-wider text-cream uppercase">
              <th className="px-3 py-2.5 text-left font-semibold">Metric</th>
              {DAYS.map((d, i) => (
                <th key={d} className="px-2 py-2.5 text-center font-semibold">
                  {d}
                  <div className="font-sans text-[10px] font-normal normal-case tracking-normal text-dust">
                    {prettyDate(dates[i]).split(",")[0]}
                  </div>
                </th>
              ))}
              <th className="bg-clay px-3 py-2.5 text-center font-semibold">Week</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.key} className="border-t border-paper-3 bg-cream even:bg-paper-2">
                <td className="px-3 py-2 font-medium">
                  <span className="mr-2">
                    {row.house !== "civic" ? <HouseChip role={row.house as RoleId} /> : null}
                  </span>
                  {row.label}
                </td>
                {row.values.map((v, i) => {
                  const red = cellRed(row, v);
                  return (
                    <td
                      key={i}
                      className={
                        "px-2 py-2 text-center tabular-nums " +
                        (red ? "bg-danger-soft font-semibold text-danger" : "text-ink")
                      }
                    >
                      {fmt(row.unit, v)}
                    </td>
                  );
                })}
                <td className="bg-paper-2 px-3 py-2 text-center font-semibold tabular-nums">
                  {fmt(row.unit, row.key.includes("Y") ? row.avg : row.total)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Panel>
        <h2 className="font-display text-lg font-semibold">GM weekly review</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <Field label="Week classified as">
            <Select value={klass} onChange={(e) => setKlass(e.target.value)}>
              <option value="">Select</option>
              <option value="profit">Profitable week</option>
              <option value="mixed">Mixed — action required</option>
              <option value="loss">Loss week — escalation</option>
            </Select>
          </Field>
          <Field label="Lowest-yield product">
            <Select value={lowest} onChange={(e) => setLowest(e.target.value)}>
              <option value="">Select</option>
              <option value="rice">Rice — portion yield</option>
              <option value="chicken">Chicken — fry yield</option>
              <option value="coleslaw">Coleslaw — trim loss</option>
              <option value="coke">Coke — unit variance</option>
            </Select>
          </Field>
          <Field label="Corrective action assigned">
            <Select value={assigned} onChange={(e) => setAssigned(e.target.value)}>
              <option value="">Select house</option>
              <option value="om">OM — retrain production standard</option>
              <option value="fm">FM — adjust procurement</option>
              <option value="pc">PC — increase portion-control checks</option>
              <option value="gm">GM — pricing review (escalation only)</option>
            </Select>
          </Field>
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          <Field label="Action deadline">
            <TextInput type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
          </Field>
          <Field label="GM signature">
            <TextInput value={gm} onChange={(e) => setGm(e.target.value)} />
          </Field>
          <Field label="FM signature">
            <TextInput value={fm} onChange={(e) => setFm(e.target.value)} />
          </Field>
        </div>
        <Button
          className="mt-4"
          variant="ink"
          disabled={!gm.trim()}
          onClick={() => log("gm", "Weekly civic score signed", `${week} · ${klass || "unclassified"} · ${lowest || "n/a"}`)}
        >
          Sign weekly review
        </Button>
      </Panel>
    </div>
  );
}
