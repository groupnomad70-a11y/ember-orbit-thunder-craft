import { addDays, isoDate, mondayOf, uid } from "@/lib/utils";
import type {
  Daily,
  Edict,
  InstrumentPO,
  InstrumentPrice,
  InstrumentWO,
  OverheadLine,
  Product,
  Role,
  StaffRow,
  StockKey,
} from "./types";

export const ROLES: Role[] = [
  {
    id: "pc",
    title: "People & Culture",
    house: "House of Presence",
    stage: "1 · Caretaker Presence",
    brief: "Labour on station, hygiene, certificates, and the day’s first witness that the house is standing.",
    colorToken: "house-pc",
  },
  {
    id: "om",
    title: "Operations Manager",
    house: "House of Production",
    stage: "2 · Frontline Witness",
    brief: "Physical yield of rice, chicken, and coleslaw. Every gram that leaves the standard is a logged deviation.",
    colorToken: "house-om",
  },
  {
    id: "fm",
    title: "Finance Manager",
    house: "House of Ledger",
    stage: "4 · Self-Regulation",
    brief: "Procurement, cash, stock reconciliation, and the conversion of physical units into the profit signal.",
    colorToken: "house-fm",
  },
  {
    id: "gm",
    title: "General Manager",
    house: "House of Seal",
    stage: "4 · Legitimate Authority",
    brief: "The only role that may classify the day, issue an edict, or seal a write-off. Price remains vestigial.",
    colorToken: "house-gm",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "rice",
    name: "Steamed Rice",
    rawMaterial: "Long-grain white rice",
    price: 120,
    rawCost: 38,
    stdPortion: "280 g cooked from 100 g raw",
    purchaseUnit: "25 kg sack",
    portionsPerUnit: "~250 portions / sack",
    wastageTolerance: "≤ 3% per sack",
    owner: "om",
    yieldTarget: 10,
    yieldLabel: "portions per kg raw",
  },
  {
    id: "chicken",
    name: "Deep-Fried Chicken",
    rawMaterial: "Whole / jointed chicken",
    price: 320,
    rawCost: 148,
    stdPortion: "250 g raw → 210 g fried",
    purchaseUnit: "Per kg raw",
    portionsPerUnit: "4 portions per kg",
    wastageTolerance: "≤ 8% fry loss over standard",
    owner: "om",
    yieldTarget: 84,
    yieldLabel: "fry yield %",
  },
  {
    id: "coleslaw",
    name: "Coleslaw",
    rawMaterial: "Cabbage, carrot, mayonnaise",
    price: 80,
    rawCost: 22,
    stdPortion: "120 g portion",
    purchaseUnit: "Head of cabbage (~1.2 kg)",
    portionsPerUnit: "8 portions / head",
    wastageTolerance: "≤ 10% trim loss",
    owner: "om",
    yieldTarget: 8,
    yieldLabel: "portions per head",
  },
  {
    id: "coke",
    name: "Diet Coke",
    rawMaterial: "330 ml cans",
    price: 100,
    rawCost: 52,
    stdPortion: "1 × 330 ml can",
    purchaseUnit: "Case of 24",
    portionsPerUnit: "24 portions / case",
    wastageTolerance: "0% — unit item",
    owner: "fm",
    yieldTarget: 100,
    yieldLabel: "unit integrity %",
  },
];

export const OVERHEAD: OverheadLine[] = [
  { id: "rent", label: "Rent & premises", monthly: 45000, basis: "÷ days in month" },
  { id: "power", label: "Electricity & gas", monthly: 9000, basis: "÷ days in month" },
  { id: "water", label: "Water", monthly: 3600, basis: "÷ days in month" },
  { id: "stat", label: "Licences, levies, VAT provision", monthly: 9000, basis: "÷ days in month" },
  { id: "sal", label: "Salaries — 4 staff", monthly: 120000, basis: "÷ days in month" },
  { id: "nssf", label: "NSSF / SHIF / statutory deductions", monthly: 9600, basis: "÷ days in month" },
];

export const PAR: Record<StockKey, { unit: string; par: number; label: string }> = {
  rice: { unit: "kg", par: 20, label: "White rice (raw)" },
  chicken: { unit: "kg", par: 22, label: "Chicken (raw, portioned)" },
  cabbage: { unit: "heads", par: 6, label: "Cabbage" },
  carrots: { unit: "kg", par: 1.5, label: "Carrots" },
  mayo: { unit: "kg", par: 1, label: "Mayonnaise" },
  coke: { unit: "cases", par: 2, label: "Diet Coke (cases of 24)" },
  oil: { unit: "L", par: 10, label: "Frying oil" },
};

export const EDICT_CLASSES: Record<
  string,
  { name: string; house: string; trigger: string }
