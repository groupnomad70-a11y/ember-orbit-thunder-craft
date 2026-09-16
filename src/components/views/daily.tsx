import { useEffect, useMemo, useState } from "react";
import { Button, Field, HouseChip, Kicker, NumInput, Panel, Select, Signal, TextInput } from "@/components/ui/primitives";
import { PAR } from "@/lib/os/defaults";
import { dailyFloor, evaluateDay } from "@/lib/os/calc";
import { useOs } from "@/lib/os/store";
import { isoDate, kes, prettyDate, weekday } from "@/lib/utils";
import type { Daily, ProductId, RoleId, StockKey } from "@/lib/os/types";

const ROLES: { id: RoleId; label: string; phase: string }[] = [
  { id: "pc", label: "PC · Presence", phase: "Opening / during" },
  { id: "om", label: "OM · Production", phase: "Open / batch / close" },
  { id: "fm", label: "FM · Ledger", phase: "Close 20:30" },
  { id: "gm", label: "GM · Seal", phase: "Before lockup" },
];

export function DailyView() {
  const [date, setDate] = useState(isoDate);
  const [role, setRole] = useState<RoleId>("pc");
  const ensureDay = useOs((s) => s.ensureDay);
  const day = useOs((s) => s.dailies[date]);
  const patchDay = useOs((s) => s.patchDay);
  const products = useOs((s) => s.products);
  const floor = dailyFloor(useOs((s) => s.overhead), useOs((s) => s.daysInMonth));

  useEffect(() => {
    ensureDay(date);
  }, [date, ensureDay]);

  if (!day) {
    return <p className="text-stone">Opening the day book…</p>;
  }

  const result = evaluateDay(day, products, floor);

  const patch = (p: Partial<Daily> | ((d: Daily) => Daily)) => patchDay(date, p);

  return (
    <div className="flex flex-col gap-6">
      <header>
        <Kicker>Daily operating desk · eight minutes</Kicker>
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          One day, four houses, no interpretation
        </h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-stone">
          Each house fills its own section. Every field is a number, a count, or a yes/no. The GM seals the bottom. The completed form is the day’s audit record and the feed for the Monday matrix.
        </p>
      </header>

      <div className="flex flex-wrap items-end gap-3">
        <Field label="Operating date" className="w-44">
          <TextInput type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </Field>
        <p className="pb-2 text-sm text-stone">
          {prettyDate(date)} · {weekday(date)}
        </p>
        <Field label="Target covers" className="w-32">
          <NumInput value={day.targetCovers} onValue={(n) => patch({ targetCovers: n })} />
        </Field>
        <Field label="Opening" className="w-32">
          <TextInput type="time" value={day.openingTime} onChange={(e) => patch({ openingTime: e.target.value })} />
        </Field>
      </div>

      <div className="no-print flex flex-wrap gap-2">
        {ROLES.map((r) => (
          <button
            key={r.id}
            onClick={() => setRole(r.id)}
            className={
              role === r.id
                ? "min-h-11 rounded-md bg-ink px-4 text-sm text-cream"
                : "min-h-11 rounded-md border border-paper-3 bg-cream px-4 text-sm text-ink hover:bg-paper-2"
            }
          >
            {r.label}
          </button>
        ))}
      </div>

      {role === "pc" && <PcDesk day={day} patch={patch} />}
      {role === "om" && <OmDesk day={day} patch={patch} />}
      {role === "fm" && <FmDesk day={day} patch={patch} products={products} result={result} />}
      {role === "gm" && <GmDesk date={date} day={day} patch={patch} result={result} floor={floor} />}
    </div>
  );
}

