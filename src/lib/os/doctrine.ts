import type { RoleId } from "./types";

export const SPECTRUM = [
  {
    n: "01",
    name: "Caretaker Presence",
    house: "People & Culture",
    role: "pc" as RoleId,
    body: "The day cannot open until every station is occupied by a named person whose certificate is valid. Absence is not a story — it is a count.",
    measure: "Staff on station before 07:15",
  },
  {
    n: "02",
    name: "Frontline Witness",
    house: "Operations",
    role: "om" as RoleId,
    body: "Yield is witnessed in grams, degrees, and minutes. The OM does not report effort. The OM reports the physical unit that left the standard.",
    measure: "Batch logs before service",
  },
  {
    n: "03",
    name: "Narrative Containment",
    house: "Day book",
    role: "om" as RoleId,
    body: "Every deviation is written the same day, in the same form, against a product. Memory is not a meeting. Memory is a line on the checklist.",
    measure: "Wastage and variance lines",
  },
  {
    n: "04",
    name: "Self-Regulation",
    house: "Finance + Seal",
    role: "fm" as RoleId,
    body: "FM converts the physical unit into cash and margin. GM recognises the number as the day's authority. No other narrative outranks the floor.",
    measure: "Gross margin vs KES floor",
  },
  {
    n: "05",
    name: "Civic Participation",
    house: "Monday matrix",
    role: "gm" as RoleId,
    body: "Five sealed days become the shared civic score. A red cell is not a mood. It is an edict against a named house.",
    measure: "Weekly matrix signed before 09:00",
  },
];

export type Duty = { text: string; metric: string; cadence: string };

export const JDS: Record<RoleId, Duty[]> = {
  gm: [
    { text: "Review opening stock counts submitted by OM; approve or flag discrepancy before cooking begins", metric: "Stock variance (KES)", cadence: "Daily 07:00" },
    { text: "Sign the procurement order raised by FM before any raw material purchase is committed", metric: "Order approved Y/N", cadence: "As raised" },
    { text: "Review end-of-day profit signal against the overhead floor; classify the day", metric: "Net day result (KES)", cadence: "Daily 21:00" },
    { text: "If wastage exceeds tolerance, issue a Wastage Directive before the next shift opens", metric: "WD issued Y/N", cadence: "Same day" },
    { text: "Approve any price change — vestigial; no other role has this authority, and the market still sets the price", metric: "PA-01 sealed Y/N", cadence: "As required" },
    { text: "Review the weekly profit matrix every Monday; assign the lowest-yield product to the owning house", metric: "Weekly review signed", cadence: "Monday" },
  ],
  fm: [
    { text: "Raise the procurement order from OM's projected covers and current stock; submit to GM", metric: "Order value (KES)", cadence: "Daily 07:30" },
    { text: "Receive delivered raw materials; count against order; log short delivery before OM begins prep", metric: "Delivery match %", cadence: "At delivery" },
    { text: "Count Diet Coke at opening and closing; reconcile units sold against cases opened", metric: "Coke variance (units)", cadence: "Open / close" },
    { text: "Record cash sales per product; calculate actual gross margin against standard; submit to GM", metric: "Actual vs standard GM", cadence: "Daily 20:30" },
    { text: "Track daily overhead spend; flag any unplanned cost to GM the same day", metric: "Overhead variance (KES)", cadence: "Daily" },
    { text: "Compile the weekly profit matrix from five daily records; present to GM before 09:00 Monday", metric: "Matrix submitted Y/N", cadence: "Monday" },
  ],
  om: [
    { text: "Count all raw materials at opening; log quantity on hand against par; raise shortfall to FM", metric: "Stock on hand", cadence: "Daily 07:00" },
    { text: "Prepare rice to standard: 100 g raw → 280 g cooked ± 15 g. Log batch size and portions yielded", metric: "Portions / batch", cadence: "Per batch" },
    { text: "Fry chicken to standard: 250 g raw → ≥ 210 g fried. Weigh one portion per fryer batch", metric: "Fry yield %", cadence: "Per batch" },
    { text: "Prepare coleslaw: 1 head → 8 × 120 g. Log trim waste per head", metric: "Portions / head", cadence: "Per batch" },
    { text: "Log all wastage by product and cause before disposing; obtain GM signature if value > KES 500", metric: "Wastage (KES)", cadence: "Per event" },
    { text: "Report covers served and portions sold; reconcile against FM's sales record", metric: "Covers served", cadence: "Daily 20:00" },
  ],
  pc: [
    { text: "Confirm scheduled staff are on station before service; log absence and activate cover", metric: "Staff on station", cadence: "Daily 07:15" },
    { text: "Record attendance with time-in / time-out; flag overtime before it is incurred", metric: "Hours logged", cadence: "Daily" },
    { text: "Conduct one observed portion-control check per shift per station; coach immediately on miss", metric: "Checks / deviations", cadence: "Per shift" },
    { text: "Ensure hygiene, uniform, and safety standards at opening and through service; log any breach", metric: "Compliance items", cadence: "Daily" },
    { text: "Maintain NHIF, NSSF, and food-handler certificates; alert FM 30 days before expiry", metric: "Days remaining", cadence: "Weekly" },
    { text: "Log conduct or performance issues with date, description, and action; escalate if repeated in 7 days", metric: "Cases open / closed", cadence: "As occurs" },
  ],
};