> = {
  I: {
    name: "Production yield",
    house: "House of Production (OM)",
    trigger: "Fry yield < 84%, rice < 10 portions/kg, or coleslaw < 8 portions/head",
  },
  II: {
    name: "Ledger & stock",
    house: "House of Ledger (FM)",
    trigger: "Cash variance, can variance, or stock below par without a raised order",
  },
  III: {
    name: "Presence",
    house: "House of Presence (PC)",
    trigger: "Absence without cover, incomplete station, or lapsed food-handler certificate",
  },
  IV: {
    name: "Floor shortfall",
    house: "House of Seal (GM)",
    trigger: "Gross margin fails to clear the daily overhead floor",
  },
  V: {
    name: "Recurrence",
    house: "House of Seal (GM)",
    trigger: "The same red cell appears on two or more days in the civic week",
  },
};

const STATIONS: StaffRow[] = [
  { station: "Fryer / Chef", name: "", timeIn: "", assigned: "Fryer", uniform: false, cert: false },
  { station: "Rice / Prep", name: "", timeIn: "", assigned: "Prep", uniform: false, cert: false },
  { station: "Counter / Service", name: "", timeIn: "", assigned: "Counter", uniform: false, cert: false },
  { station: "Cashier", name: "", timeIn: "", assigned: "Till", uniform: false, cert: false },
];

function emptyStock(): Record<StockKey, number> {
  return { rice: 0, chicken: 0, cabbage: 0, carrots: 0, mayo: 0, coke: 0, oil: 0 };
}
function emptyFlags(): Record<StockKey, boolean> {
  return { rice: false, chicken: false, cabbage: false, carrots: false, mayo: false, coke: false, oil: false };
}

export function blankDaily(date: string): Daily {
  return {
    date,
    openingTime: "07:00",
    targetCovers: 22,
    staff: STATIONS.map((s) => ({ ...s })),
    staffCount: 4,
    absence: "none",
    pcSig: "",
    stock: emptyStock(),
    belowPar: emptyFlags(),
    alertSent: emptyFlags(),
    omOpenSig: "",
    gmOpenSig: "",
    rice: [
      { rawG: 0, targeted: 0, yielded: 0, portionG: 0 },
      { rawG: 0, targeted: 0, yielded: 0, portionG: 0 },
    ],
    chicken: [
      { portionsIn: 0, oilTemp: 0, fryMin: 0, sampleG: 0 },
      { portionsIn: 0, oilTemp: 0, fryMin: 0, sampleG: 0 },
      { portionsIn: 0, oilTemp: 0, fryMin: 0, sampleG: 0 },
    ],
    coleslawHeads: 0,
    coleslawTrimG: 0,
    coleslawUsableG: 0,
    coleslawPortions: 0,
    wastage: [
      { time: "", product: "rice", qty: "", cause: "Over-prep", kes: 0 },
      { time: "", product: "chicken", qty: "", cause: "Time expired", kes: 0 },
    ],
    coversServed: 0,
    omCloseSig: "",
    sales: { rice: 0, chicken: 0, coleslaw: 0, coke: 0 },
    till: 0,
    cokeOpen: 2,
    cokeAdded: 0,
    cokeRemaining: 0,
    unplannedOh: false,
    fmSig: "",
    classify: "",
    wdRequired: false,
    tomorrowAction: "",
    gmSig: "",
    closeTime: "",
    sealed: false,
  };
}