function PcDesk({ day, patch }: { day: Daily; patch: (p: Partial<Daily> | ((d: Daily) => Daily)) => void }) {
  return (
    <Panel>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold">Opening staff & compliance · by 07:15</h2>
        <HouseChip role="pc" />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-sm">
          <thead className="text-[10px] tracking-wider text-stone uppercase">
            <tr>
              <th className="pb-2 text-left">Station</th>
              <th className="pb-2 text-left">Name</th>
              <th className="pb-2 text-left">Time in</th>
              <th className="pb-2 text-left">Assigned</th>
              <th className="pb-2">Uniform</th>
              <th className="pb-2">Cert</th>
            </tr>
          </thead>
          <tbody>
            {day.staff.map((s, i) => (
              <tr key={s.station} className="border-t border-paper-3">
                <td className="py-2 pr-2 font-medium">{s.station}</td>
                <td className="py-2 pr-2">
                  <TextInput
                    className="min-h-10"
                    value={s.name}
                    onChange={(e) =>
                      patch((d) => {
                        const staff = d.staff.map((row, j) => (j === i ? { ...row, name: e.target.value } : row));
                        return { ...d, staff };
                      })
                    }
                  />
                </td>
                <td className="py-2 pr-2">
                  <TextInput
                    type="time"
                    className="min-h-10"
                    value={s.timeIn}
                    onChange={(e) =>
                      patch((d) => {
                        const staff = d.staff.map((row, j) => (j === i ? { ...row, timeIn: e.target.value } : row));
                        return { ...d, staff };
                      })
                    }
                  />
                </td>
                <td className="py-2 pr-2">
                  <TextInput
                    className="min-h-10"
                    value={s.assigned}
                    onChange={(e) =>
                      patch((d) => {
                        const staff = d.staff.map((row, j) => (j === i ? { ...row, assigned: e.target.value } : row));
                        return { ...d, staff };
                      })
                    }
                  />
                </td>
                <td className="py-2 text-center">
                  <input
                    type="checkbox"
                    className="size-4 accent-clay"
                    checked={s.uniform}
                    onChange={(e) =>
                      patch((d) => {
                        const staff = d.staff.map((row, j) => (j === i ? { ...row, uniform: e.target.checked } : row));
                        return { ...d, staff };
                      })
                    }
                  />
                </td>
                <td className="py-2 text-center">
                  <input
                    type="checkbox"
                    className="size-4 accent-clay"
                    checked={s.cert}
                    onChange={(e) =>
                      patch((d) => {
                        const staff = d.staff.map((row, j) => (j === i ? { ...row, cert: e.target.checked } : row));
                        return { ...d, staff };
                      })
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <Field label="Staff count">
          <NumInput value={day.staffCount} onValue={(n) => patch({ staffCount: n })} />
        </Field>
        <Field label="Absence">
          <Select value={day.absence} onChange={(e) => patch({ absence: e.target.value as Daily["absence"] })}>
            <option value="none">No absence</option>
            <option value="covered">1 absent — cover arranged</option>
            <option value="uncovered">1 absent — no cover</option>
          </Select>
        </Field>
        <Field label="PC signature">
          <TextInput value={day.pcSig} onChange={(e) => patch({ pcSig: e.target.value })} placeholder="Signed" />
        </Field>
      </div>
    </Panel>
  );
}

function OmDesk({ day, patch }: { day: Daily; patch: (p: Partial<Daily> | ((d: Daily) => Daily)) => void }) {
  const keys = Object.keys(PAR) as StockKey[];
  return (
    <div className="flex flex-col gap-4">
      <Panel>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-display text-lg font-semibold">Opening stock · by 07:15</h2>
          <HouseChip role="om" />
        </div>
        <p className="mb-3 text-sm text-stone">Count physically. No estimates. Below par: tick and alert FM.</p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-sm">
            <thead className="text-[10px] tracking-wider text-stone uppercase">
              <tr>
                <th className="pb-2 text-left">Item</th>
                <th className="pb-2 text-right">Par</th>
                <th className="pb-2 text-right">On hand</th>
                <th className="pb-2 text-center">Below</th>
                <th className="pb-2 text-center">Alerted</th>
              </tr>
            </thead>
            <tbody>
              {keys.map((k) => (
                <tr key={k} className="border-t border-paper-3">
                  <td className="py-2">
                    {PAR[k].label}
                    <span className="ml-1 text-stone">({PAR[k].unit})</span>
                  </td>
                  <td className="py-2 text-right tabular-nums text-stone">{PAR[k].par}</td>
                  <td className="py-2">
                    <NumInput
                      className="min-h-10"
                      value={day.stock[k]}
                      onValue={(n) =>
                        patch((d) => ({
                          ...d,
                          stock: { ...d.stock, [k]: n },
                          belowPar: { ...d.belowPar, [k]: n < PAR[k].par },
                        }))
                      }
                    />
                  </td>
                  <td className="text-center">
                    <input
                      type="checkbox"
                      className="size-4 accent-clay"
                      checked={day.belowPar[k]}
                      onChange={(e) => patch((d) => ({ ...d, belowPar: { ...d.belowPar, [k]: e.target.checked } }))}
                    />
                  </td>
                  <td className="text-center">
                    <input
                      type="checkbox"
                      className="size-4 accent-clay"
                      checked={day.alertSent[k]}
                      onChange={(e) => patch((d) => ({ ...d, alertSent: { ...d.alertSent, [k]: e.target.checked } }))}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <Field label="OM opening signature">
            <TextInput value={day.omOpenSig} onChange={(e) => patch({ omOpenSig: e.target.value })} />
          </Field>
          <Field label="GM reviewed opening">
            <TextInput value={day.gmOpenSig} onChange={(e) => patch({ gmOpenSig: e.target.value })} />
          </Field>
        </div>
      </Panel>

      <Panel>
        <h2 className="mb-3 font-display text-lg font-semibold">Rice — batch log</h2>
        {day.rice.map((b, i) => (
          <div key={i} className="mb-2 grid grid-cols-2 gap-2 md:grid-cols-4">
            <Field label={`Batch ${i + 1} raw g`}>
              <NumInput
                value={b.rawG}
                onValue={(n) =>
                  patch((d) => ({ ...d, rice: d.rice.map((x, j) => (j === i ? { ...x, rawG: n } : x)) }))
                }
              />
            </Field>
            <Field label="Targeted">
              <NumInput
                value={b.targeted}
                onValue={(n) =>
                  patch((d) => ({ ...d, rice: d.rice.map((x, j) => (j === i ? { ...x, targeted: n } : x)) }))
                }
              />
            </Field>
            <Field label="Yielded">
              <NumInput
                value={b.yielded}
                onValue={(n) =>
                  patch((d) => ({ ...d, rice: d.rice.map((x, j) => (j === i ? { ...x, yielded: n } : x)) }))
                }
              />
            </Field>
            <Field label="1-portion g">
              <NumInput
                value={b.portionG}
                onValue={(n) =>
                  patch((d) => ({ ...d, rice: d.rice.map((x, j) => (j === i ? { ...x, portionG: n } : x)) }))
                }
              />
            </Field>
          </div>
        ))}
      </Panel>

      <Panel>
        <h2 className="mb-3 font-display text-lg font-semibold">Chicken — fryer batch log</h2>
        {day.chicken.map((b, i) => (
          <div key={i} className="mb-2 grid grid-cols-2 gap-2 md:grid-cols-4">
            <Field label={`Batch ${i + 1} in`}>
              <NumInput
                value={b.portionsIn}
                onValue={(n) =>
                  patch((d) => ({ ...d, chicken: d.chicken.map((x, j) => (j === i ? { ...x, portionsIn: n } : x)) }))
                }
              />
            </Field>
            <Field label="Oil °C">
              <NumInput
                value={b.oilTemp}
                onValue={(n) =>
                  patch((d) => ({ ...d, chicken: d.chicken.map((x, j) => (j === i ? { ...x, oilTemp: n } : x)) }))
                }
              />
            </Field>
            <Field label="Fry min">
              <NumInput
                value={b.fryMin}
                onValue={(n) =>
                  patch((d) => ({ ...d, chicken: d.chicken.map((x, j) => (j === i ? { ...x, fryMin: n } : x)) }))
                }
              />
            </Field>
            <Field label="Sample g">
              <NumInput
                value={b.sampleG}
                onValue={(n) =>
                  patch((d) => ({ ...d, chicken: d.chicken.map((x, j) => (j === i ? { ...x, sampleG: n } : x)) }))
                }
              />
            </Field>
          </div>
        ))}
      </Panel>

      <Panel>
        <h2 className="mb-3 font-display text-lg font-semibold">Coleslaw — prep batch</h2>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          <Field label="Heads used">
            <NumInput value={day.coleslawHeads} onValue={(n) => patch({ coleslawHeads: n })} />
          </Field>
          <Field label="Trim g">
            <NumInput value={day.coleslawTrimG} onValue={(n) => patch({ coleslawTrimG: n })} />
          </Field>
          <Field label="Usable g">
            <NumInput value={day.coleslawUsableG} onValue={(n) => patch({ coleslawUsableG: n })} />
          </Field>
          <Field label="Portions yielded">
            <NumInput value={day.coleslawPortions} onValue={(n) => patch({ coleslawPortions: n })} />
          </Field>
        </div>
      </Panel>

      <Panel>
        <h2 className="mb-3 font-display text-lg font-semibold">Wastage log</h2>
        {day.wastage.map((w, i) => (
          <div key={i} className="mb-2 grid grid-cols-2 gap-2 md:grid-cols-5">
            <Field label="Time">
              <TextInput
                type="time"
                value={w.time}
                onChange={(e) =>
                  patch((d) => ({ ...d, wastage: d.wastage.map((x, j) => (j === i ? { ...x, time: e.target.value } : x)) }))
                }
              />
            </Field>
            <Field label="Product">
              <Select
                value={w.product}
                onChange={(e) =>
                  patch((d) => ({
                    ...d,
                    wastage: d.wastage.map((x, j) => (j === i ? { ...x, product: e.target.value as ProductId } : x)),
                  }))
                }
              >
                <option value="rice">Rice</option>
                <option value="chicken">Chicken</option>
                <option value="coleslaw">Coleslaw</option>
                <option value="coke">Coke</option>
                <option value="oil">Oil</option>
              </Select>
            </Field>
            <Field label="Qty">
              <TextInput
                value={w.qty}
                onChange={(e) =>
                  patch((d) => ({ ...d, wastage: d.wastage.map((x, j) => (j === i ? { ...x, qty: e.target.value } : x)) }))
                }
              />
            </Field>
            <Field label="Cause">
              <Select
                value={w.cause}
                onChange={(e) =>
                  patch((d) => ({ ...d, wastage: d.wastage.map((x, j) => (j === i ? { ...x, cause: e.target.value } : x)) }))
                }
              >
                <option>Over-prep</option>
                <option>Spoilage</option>
                <option>Overcooking</option>
                <option>Dropped</option>
                <option>Time expired</option>
              </Select>
            </Field>
            <Field label="KES">
              <NumInput
                value={w.kes}
                onValue={(n) =>
                  patch((d) => ({ ...d, wastage: d.wastage.map((x, j) => (j === i ? { ...x, kes: n } : x)) }))
                }
              />
            </Field>
          </div>
        ))}
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <Field label="Covers served">
            <NumInput value={day.coversServed} onValue={(n) => patch({ coversServed: n })} />
          </Field>
          <Field label="OM close signature">
            <TextInput value={day.omCloseSig} onChange={(e) => patch({ omCloseSig: e.target.value })} />
          </Field>
        </div>
      </Panel>
    </div>
  );
}

function FmDesk({
  day,
  patch,
  products,
  result,
}: {
  day: Daily;
  patch: (p: Partial<Daily>) => void;
  products: ReturnType<typeof useOs.getState>["products"];
  result: ReturnType<typeof evaluateDay>;
}) {
  return (
    <Panel>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold">Sales count & cash close · by 20:30</h2>
        <HouseChip role="fm" />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] text-sm">
          <thead className="text-[10px] tracking-wider text-stone uppercase">
            <tr>
              <th className="pb-2 text-left">Product</th>
              <th className="pb-2 text-right">Price</th>
              <th className="pb-2 text-right">Sold</th>
              <th className="pb-2 text-right">Revenue</th>
              <th className="pb-2 text-right">Raw cost</th>
              <th className="pb-2 text-right">Margin</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id} className="border-t border-paper-3">
                <td className="py-2 font-medium">{p.name}</td>
                <td className="py-2 text-right tabular-nums">{p.price}</td>
                <td className="py-2">
                  <NumInput
                    className="min-h-10"
                    value={day.sales[p.id]}
                    onValue={(n) => patch({ sales: { ...day.sales, [p.id]: n } })}
                  />
                </td>
                <td className="py-2 text-right tabular-nums text-stone">{kes(result.rev[p.id])}</td>
                <td className="py-2 text-right tabular-nums text-stone">{kes(result.cost[p.id])}</td>
                <td className="py-2 text-right tabular-nums font-medium">{kes(result.gm[p.id])}</td>
              </tr>
            ))}
            <tr className="border-t-2 border-ink bg-paper-2 font-semibold">
              <td className="py-2" colSpan={3}>Total</td>
              <td className="py-2 text-right tabular-nums">{kes(result.totRev)}</td>
              <td className="py-2 text-right tabular-nums">{kes(result.totCost)}</td>
              <td className="py-2 text-right tabular-nums">{kes(result.totGm)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <Field label="Cash in till">
          <NumInput value={day.till} onValue={(n) => patch({ till: n })} />
        </Field>
        <Field label="Expected cash">
          <TextInput readOnly value={kes(result.totRev)} />
        </Field>
        <Field label="Cash variance">
          <TextInput readOnly value={String(Math.round(result.cashVar))} className={result.cashVar ? "text-danger" : ""} />
        </Field>
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-4">
        <Field label="Coke cases at open">
          <NumInput value={day.cokeOpen} onValue={(n) => patch({ cokeOpen: n })} />
        </Field>
        <Field label="Cases opened today">
          <NumInput value={day.cokeAdded} onValue={(n) => patch({ cokeAdded: n })} />
        </Field>
        <Field label="Cans remaining">
          <NumInput value={day.cokeRemaining} onValue={(n) => patch({ cokeRemaining: n })} />
        </Field>
        <Field label="Can variance">
          <TextInput readOnly value={String(result.cokeVar)} className={result.cokeVar ? "text-danger" : ""} />
        </Field>
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <Field label="Unplanned overhead?">
          <Select
            value={day.unplannedOh ? "yes" : "no"}
            onChange={(e) => patch({ unplannedOh: e.target.value === "yes" })}
          >
            <option value="no">No — within plan</option>
            <option value="yes">Yes — flagged to GM</option>
          </Select>
        </Field>
        <Field label="FM signature">
          <TextInput value={day.fmSig} onChange={(e) => patch({ fmSig: e.target.value })} />
        </Field>
      </div>
    </Panel>
  );
}

function GmDesk({
  date,
  day,
  patch,
  result,
  floor,
}: {
  date: string;
  day: Daily;
  patch: (p: Partial<Daily>) => void;
  result: ReturnType<typeof evaluateDay>;
  floor: number;
}) {
  const sealDay = useOs((s) => s.sealDay);
  const kind =
    result.classify === "profit" ? "ok" : result.classify === "loss" ? "danger" : result.classify === "breakeven" ? "warn" : "idle";
  const reds = useMemo(() => {
    const list: string[] = [];
    if (result.chickenYield != null && result.chickenYield < 84) list.push(`Chicken yield ${result.chickenYield.toFixed(1)}%`);
    if (result.ricePerKg != null && result.ricePerKg < 10) list.push(`Rice ${result.ricePerKg.toFixed(1)} / kg`);
    if (result.coleslawPerHead != null && result.coleslawPerHead < 8) list.push(`Coleslaw ${result.coleslawPerHead.toFixed(1)} / head`);
    if (result.wastage > 500) list.push(`Wastage KES ${kes(result.wastage)}`);
    if (Math.abs(result.cashVar) >= 1 && result.totRev) list.push(`Cash variance ${kes(result.cashVar)}`);
    if (result.uncovered) list.push("Uncovered absence");
    if (result.classify === "loss") list.push("Floor not cleared");
    return list;
  }, [result]);

  return (
    <Panel>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-display text-lg font-semibold">Daily profit signal & sign-off</h2>
        <HouseChip role="gm" />
      </div>
      <div
        className={
          "rounded-xl border-2 px-6 py-8 text-center " +
          (kind === "ok"
            ? "border-ok bg-ok-soft"
            : kind === "danger"
              ? "border-danger bg-danger-soft"
              : kind === "warn"
                ? "border-warn bg-warn-soft"
                : "border-paper-3")
        }
      >
        <p className="text-[10px] tracking-[0.18em] text-stone uppercase">
          Gross margin vs floor (KES {kes(Math.round(floor))})
        </p>
        <p className="mt-2 font-display text-5xl font-semibold tabular-nums">
          {result.classify === "empty" ? "—" : `KES ${kes(Math.abs(result.net))}`}
        </p>
        <div className="mt-3 flex justify-center">
          <Signal kind={kind}>
            {result.classify === "profit"
              ? `Profit — floor cleared by KES ${kes(result.net)}`
              : result.classify === "loss"
                ? `Loss — KES ${kes(Math.abs(result.net))} short of floor`
                : result.classify === "breakeven"
                  ? "Exactly break-even"
                  : "Enter sales in the FM desk to generate the signal"}
          </Signal>
        </div>
      </div>
      {reds.length ? (
        <div className="mt-4 rounded-lg border border-danger/30 bg-danger-soft px-4 py-3 text-sm">
          <p className="font-medium text-danger">Red cells that will issue edicts on seal</p>
          <ul className="mt-1 list-disc pl-5 text-ink">
            {reds.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <Field label="Day classified as">
          <Select value={day.classify} onChange={(e) => patch({ classify: e.target.value as Daily["classify"] })}>
            <option value="">Select after review</option>
            <option value="profit">Profit day</option>
            <option value="breakeven">Break-even day</option>
            <option value="loss">Loss day</option>
          </Select>
        </Field>
        <Field label="Wastage directive?">
          <Select
            value={day.wdRequired ? "yes" : "no"}
            onChange={(e) => patch({ wdRequired: e.target.value === "yes" })}
          >
            <option value="no">No</option>
            <option value="yes">Yes — WD issued</option>
          </Select>
        </Field>
        <Field label="Closing time">
          <TextInput type="time" value={day.closeTime} onChange={(e) => patch({ closeTime: e.target.value })} />
        </Field>
      </div>
      <Field label="Tomorrow’s key action" className="mt-3">
        <TextInput
          value={day.tomorrowAction}
          onChange={(e) => patch({ tomorrowAction: e.target.value })}
          placeholder="e.g. Reduce chicken hold by 2 kg"
        />
      </Field>
      <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end">
        <Field label="GM signature">
          <TextInput
            value={day.gmSig}
            onChange={(e) => patch({ gmSig: e.target.value })}
            placeholder="Full name to seal"
          />
        </Field>
        <Button
          variant="ink"
          disabled={!day.gmSig.trim()}
          onClick={() => sealDay(date, day.gmSig)}
        >
          {day.sealed ? "Re-seal day" : "Seal the day"}
        </Button>
      </div>
      {day.sealed ? <p className="mt-2 text-sm text-ok">Sealed. Edicts (if any) written to the parliament roll.</p> : null}
    </Panel>
  );
}
