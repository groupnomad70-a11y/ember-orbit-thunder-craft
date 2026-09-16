import { LOOP_THESIS, JDS, SOPS, SPECTRUM, RIGHTS } from "./doctrine";
import { EDICT_CLASSES, PAR, ROLES } from "./defaults";
import { coverMargin, dailyFloor, evaluateDay, monthlyOverhead, weekRows } from "./calc";
import type { OsState } from "./types";
import { kes, mondayOf, isoDate } from "@/lib/utils";

function esc(s: string): string {
  const a = "&";
  const map: Record<string, string> = {
    "&": a + "amp;",
    "<": a + "lt;",
    ">": a + "gt;",
    '"': a + "quot;",
    "'": a + "#39;",
  };
  return s.replace(/[&<>"']/g, (c) => map[c] ?? c);
}

export function downloadStandalone(state: OsState) {
  const html = renderStandalone(state);
  const blob = new Blob([html], { type: "text/html;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "Guardian_Parliament_4P_OS.html";
  a.click();
  URL.revokeObjectURL(a.href);
}

export function renderStandalone(state: OsState): string {
  const floor = dailyFloor(state.overhead, state.daysInMonth);
  const gmCover = coverMargin(state.products);
  const today = isoDate();
  const week = mondayOf(today);
  const { dates, rows } = weekRows(week, state.dailies, state.products, floor);
  const day = state.dailies[today];
  const result = day ? evaluateDay(day, state.products, floor) : null;

  const unitCards = state.products
    .map((p) => {
      const m = p.price - p.rawCost;
      return `<div class="pstrip-item">
        <div class="pstrip-name">${esc(p.name)}</div>
        <div class="pstrip-price">KES ${kes(p.price)}</div>
        <div class="pstrip-cost">Raw mat. KES ${kes(p.rawCost)} · ${esc(p.stdPortion)}</div>
        <div class="pstrip-margin">Gross margin KES ${kes(m)}</div>
        <div class="pstrip-cost">${esc(p.purchaseUnit)} · ${esc(p.portionsPerUnit)}</div>
        <div class="pstrip-cost">Owner: ${p.owner.toUpperCase()} · target ${p.yieldTarget} ${esc(p.yieldLabel)}</div>
      </div>`;
    })
    .join("");

  const ohRows = state.overhead
    .map(
      (l) => `<div class="overhead-row">
        <div>${esc(l.label)}</div>
        <div class="oh-day">${kes(l.monthly)}</div>
        <div class="oh-day">${kes(l.monthly / state.daysInMonth)}</div>
        <div class="oh-note">${esc(l.basis)}</div>
      </div>`,
    )
    .join("");

  const spectrum = SPECTRUM.map(
    (s) => `<div class="card">
      <div class="pg-label">${s.n} · ${esc(s.house)}</div>
      <div class="sub-head">${esc(s.name)}</div>
      <p class="pg-desc" style="margin:0">${esc(s.body)}</p>
      <div class="pstrip-margin">${esc(s.measure)}</div>
    </div>`,
  ).join("");

  const jds = ROLES.map((r) => {
    const duties = JDS[r.id]
      .map(
        (d) => `<div class="duty-row"><div class="duty-text">${esc(d.text)}</div><div class="duty-metric">${esc(d.metric)}</div><div class="duty-cadence">${esc(d.cadence)}</div></div>`,
      )
      .join("");
    return `<div class="jd-card" style="--jd-color:var(--accent)"><div class="jd-head"><div><div class="jd-title">${esc(r.title)}</div><div class="jd-sub">${esc(r.house)} · ${esc(r.stage)}</div></div><span class="badge">${r.id.toUpperCase()}</span></div><div class="jd-body">${duties}</div></div>`;
  }).join("");

  const rights = RIGHTS.map(
    (row) => `<tr><td>${esc(row.action)}</td><td>${esc(row.pc)}</td><td>${esc(row.om)}</td><td>${esc(row.fm)}</td><td>${esc(row.gm)}</td></tr>`,
  ).join("");

  const sops = SOPS.map((sop) => {
    const steps = sop.steps
      .map(
        (st, i) => `<div class="sop-step"><div class="sop-num">${i + 1}</div><div class="sop-text">${esc(st.text)}</div><div class="sop-measure">${esc(st.measure)}</div></div>`,
      )
      .join("");
    return `<div class="sop-card"><div class="sop-head">${esc(sop.id)} · ${esc(sop.title)} <span>${esc(sop.owner)}</span></div><div class="sop-body">${steps}</div></div>`;
  }).join("");

  const edictClass = Object.entries(EDICT_CLASSES)
    .map(
      ([k, v]) => `<div class="card"><div class="pg-label">Class ${k}</div><div class="sub-head">${esc(v.name)}</div><p class="pg-desc" style="margin:0">${esc(v.house)}. ${esc(v.trigger)}</p></div>`,
    )
    .join("");

  const edicts = state.edicts
    .map(
      (e) => `<tr><td>Class ${e.class}</td><td>${e.house.toUpperCase()}</td><td>${esc(e.date)}</td><td>${esc(e.title)}</td><td>${esc(e.actual)}</td><td>${esc(e.standard)}</td><td>${e.status}</td></tr>`,
    )
    .join("");

  const weekHead = ["Metric", "Mon", "Tue", "Wed", "Thu", "Fri", "Week"]
    .map((h) => `<th>${h}</th>`)
    .join("");
  const weekBody = rows
    .map((row) => {
      const cells = row.values
        .map((v) => {
          const n = v == null ? "—" : row.unit === "kes" ? kes(Math.round(v)) : row.unit === "pct" ? v.toFixed(1) + "%" : String(Math.round(v * 10) / 10);
          return `<td>${n}</td>`;
        })
        .join("");
      const tot = row.key.includes("Y") ? row.avg : row.total;
      const totS = tot == null ? "—" : row.unit === "kes" ? kes(Math.round(tot)) : String(Math.round((tot as number) * 10) / 10);
      return `<tr><td>${esc(row.label)}</td>${cells}<td>${totS}</td></tr>`;
    })
    .join("");

  const parRows = (Object.keys(PAR) as (keyof typeof PAR)[])
    .map((k) => {
      const on = day?.stock[k] ?? "";
      return `<tr><td>${esc(PAR[k].label)}</td><td>${PAR[k].unit}</td><td>${PAR[k].par}</td><td><input class="cl-input" type="number" value="${on}"></td><td><input class="cl-check" type="checkbox"></td></tr>`;
    })
    .join("");

  const salesRows = state.products
    .map((p) => {
      const sold = day?.sales[p.id] ?? 0;
      return `<tr><td>${esc(p.name)}</td><td>${p.price}</td><td><input class="cl-input sold" data-id="${p.id}" data-price="${p.price}" data-cost="${p.rawCost}" type="number" value="${sold}"></td><td class="rev">—</td><td>${p.rawCost}</td><td class="cost">—</td><td class="gm">—</td></tr>`;
    })
    .join("");

  const payload = JSON.stringify({
    venue: state.venue,
    products: state.products,
    overhead: state.overhead,
    daysInMonth: state.daysInMonth,
    floor,
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Guardian Parliament · 4P Closed-Loop OS</title>
<style>
:root{--ink:#1c1916;--ink-2:#2c2824;--ink-3:#4a453e;--stone:#6f6a62;--dust:#b4aea3;--paper:#f4f0e8;--paper-2:#ebe6dc;--paper-3:#ddd6c8;--cream:#faf7f1;--accent:#b85c1a;--ok:#3d6b45;--danger:#a33b32;--warn:#9a6b12;--radius:4px;--radius-lg:8px}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:Georgia,"Times New Roman",serif;background:var(--paper);color:var(--ink);font-size:14px;line-height:1.65}
.site-nav{background:var(--ink);padding:0 20px;display:flex;align-items:stretch;border-bottom:3px solid var(--accent);position:sticky;top:0;z-index:200;gap:8px}
.nav-brand{color:var(--paper);font-size:13px;padding:14px 16px 14px 0;border-right:1px solid var(--ink-3);margin-right:8px;white-space:nowrap}
.nav-brand strong{color:var(--accent)}
.nav-tabs{display:flex;flex:1;overflow-x:auto}
.ntab{background:transparent;border:none;color:var(--dust);padding:14px 12px;cursor:pointer;font-family:Georgia,serif;font-size:12px;white-space:nowrap;border-bottom:3px solid transparent;margin-bottom:-3px}
.ntab.active,.ntab:hover{color:var(--paper)}
.ntab.active{border-bottom-color:var(--accent)}
.nav-dl{background:var(--accent);color:#fff;border:none;padding:10px 14px;font-family:Georgia,serif;font-size:11px;cursor:pointer;margin:8px 0;border-radius:var(--radius)}
.page{display:none}.page.active{display:block}
.wrap{max-width:1080px;margin:0 auto;padding:32px 24px 64px}
.pg-label{font-size:10px;letter-spacing:2px;color:var(--accent);text-transform:uppercase;margin-bottom:6px}
.pg-title{font-size:26px;font-weight:bold;margin-bottom:8px;line-height:1.25}
.pg-desc{font-size:13px;color:var(--stone);max-width:640px;margin-bottom:24px;line-height:1.75}
.section-head{font-size:15px;font-weight:bold;margin:28px 0 14px;padding-bottom:7px;border-bottom:1px solid var(--paper-3)}
.sub-head{font-size:12px;font-weight:bold;color:var(--accent);letter-spacing:.5px;margin-bottom:8px;text-transform:uppercase}
.card{background:var(--cream);border:1px solid var(--paper-3);border-radius:var(--radius-lg);padding:18px}
.card-grid{display:grid;gap:12px}
.grid-2{grid-template-columns:repeat(2,1fr)}.grid-3{grid-template-columns:repeat(3,1fr)}.grid-5{grid-template-columns:repeat(5,1fr)}
.product-strip{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--paper-3);border:1px solid var(--paper-3);border-radius:var(--radius-lg);overflow:hidden;margin-bottom:24px}
.pstrip-item{background:var(--cream);padding:16px;text-align:center}
.pstrip-name{font-size:12px;font-weight:bold;margin-bottom:4px}
.pstrip-price{font-size:22px;font-weight:bold;color:var(--accent)}
.pstrip-cost{font-size:11px;color:var(--stone);margin-top:2px}
.pstrip-margin{display:inline-block;margin-top:6px;font-size:10px;font-weight:bold;padding:2px 8px;border-radius:99px;background:var(--paper-2);color:var(--ok)}
.overhead-row{display:grid;grid-template-columns:1fr 100px 100px 120px;padding:9px 14px;border-bottom:1px solid var(--paper-3);font-size:13px}
.overhead-row.head{background:var(--ink);color:var(--paper);font-size:11px;font-weight:bold}
.overhead-row.total{background:var(--paper-2);font-weight:bold}
.oh-day{text-align:right}.oh-note{text-align:right;font-size:10px;color:var(--stone)}
.note{font-size:11px;color:var(--stone);font-style:italic;padding:10px 14px;background:var(--paper-2);border-left:3px solid var(--dust);margin-bottom:14px}
.form-section{background:var(--cream);border:1px solid var(--paper-3);border-radius:var(--radius-lg);overflow:hidden;margin-bottom:20px}
.form-section-head{background:var(--ink-2);color:var(--paper);padding:11px 18px;font-size:12px;font-weight:bold;display:flex;justify-content:space-between}
.form-body{padding:18px}
.field-row{display:grid;gap:12px;margin-bottom:12px}
.fr-2{grid-template-columns:repeat(2,1fr)}.fr-3{grid-template-columns:repeat(3,1fr)}.fr-4{grid-template-columns:repeat(4,1fr)}
.field{display:flex;flex-direction:column;gap:4px}
.field label{font-size:10px;font-weight:bold;color:var(--stone);text-transform:uppercase;letter-spacing:.5px}
.field input,.field select,.field textarea,.cl-input,table input,table select{background:#fff;border:1px solid var(--paper-3);border-radius:var(--radius);padding:7px 10px;font-family:Georgia,serif;font-size:13px;color:var(--ink);width:100%}
.cl-input{width:90px;text-align:right}
.cl-check{width:18px;height:18px;accent-color:var(--accent)}
.cl-table,.uom-table,.matrix-table{width:100%;border-collapse:collapse;font-size:12px}
.cl-table th,.uom-table th,.matrix-table th{background:var(--ink);color:var(--paper);padding:8px 10px;text-align:left;font-size:11px}
.cl-table td,.uom-table td,.matrix-table td{padding:8px 10px;border-bottom:1px solid var(--paper-3)}
.matrix-table td{text-align:center}.matrix-table td:first-child{text-align:left;font-weight:bold}
.profit-signal{border:2px solid var(--paper-3);border-radius:var(--radius-lg);padding:24px;text-align:center;background:var(--cream);margin-bottom:16px}
.ps-value{font-size:42px;font-weight:bold}
.jd-card,.sop-card,.approval-doc{background:var(--cream);border:1px solid var(--paper-3);border-radius:var(--radius-lg);overflow:hidden;margin-bottom:16px}
.jd-head{background:var(--paper-2);padding:14px 18px;display:flex;justify-content:space-between;align-items:baseline}
.jd-title{font-size:15px;font-weight:bold}.jd-sub{font-size:11px;color:var(--stone)}
.jd-body{padding:12px 18px}
.duty-row{display:grid;grid-template-columns:1fr 140px 90px;gap:8px;padding:7px 0;border-bottom:1px solid var(--paper-3);font-size:12px}
.duty-metric{color:var(--accent);font-weight:bold;text-align:center}.duty-cadence{color:var(--stone);text-align:center;font-size:11px}
.sop-head{background:var(--ink);color:var(--paper);padding:11px 18px;display:flex;justify-content:space-between;font-size:13px;font-weight:bold}
.sop-head span{font-size:10px;color:var(--dust);font-weight:normal}
.sop-body{padding:12px 18px}
.sop-step{display:grid;grid-template-columns:28px 1fr auto;gap:10px;padding:8px 0;border-bottom:1px solid var(--paper-3);font-size:12px}
.sop-num{width:24px;height:24px;border-radius:50%;background:var(--accent);color:#fff;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:bold}
.sop-measure{font-size:10px;font-weight:bold;padding:2px 7px;background:var(--paper-2);color:var(--ok);white-space:nowrap}
.badge{display:inline-block;padding:2px 8px;border-radius:99px;font-size:10px;font-weight:bold;background:rgba(184,92,26,.12);color:var(--accent)}
.doc-header{border-bottom:3px solid var(--accent);padding:20px 24px 16px}
.doc-title{font-size:18px;font-weight:bold}
.doc-body{padding:20px 24px}
.sig-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:16px}
.sig-box{border-top:3px solid var(--accent);padding-top:10px}
.sig-role{font-size:10px;font-weight:bold;text-transform:uppercase;color:var(--accent);margin-bottom:4px}
.vestigial{position:relative}
.vestigial::after{content:"VESTIGIAL — PRICE IS FIXED";position:absolute;right:16px;top:16px;opacity:.25;font-size:12px;letter-spacing:2px}
@media(max-width:900px){.product-strip,.grid-5,.grid-3,.sig-grid{grid-template-columns:1fr 1fr}.grid-2,.fr-4,.fr-3{grid-template-columns:1fr}}
@media(max-width:600px){.product-strip,.grid-5,.grid-3,.grid-2,.sig-grid,.fr-2{grid-template-columns:1fr}.nav-brand{display:none}.duty-row{grid-template-columns:1fr}}
@media print{.site-nav{position:static}.nav-tabs button,.nav-dl{display:none}.page{display:block!important;page-break-before:always}.page:first-of-type{page-break-before:avoid}body{background:#fff}}
</style>
</head>
<body>
<nav class="site-nav">
  <div class="nav-brand"><strong>Guardian</strong> Parliament · 4P</div>
  <div class="nav-tabs">
    <button class="ntab active" onclick="go('p-loop',this)">Loop</button>
    <button class="ntab" onclick="go('p-units',this)">Units</button>
    <button class="ntab" onclick="go('p-houses',this)">Houses</button>
    <button class="ntab" onclick="go('p-daily',this)">Daily</button>
    <button class="ntab" onclick="go('p-weekly',this)">Weekly</button>
    <button class="ntab" onclick="go('p-sop',this)">SOPs</button>
    <button class="ntab" onclick="go('p-inst',this)">Instruments</button>
    <button class="ntab" onclick="go('p-edict',this)">Edicts</button>
  </div>
  <button class="nav-dl" onclick="dlSelf()">Download</button>
</nav>

<div id="p-loop" class="page active"><div class="wrap">
  <div class="pg-label">${esc(state.venue)}</div>
  <h1 class="pg-title">The unit of measure is the only lever</h1>
  <p class="pg-desc">${esc(LOOP_THESIS)}</p>
  <div class="profit-signal">
    <div class="pg-label">Today vs overhead floor (KES ${kes(Math.round(floor))})</div>
    <div class="ps-value" id="ps">${result && result.classify !== "empty" ? "KES " + kes(Math.abs(result.net)) : "—"}</div>
    <div>${result && result.classify !== "empty" ? esc(result.classify) : "Fill the daily desk to generate the signal"}</div>
  </div>
  <div class="section-head">Developmental sequence</div>
  <div class="card-grid grid-5">${spectrum}</div>
</div></div>

<div id="p-units" class="page"><div class="wrap">
  <div class="pg-label">Standard units of truth</div>
  <h1 class="pg-title">Four products — price & standard cost</h1>
  <p class="pg-desc">Selling prices are set by the market. Standard raw-material cost is the target. Actual cost per portion is what each shift must achieve or better. All numbers below are the snapshot at download; edit them in the live OS or on the daily desk.</p>
  <div class="product-strip">${unitCards}</div>
  <div class="section-head">Fixed daily overhead — the floor</div>
  <div class="card" style="padding:0;overflow:hidden">
    <div class="overhead-row head"><div>Cost line</div><div class="oh-day">Monthly</div><div class="oh-day">Daily</div><div class="oh-note">Basis</div></div>
    ${ohRows}
    <div class="overhead-row total"><div>Daily overhead floor</div><div class="oh-day">${kes(monthlyOverhead(state.overhead))}</div><div class="oh-day" style="color:var(--danger)">${kes(Math.round(floor))}</div><div class="oh-note">Every day</div></div>
  </div>
  <div class="card-grid grid-3" style="margin-top:16px">
    <div class="card" style="text-align:center"><div class="pg-label">Break-even covers</div><div class="ps-value" style="font-size:36px">${gmCover ? Math.ceil(floor / gmCover) : "—"}</div></div>
    <div class="card" style="text-align:center"><div class="pg-label">Margin / full cover</div><div class="ps-value" style="font-size:36px;color:var(--ok)">${kes(gmCover)}</div></div>
    <div class="card" style="text-align:center"><div class="pg-label">Target +15%</div><div class="ps-value" style="font-size:36px;color:var(--accent)">${gmCover ? Math.ceil((floor * 1.15) / gmCover) : "—"}</div></div>
  </div>
</div></div>

<div id="p-houses" class="page"><div class="wrap">
  <div class="pg-label">Job descriptions · four houses</div>
  <h1 class="pg-title">Duties as daily measurable obligations</h1>
  <p class="pg-desc">If a duty cannot be reduced to a number on the daily checklist, it does not belong in the JD.</p>
  ${jds}
  <div class="section-head">Rights matrix</div>
  <table class="uom-table"><thead><tr><th>Act</th><th>PC</th><th>OM</th><th>FM</th><th>GM</th></tr></thead><tbody>${rights}</tbody></table>
</div></div>

<div id="p-daily" class="page"><div class="wrap">
  <div class="pg-label">Daily desk · four houses · eight minutes</div>
  <h1 class="pg-title">Fill by hand — or type, then print</h1>
  <div class="form-section"><div class="form-section-head">Day header</div><div class="form-body">
    <div class="field-row fr-4">
      <div class="field"><label>Date</label><input type="date" id="d-date" value="${esc(today)}"></div>
      <div class="field"><label>Opening</label><input type="time" value="${esc(day?.openingTime ?? "07:00")}"></div>
      <div class="field"><label>Target covers</label><input type="number" value="${day?.targetCovers ?? 22}"></div>
      <div class="field"><label>Staff count</label><input type="number" value="${day?.staffCount ?? 4}"></div>
    </div>
  </div></div>
  <div class="form-section"><div class="form-section-head">PC · Opening presence <span>by 07:15</span></div><div class="form-body">
    <p class="note">Confirm named staff on station. Uncovered absence is a Class III edict.</p>
    <div class="field-row fr-2">
      <div class="field"><label>Absence</label><select><option>No absence</option><option>Cover arranged</option><option>No cover</option></select></div>
      <div class="field"><label>PC signature</label><input type="text" placeholder="Signed" value="${esc(day?.pcSig ?? "")}"></div>
    </div>
  </div></div>
  <div class="form-section"><div class="form-section-head">OM · Opening stock</div><div class="form-body">
    <table class="cl-table"><thead><tr><th>Item</th><th>Unit</th><th>Par</th><th>On hand</th><th>Below</th></tr></thead><tbody>${parRows}</tbody></table>
  </div></div>
  <div class="form-section"><div class="form-section-head">FM · Sales & cash</div><div class="form-body">
    <table class="cl-table" id="sales">
      <thead><tr><th>Product</th><th>Price</th><th>Sold</th><th>Revenue</th><th>Raw</th><th>Cost</th><th>Margin</th></tr></thead>
      <tbody>${salesRows}
        <tr><td colspan="3"><strong>Total</strong></td><td id="totrev">—</td><td></td><td id="totcost">—</td><td id="totgm">—</td></tr>
      </tbody>
    </table>
    <div class="field-row fr-3" style="margin-top:12px">
      <div class="field"><label>Cash in till</label><input type="number" id="tillin" value="${day?.till ?? 0}"></div>
      <div class="field"><label>Expected</label><input type="number" id="expected" readonly></div>
      <div class="field"><label>Variance</label><input type="number" id="cashvar" readonly></div>
    </div>
  </div></div>
  <div class="form-section"><div class="form-section-head">GM · Seal</div><div class="form-body">
    <div class="profit-signal"><div class="pg-label">Gross margin vs floor KES ${kes(Math.round(floor))}</div><div class="ps-value" id="ps2">—</div><div id="ps2c">Enter sold units</div></div>
    <div class="field-row fr-2"><div class="field"><label>GM signature</label><input type="text" placeholder="Seal"></div><div class="field"><label>Classify</label><select><option>Profit</option><option>Break-even</option><option>Loss</option></select></div></div>
  </div></div>
</div></div>

<div id="p-weekly" class="page"><div class="wrap">
  <div class="pg-label">Civic score · week of ${esc(dates[0] ?? "")}</div>
  <h1 class="pg-title">Monday morning — five days at a glance</h1>
  <p class="pg-desc">Auto-calculated from daily records present in the OS at download. Red cells in the live OS issue edicts of the matching class.</p>
  <div style="overflow-x:auto"><table class="matrix-table"><thead><tr>${weekHead}</tr></thead><tbody>${weekBody}</tbody></table></div>
</div></div>

<div id="p-sop" class="page"><div class="wrap">
  <div class="pg-label">Standard operating procedures</div>
  <h1 class="pg-title">Five core SOPs</h1>
  ${sops}
</div></div>

<div id="p-inst" class="page"><div class="wrap">
  <div class="pg-label">Approval instruments</div>
  <h1 class="pg-title">Three forms — every significant decision leaves a trail</h1>
  <div class="approval-doc"><div class="doc-header"><div class="doc-title">PO-01 · Daily procurement order</div></div><div class="doc-body">
    <div class="field-row fr-4">
      <div class="field"><label>Ref</label><input value="${esc(state.po.ref)}"></div>
      <div class="field"><label>Date</label><input type="date" value="${esc(state.po.date)}"></div>
      <div class="field"><label>Supplier</label><input value="${esc(state.po.supplier)}"></div>
      <div class="field"><label>Total KES</label><input type="number" value="${state.po.total}"></div>
    </div>
    <div class="sig-grid"><div class="sig-box"><div class="sig-role">FM — initiator</div><input placeholder="Name"></div><div class="sig-box"><div class="sig-role">GM — approval</div><input placeholder="Name"></div><div class="sig-box"><div class="sig-role">FM — received</div><input placeholder="Name"></div></div>
  </div></div>
  <div class="approval-doc"><div class="doc-header"><div class="doc-title">WO-01 · Wastage write-off (if > KES 500)</div></div><div class="doc-body">
    <div class="field-row fr-3">
      <div class="field"><label>Ref</label><input value="${esc(state.wo.ref)}"></div>
      <div class="field"><label>Date</label><input type="date" value="${esc(state.wo.date)}"></div>
      <div class="field"><label>KES</label><input type="number" value="${state.wo.value}"></div>
    </div>
    <div class="field-row fr-2">
      <div class="field"><label>What happened</label><textarea>${esc(state.wo.description)}</textarea></div>
      <div class="field"><label>Corrective action</label><textarea>${esc(state.wo.corrective)}</textarea></div>
    </div>
    <div class="sig-grid"><div class="sig-box"><div class="sig-role">OM</div><input></div><div class="sig-box"><div class="sig-role">FM</div><input></div><div class="sig-box"><div class="sig-role">GM</div><input></div></div>
  </div></div>
  <div class="approval-doc vestigial"><div class="doc-header"><div class="doc-title">PA-01 · Price-change authority (vestigial)</div></div><div class="doc-body">
    <p class="note">Price is fixed by the market. This form exists only to record that no house may alter a selling price without the GM’s exclusive seal.</p>
    <div class="field-row fr-3">
      <div class="field"><label>Product</label><select><option>Rice</option><option>Chicken</option><option>Coleslaw</option><option>Diet Coke</option></select></div>
      <div class="field"><label>From</label><input type="number"></div>
      <div class="field"><label>To</label><input type="number"></div>
    </div>
    <div class="field"><label>GM exclusive signature</label><input></div>
  </div></div>
</div></div>

<div id="p-edict" class="page"><div class="wrap">
  <div class="pg-label">Edicts · rights · audit</div>
  <h1 class="pg-title">A red cell is an edict of a named class</h1>
  <div class="card-grid grid-5">${edictClass}</div>
  <div class="section-head">Current roll</div>
  <table class="uom-table"><thead><tr><th>Class</th><th>House</th><th>Date</th><th>Title</th><th>Actual</th><th>Standard</th><th>Status</th></tr></thead><tbody>${edicts || '<tr><td colspan="7">None open at download.</td></tr>'}</tbody></table>
</div></div>

<script>
const META = ${payload};
const FLOOR = META.floor;
function go(id, btn){
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.ntab').forEach(b => b.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}
function fmt(n){ return Math.round(n).toLocaleString('en-KE'); }
function recalc(){
  let totRev=0, totCost=0, totGM=0;
  document.querySelectorAll('.sold').forEach(inp => {
    const s = parseFloat(inp.value)||0;
    const rev = s * parseFloat(inp.dataset.price);
    const cost = s * parseFloat(inp.dataset.cost);
    const gm = rev-cost;
    const tr = inp.closest('tr');
    tr.querySelector('.rev').textContent = fmt(rev);
    tr.querySelector('.cost').textContent = fmt(cost);
    tr.querySelector('.gm').textContent = fmt(gm);
    totRev += rev; totCost += cost; totGM += gm;
  });
  document.getElementById('totrev').textContent = fmt(totRev);
  document.getElementById('totcost').textContent = fmt(totCost);
  document.getElementById('totgm').textContent = fmt(totGM);
  document.getElementById('expected').value = totRev;
  const til = parseFloat(document.getElementById('tillin').value)||0;
  document.getElementById('cashvar').value = (til-totRev).toFixed(0);
  const net = totGM - FLOOR;
  const el = document.getElementById('ps2');
  const c = document.getElementById('ps2c');
  if(!totRev){ el.textContent='—'; c.textContent='Enter sold units'; return; }
  el.textContent = 'KES '+fmt(Math.abs(net));
  c.textContent = net>0 ? ('Profit — floor cleared by KES '+fmt(net)) : net===0 ? 'Break-even' : ('Loss — KES '+fmt(Math.abs(net))+' short');
}
document.querySelectorAll('.sold').forEach(i => i.addEventListener('input', recalc));
document.getElementById('tillin').addEventListener('input', recalc);
recalc();
function dlSelf(){
  const html = '<!DOCTYPE html>\\n'+document.documentElement.outerHTML;
  const blob = new Blob([html], {type:'text/html'});
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'Guardian_Parliament_4P_OS.html';
  a.click();
}
</script>
</body></html>`;
}