function filledDaily(
  date: string,
  sales: number,
  coke: number,
  opts: {
    chickenYield?: number;
    ricePerKg?: number;
    coleslawPerHead?: number;
    waste?: number;
    absence?: Daily["absence"];
    sealed?: boolean;
  } = {},
): Daily {
  const d = blankDaily(date);
  const chickenY = opts.chickenYield ?? 85;
  const ricePerKg = opts.ricePerKg ?? 10;
  const heads = Math.max(1, Math.round(sales / 8));
  d.staff = [
    { station: "Fryer / Chef", name: "Amina Otieno", timeIn: "06:50", assigned: "Fryer", uniform: true, cert: true },
    { station: "Rice / Prep", name: "Joseph Mwangi", timeIn: "06:55", assigned: "Prep", uniform: true, cert: true },
    { station: "Counter / Service", name: "Faith Wanjiku", timeIn: "07:00", assigned: "Counter", uniform: true, cert: true },
    { station: "Cashier", name: "Peter Kamau", timeIn: "07:00", assigned: "Till", uniform: true, cert: true },
  ];
  d.absence = opts.absence ?? "none";
  d.staffCount = opts.absence === "uncovered" ? 3 : 4;
  d.pcSig = "F. Njeri";
  d.stock = { rice: 22, chicken: 24, cabbage: 8, carrots: 2, mayo: 1.2, coke: 2.5, oil: 12 };
  d.omOpenSig = "J. Omondi";
  d.gmOpenSig = "S. Kariuki";
  const rawG = Math.round((sales / ricePerKg) * 1000);
  d.rice = [
    { rawG, targeted: sales, yielded: sales, portionG: 280 },
    { rawG: 0, targeted: 0, yielded: 0, portionG: 0 },
  ];
  d.chicken = [
    { portionsIn: Math.ceil(sales / 2), oilTemp: 175, fryMin: 13, sampleG: Math.round(250 * (chickenY / 100)) },
    { portionsIn: Math.floor(sales / 2), oilTemp: 176, fryMin: 13, sampleG: Math.round(250 * (chickenY / 100)) },
    { portionsIn: 0, oilTemp: 0, fryMin: 0, sampleG: 0 },
  ];
  d.coleslawHeads = heads;
  d.coleslawTrimG = heads * 80;
  d.coleslawUsableG = heads * 1000;
  d.coleslawPortions = Math.round(heads * (opts.coleslawPerHead ?? 8));
  const wasteKes = opts.waste ?? 0;
  d.wastage = [
    {
      time: wasteKes ? "20:10" : "",
      product: "chicken",
      qty: wasteKes ? "2 pieces" : "",
      cause: wasteKes ? "Time expired" : "Over-prep",
      kes: wasteKes,
    },
    { time: "", product: "rice", qty: "", cause: "Over-prep", kes: 0 },
  ];
  d.coversServed = sales;
  d.omCloseSig = "J. Omondi";
  d.sales = { rice: sales, chicken: sales, coleslaw: sales, coke };
  d.till = 120 * sales + 320 * sales + 80 * sales + 100 * coke;
  d.cokeOpen = 2;
  d.cokeAdded = coke > 24 ? 1 : 0;
  d.cokeRemaining = 2 * 24 + d.cokeAdded * 24 - coke;
  d.fmSig = "P. Kamau";
  const gm = (120 - 38) * sales + (320 - 148) * sales + (80 - 22) * sales + (100 - 52) * coke;
  d.classify = gm > 6540 ? "profit" : gm === 6540 ? "breakeven" : "loss";
  d.wdRequired = wasteKes > 500;
  d.tomorrowAction = wasteKes > 500 ? "Cut chicken hold by 4 pieces; retrain 30-min window" : "Hold standard";
  d.gmSig = "S. Kariuki";
  d.closeTime = "21:05";
  d.sealed = opts.sealed ?? true;
  return d;
}

export function seedDailies(): Record<string, Daily> {
  const mon = mondayOf(isoDate());
  const map: Record<string, Daily> = {};
  const rows: Array<[number, number, { chickenYield?: number; waste?: number; sealed?: boolean }]> = [
    [22, 18, { chickenYield: 85, sealed: true }],
    [20, 16, { chickenYield: 82, sealed: true }],
    [25, 20, { chickenYield: 86, sealed: true }],
    [18, 14, { chickenYield: 79, waste: 740, sealed: true }],
    [28, 22, { chickenYield: 86, sealed: true }],
  ];
  rows.forEach(([sales, coke, opts], i) => {
    const date = addDays(mon, i);
    map[date] = filledDaily(date, sales, coke, opts);
  });
  return map;
}

export function seedEdicts(dailies: Record<string, Daily>): Edict[] {
  const mon = mondayOf(isoDate());
  const tue = addDays(mon, 1);
  const thu = addDays(mon, 3);
  return [
    {
      id: uid("ed"),
      date: tue,
      class: "I",
      house: "om",
      title: "Chicken fry yield below 84%",
      metric: "Fry yield",
      actual: "82%",
      standard: "≥ 84%",
      status: "directed",
      directive: "Probe oil temperature at every batch; log sample weight before service.",
    },
    {
      id: uid("ed"),
      date: thu,
      class: "I",
      house: "om",
      title: "Chicken fry yield below 84%",
      metric: "Fry yield",
      actual: "79%",
      standard: "≥ 84%",
      status: "open",
      directive: "",
    },
    {
      id: uid("ed"),
      date: thu,
      class: "I",
      house: "om",
      title: "Wastage exceeds KES 500",
      metric: "Wastage",
      actual: "KES 740",
      standard: "≤ KES 500 without WO-01",
      status: "open",
      directive: "",
    },
    {
      id: uid("ed"),
      date: thu,
      class: "V",
      house: "gm",
      title: "Yield failure recurred within the civic week",
      metric: "Class I recurrence",
      actual: "Tue + Thu",
      standard: "No repeated red cell in 5 days",
      status: "open",
      directive: "",
    },
  ];
}

export const blankPO = (): InstrumentPO => ({
  ref: `PO-${new Date().getFullYear()}-001`,
  date: isoDate(),
  delivery: isoDate(),
  supplier: "",
  notes: "",
  total: 0,
  withinBudget: true,
  fmName: "",
  gmName: "",
  recvName: "",
  sealed: false,
});

export const blankWO = (): InstrumentWO => ({
  ref: `WO-${new Date().getFullYear()}-001`,
  date: isoDate(),
  time: "",
  value: 0,
  description: "",
  corrective: "",
  omName: "",
  fmName: "",
  gmName: "",
  sealed: false,
});

export const blankPrice = (): InstrumentPrice => ({
  ref: `PA-${new Date().getFullYear()}-001`,
  date: isoDate(),
  product: "rice",
  from: 120,
  to: 120,
  reason: "",
  gmName: "",
  sealed: false,
});