export type SopStep = { text: string; measure: string };
export const SOPS: { id: string; title: string; owner: string; steps: SopStep[] }[] = [
  {
    id: "SOP-01",
    title: "Procurement & delivery",
    owner: "FM · Approval: GM",
    steps: [
      { text: "OM counts raw material stock at 07:00 and submits quantity-on-hand to FM on the daily checklist.", measure: "By 07:15" },
      { text: "FM calculates required order: par − on hand + projected covers × portions per cover. Par = 2-day supply.", measure: "Formula-driven" },
      { text: "FM completes PO-01 and submits to GM for signature before any commitment to a supplier.", measure: "GM signs first" },
      { text: "On delivery, FM weighs or counts every item. Chicken per kg. Rice by sack weight. Cabbage by head. Coke by case.", measure: "100% check" },
      { text: "Short delivery or quality failure: FM does not sign the delivery note. Replace or credit before acceptance.", measure: "No signature = not accepted" },
      { text: "FM logs actual received vs ordered. GM is notified of any discrepancy the same day.", measure: "Same-day log" },
    ],
  },
  {
    id: "SOP-02",
    title: "Rice production",
    owner: "OM · Per batch",
    steps: [
      { text: "Measure raw rice on the kitchen scale. 100 g raw per portion target. A 20-portion batch is 2,000 g.", measure: "Scale ± 5 g" },
      { text: "Rinse. Water ratio 1 : 1.8 (100 g rice : 180 ml water). Boil, cover, 18 minutes. Lid stays closed.", measure: "1:1.8 · 18 min" },
      { text: "Weigh one portion from the batch. Target 280 g ± 15 g. Below 255 g: adjust water before the next batch.", measure: "280 g ± 15 g" },
      { text: "Record batch number, raw weight in, portions yielded, one-portion check. Submit on the daily checklist.", measure: "Log before service" },
      { text: "Rice held more than 4 hours after cooking is written off. No reheating for service.", measure: "4-hour shelf life" },
    ],
  },
  {
    id: "SOP-03",
    title: "Deep-fried chicken production",
    owner: "OM · Per fryer batch",
    steps: [
      { text: "Portion raw chicken at 250 g ± 10 g before marinating. Offcuts logged as trim if within 16% of whole-bird weight.", measure: "250 g raw ± 10 g" },
      { text: "Marinate minimum 2 hours. Standard marinade batch covers 10 portions. Log start time and count.", measure: "Min 2 hours" },
      { text: "Oil 175 °C ± 5 °C before any chicken enters. Fry 12–14 minutes, turning once at 6 minutes.", measure: "175 °C · 12–14 min" },
      { text: "Weigh one piece from every fryer batch after draining. Target ≥ 210 g (84% fry yield). Below 200 g is a yield failure.", measure: "≥ 210 g cooked" },
      { text: "Change frying oil after 20 kg of chicken or at close of day, whichever is sooner. Log volume.", measure: "Every 20 kg" },
      { text: "Fried chicken not served within 30 minutes is written off. No re-frying.", measure: "30-minute window" },
    ],
  },
  {
    id: "SOP-04",
    title: "Coleslaw production",
    owner: "OM · Per prep batch",
    steps: [
      { text: "One head of cabbage (~1.2 kg). Remove outer leaves (log trim). Expected usable shred ≥ 1.0 kg (≤ 10% trim).", measure: "≥ 1.0 kg usable" },
      { text: "Grate 2 medium carrots (~200 g) per head. Add 80 g mayonnaise per head-batch. Toss to coat.", measure: "80 g mayo / head" },
      { text: "Portion into 8 × 120 g servings per head-batch. Excess goes to a surplus container — not waste.", measure: "8 × 120 g" },
      { text: "Log heads used, portions yielded, trim weight. Shelf life 4 hours refrigerated. Label with prep time.", measure: "4 hrs fridge" },
    ],
  },
  {
    id: "SOP-05",
    title: "End-of-day close & wastage reconciliation",
    owner: "FM + OM · Signed: GM",
    steps: [
      { text: "OM counts remaining uncooked stock and cooked-but-unsold portions (to be written off). No estimates.", measure: "Physical count" },
      { text: "FM reconciles: opening + received − ending = consumed. Consumed should equal portions sold ± wastage.", measure: "Consumed = sold ± waste" },
      { text: "FM records cash per product. Calculates actual gross margin. Compares to the overhead floor.", measure: "vs daily floor" },
      { text: "Total wastage over KES 500 requires WO-01. OM and FM sign; GM countersigns before disposal is recorded.", measure: "WO-01 if > 500" },
      { text: "GM reviews and signs the daily checklist. Classifies the day. Tomorrow's opening note is left for OM.", measure: "GM signs before lockup" },
    ],
  },
];

