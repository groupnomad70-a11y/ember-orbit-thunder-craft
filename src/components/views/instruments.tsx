import { Button, Field, Kicker, NumInput, Panel, Select, TextArea, TextInput } from "@/components/ui/primitives";
import { PRODUCTS } from "@/lib/os/defaults";
import { useOs } from "@/lib/os/store";

export function InstrumentsView() {
  const po = useOs((s) => s.po);
  const wo = useOs((s) => s.wo);
  const price = useOs((s) => s.priceChange);
  const patchPo = useOs((s) => s.patchPo);
  const patchWo = useOs((s) => s.patchWo);
  const patchPrice = useOs((s) => s.patchPrice);
  const sealPrice = useOs((s) => s.sealPrice);
  const log = useOs((s) => s.log);
  const products = useOs((s) => s.products);

  return (
    <div className="flex flex-col gap-8">
      <header>
        <Kicker>Approval instruments</Kicker>
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          Three forms — every significant decision leaves a trail
        </h1>
        <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-stone">
          No financial commitment, write-off, or (vestigial) price change happens without a counter-signature. These are the paper backbone of the daily desk.
        </p>
      </header>

      <article className="overflow-hidden rounded-xl border border-paper-3 bg-cream">
        <header className="flex items-start justify-between gap-4 border-b-2 border-clay px-5 py-4">
          <div>
            <h2 className="font-display text-lg font-semibold">PO-01 · Daily procurement order</h2>
            <p className="mt-1 text-[12px] text-stone">Initiated: FM · Approved: GM · Executed: FM on receipt</p>
          </div>
          <span className="flex size-12 items-center justify-center rounded-full border-2 border-paper-3 bg-paper-2 font-display text-sm text-clay">
            PO
          </span>
        </header>
        <div className="grid gap-3 p-5 sm:grid-cols-4">
          <Field label="Reference">
            <TextInput value={po.ref} onChange={(e) => patchPo({ ref: e.target.value })} />
          </Field>
          <Field label="Order date">
            <TextInput type="date" value={po.date} onChange={(e) => patchPo({ date: e.target.value })} />
          </Field>
          <Field label="Required delivery">
            <TextInput type="date" value={po.delivery} onChange={(e) => patchPo({ delivery: e.target.value })} />
          </Field>
          <Field label="Supplier">
            <TextInput value={po.supplier} onChange={(e) => patchPo({ supplier: e.target.value })} />
          </Field>
          <Field label="Estimated total (KES)">
            <NumInput value={po.total} onValue={(n) => patchPo({ total: n })} />
          </Field>
          <Field label="Within budget?">
            <Select
              value={po.withinBudget ? "yes" : "no"}
              onChange={(e) => patchPo({ withinBudget: e.target.value === "yes" })}
            >
              <option value="yes">Yes — within daily budget</option>
              <option value="no">No — GM variance</option>
            </Select>
          </Field>
          <Field label="FM notes" className="sm:col-span-2">
            <TextInput value={po.notes} onChange={(e) => patchPo({ notes: e.target.value })} />
          </Field>
        </div>
        <Sigs
          a={{ label: "Finance Manager — initiator", value: po.fmName, on: (v) => patchPo({ fmName: v }) }}
          b={{ label: "General Manager — approval required", value: po.gmName, on: (v) => patchPo({ gmName: v }) }}
          c={{ label: "FM — delivery received", value: po.recvName, on: (v) => patchPo({ recvName: v }) }}
        />
        <div className="px-5 pb-5">
          <Button
            variant="ink"
            disabled={!po.gmName.trim()}
            onClick={() => {
              patchPo({ sealed: true });
              log("gm", "PO-01 sealed", `${po.ref} · ${po.supplier} · KES ${po.total}`);
            }}
          >
            Seal procurement order
          </Button>
        </div>
      </article>

      <article className="overflow-hidden rounded-xl border border-paper-3 bg-cream">
        <header className="flex items-start justify-between gap-4 border-b-2 border-clay px-5 py-4">
          <div>
            <h2 className="font-display text-lg font-semibold">WO-01 · Wastage write-off</h2>
            <p className="mt-1 text-[12px] text-stone">Required when total wastage exceeds KES 500 in any shift</p>
          </div>
          <span className="flex size-12 items-center justify-center rounded-full border-2 border-paper-3 bg-paper-2 font-display text-sm text-clay">
            WO
          </span>
        </header>
        <div className="grid gap-3 p-5 sm:grid-cols-4">
          <Field label="Reference">
            <TextInput value={wo.ref} onChange={(e) => patchWo({ ref: e.target.value })} />
          </Field>
          <Field label="Date">
            <TextInput type="date" value={wo.date} onChange={(e) => patchWo({ date: e.target.value })} />
          </Field>
          <Field label="Time">
            <TextInput type="time" value={wo.time} onChange={(e) => patchWo({ time: e.target.value })} />
          </Field>
          <Field label="KES value">
            <NumInput value={wo.value} onValue={(n) => patchWo({ value: n })} />
          </Field>
          <Field label="What happened" className="sm:col-span-2">
            <TextArea value={wo.description} onChange={(e) => patchWo({ description: e.target.value })} />
          </Field>
          <Field label="Corrective action" className="sm:col-span-2">
            <TextArea value={wo.corrective} onChange={(e) => patchWo({ corrective: e.target.value })} />
          </Field>
        </div>
        <Sigs
          a={{ label: "Operations Manager — initiator", value: wo.omName, on: (v) => patchWo({ omName: v }) }}
          b={{ label: "Finance Manager — value verified", value: wo.fmName, on: (v) => patchWo({ fmName: v }) }}
          c={{ label: "General Manager — write-off approved", value: wo.gmName, on: (v) => patchWo({ gmName: v }) }}
        />
        <div className="px-5 pb-5">
          <Button
            variant="ink"
            disabled={!wo.gmName.trim() || !wo.omName.trim() || !wo.fmName.trim()}
            onClick={() => {
              patchWo({ sealed: true });
              log("gm", "WO-01 sealed", `${wo.ref} · KES ${wo.value}`);
            }}
          >
            Seal write-off
          </Button>
        </div>
      </article>

      <article className="relative overflow-hidden rounded-xl border border-dashed border-dust bg-cream">
        <div className="pointer-events-none absolute right-6 top-6 rotate-12 font-display text-2xl tracking-[0.3em] text-dust/50 uppercase">
          Vestigial
        </div>
        <header className="flex items-start justify-between gap-4 border-b border-paper-3 px-5 py-4">
          <div>
            <h2 className="font-display text-lg font-semibold">PA-01 · Price-change authority</h2>
            <p className="mt-1 max-w-xl text-[12px] text-stone">
              Price is fixed by the market. This instrument exists only to record that no house may alter a selling price without the GM’s exclusive seal — and that the GM ought not to.
            </p>
          </div>
          <span className="flex size-12 items-center justify-center rounded-full border-2 border-paper-3 bg-paper-2 font-display text-sm text-dust">
            PA
          </span>
        </header>
        <div className="grid gap-3 p-5 sm:grid-cols-4">
          <Field label="Reference">
            <TextInput value={price.ref} onChange={(e) => patchPrice({ ref: e.target.value })} />
          </Field>
          <Field label="Product">
            <Select
              value={price.product}
              onChange={(e) => {
                const id = e.target.value as typeof price.product;
                const p = products.find((x) => x.id === id) ?? PRODUCTS[0];
                patchPrice({ product: id, from: p.price, to: p.price });
              }}
            >
              {products.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </Select>
          </Field>
          <Field label="From (KES)">
            <NumInput value={price.from} onValue={(n) => patchPrice({ from: n })} />
          </Field>
          <Field label="To (KES)">
            <NumInput value={price.to} onValue={(n) => patchPrice({ to: n })} />
          </Field>
          <Field label="Market-floor reason" className="sm:col-span-4">
            <TextArea value={price.reason} onChange={(e) => patchPrice({ reason: e.target.value })} />
          </Field>
          <Field label="GM exclusive signature" className="sm:col-span-2">
            <TextInput value={price.gmName} onChange={(e) => patchPrice({ gmName: e.target.value })} />
          </Field>
        </div>
        <div className="px-5 pb-5">
          <Button variant="ghost" disabled={!price.gmName.trim()} onClick={sealPrice}>
            Record vestigial seal (updates unit card)
          </Button>
          {price.sealed ? (
            <p className="mt-2 text-sm text-warn">Sealed. The unit card now carries the new price. Treat this as an exceptional act.</p>
          ) : null}
        </div>
      </article>
    </div>
  );
}

function Sigs({
  a,
  b,
  c,
}: {
  a: { label: string; value: string; on: (v: string) => void };
  b: { label: string; value: string; on: (v: string) => void };
  c: { label: string; value: string; on: (v: string) => void };
}) {
  return (
    <div className="grid gap-4 border-t border-paper-3 px-5 py-5 sm:grid-cols-3">
      {[a, b, c].map((s) => (
        <div key={s.label} className="border-t-2 border-clay pt-3">
          <p className="text-[10px] font-semibold tracking-wider text-clay uppercase">{s.label}</p>
          <TextInput className="mt-2 border-0 border-b border-ink-3 bg-transparent px-0" value={s.value} onChange={(e) => s.on(e.target.value)} placeholder="Full name" />
        </div>
      ))}
    </div>
  );
}
