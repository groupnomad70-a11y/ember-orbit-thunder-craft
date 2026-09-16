export type RoleId = "gm" | "fm" | "om" | "pc";
export type ProductId = "rice" | "chicken" | "coleslaw" | "coke";
export type EdictClass = "I" | "II" | "III" | "IV" | "V";
export type DayClass = "" | "profit" | "breakeven" | "loss";
export type EdictStatus = "open" | "directed" | "closed";
export type ViewId =
  | "loop"
  | "units"
  | "houses"
  | "daily"
  | "weekly"
  | "doctrine"
  | "instruments"
  | "edicts";

export type Role = {
  id: RoleId;
  title: string;
  house: string;
  stage: string;
  brief: string;
  colorToken: string;
};

export type Product = {
  id: ProductId;
  name: string;
  rawMaterial: string;
  price: number;
  rawCost: number;
  stdPortion: string;
  purchaseUnit: string;
  portionsPerUnit: string;
  wastageTolerance: string;
  owner: RoleId;
  yieldTarget: number;
  yieldLabel: string;
};

export type OverheadLine = {
  id: string;
  label: string;
  monthly: number;
  basis: string;
};

export type StockKey =
  | "rice"
  | "chicken"
  | "cabbage"
  | "carrots"
  | "mayo"
  | "coke"
  | "oil";

export type StaffRow = {
  station: string;
  name: string;
  timeIn: string;
  assigned: string;
  uniform: boolean;
  cert: boolean;
};

export type RiceBatch = {
  rawG: number;
  targeted: number;
  yielded: number;
  portionG: number;
};

export type ChickenBatch = {
  portionsIn: number;
  oilTemp: number;
  fryMin: number;
  sampleG: number;
};

export type WasteRow = {
  time: string;
  product: ProductId | "oil";
  qty: string;
  cause: string;
  kes: number;
};

export type Daily = {
  date: string;
  openingTime: string;
  targetCovers: number;
  staff: StaffRow[];
  staffCount: number;
  absence: "none" | "covered" | "uncovered";
  pcSig: string;
  stock: Record<StockKey, number>;
  belowPar: Record<StockKey, boolean>;
  alertSent: Record<StockKey, boolean>;
  omOpenSig: string;
  gmOpenSig: string;
  rice: RiceBatch[];
  chicken: ChickenBatch[];
  coleslawHeads: number;
  coleslawTrimG: number;
  coleslawUsableG: number;
  coleslawPortions: number;
  wastage: WasteRow[];
  coversServed: number;
  omCloseSig: string;
  sales: Record<ProductId, number>;
  till: number;
  cokeOpen: number;
  cokeAdded: number;
  cokeRemaining: number;
  unplannedOh: boolean;
  fmSig: string;
  classify: DayClass;
  wdRequired: boolean;
  tomorrowAction: string;
  gmSig: string;
  closeTime: string;
  sealed: boolean;
};

export type Edict = {
  id: string;
  date: string;
  class: EdictClass;
  house: RoleId;
  title: string;
  metric: string;
  actual: string;
  standard: string;
  status: EdictStatus;
  directive: string;
};

export type AuditEntry = {
  id: string;
  ts: string;
  actor: RoleId | "system";
  action: string;
  detail: string;
};

export type InstrumentPO = {
  ref: string;
  date: string;
  delivery: string;
  supplier: string;
  notes: string;
  total: number;
  withinBudget: boolean;
  fmName: string;
  gmName: string;
  recvName: string;
  sealed: boolean;
};

export type InstrumentWO = {
  ref: string;
  date: string;
  time: string;
  value: number;
  description: string;
  corrective: string;
  omName: string;
  fmName: string;
  gmName: string;
  sealed: boolean;
};

export type InstrumentPrice = {
  ref: string;
  date: string;
  product: ProductId;
  from: number;
  to: number;
  reason: string;
  gmName: string;
  sealed: boolean;
};

export type OsState = {
  venue: string;
  products: Product[];
  overhead: OverheadLine[];
  daysInMonth: number;
  dailies: Record<string, Daily>;
  edicts: Edict[];
  audit: AuditEntry[];
  po: InstrumentPO;
  wo: InstrumentWO;
  priceChange: InstrumentPrice;
};