export const RIGHTS: { action: string; pc: string; om: string; fm: string; gm: string }[] = [
  { action: "Open the day / confirm roster", pc: "Execute", om: "Witness", fm: "—", gm: "Seal if flagged" },
  { action: "Count opening stock", pc: "—", om: "Execute", fm: "Verify", gm: "Flag variance" },
  { action: "Raise procurement order", pc: "—", om: "Request", fm: "Initiate", gm: "Approve before buy" },
  { action: "Accept delivery", pc: "—", om: "Hold prep", fm: "Execute count", gm: "Notified of gap" },
  { action: "Cook / portion / fry", pc: "Observe once", om: "Execute", fm: "—", gm: "Audit" },
  { action: "Record sales & cash", pc: "—", om: "Portion count", fm: "Execute", gm: "Seal" },
  { action: "Write off wastage > KES 500", pc: "Witness", om: "Initiate", fm: "Value", gm: "Approve" },
  { action: "Change a selling price", pc: "—", om: "—", fm: "Advise", gm: "Exclusive · vestigial" },
  { action: "Classify the day", pc: "—", om: "—", fm: "Compute", gm: "Declare" },
  { action: "Issue an edict from a red cell", pc: "House III", om: "House I", fm: "House II", gm: "Seal I–V" },
  { action: "Present Monday civic score", pc: "Compliance annex", om: "Yield annex", fm: "Compile matrix", gm: "Assign action" },
];

export const LOOP_THESIS =
  "Selling prices are fixed by the market. Fixed overheads are the floor that must be cleared every day. The only lever is the physical unit — grams, litres, portions, cases. A shortfall is not a pricing problem and not a narrative. It is a developmental failure of one house: presence, production, ledger, or seal.";
