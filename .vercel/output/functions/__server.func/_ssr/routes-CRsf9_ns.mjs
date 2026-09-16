import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Printer, c as Drumstick, d as ArrowRight, i as Salad, l as Download, n as Wheat, o as Menu, s as Landmark, t as X, u as CupSoda } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CRsf9_ns.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function kes(n, digits = 0) {
	return n.toLocaleString("en-KE", {
		minimumFractionDigits: digits,
		maximumFractionDigits: digits
	});
}
function isoDate(d = /* @__PURE__ */ new Date()) {
	return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
function parseIso(iso) {
	const [y, m, d] = iso.split("-").map(Number);
	return new Date(y, (m ?? 1) - 1, d ?? 1);
}
function mondayOf(iso) {
	const d = parseIso(iso);
	const day = d.getDay();
	const diff = day === 0 ? -6 : 1 - day;
	d.setDate(d.getDate() + diff);
	return isoDate(d);
}
function addDays(iso, n) {
	const d = parseIso(iso);
	d.setDate(d.getDate() + n);
	return isoDate(d);
}
function weekday(iso) {
	return parseIso(iso).toLocaleDateString("en-KE", { weekday: "long" });
}
function prettyDate(iso) {
	return parseIso(iso).toLocaleDateString("en-KE", {
		weekday: "short",
		day: "numeric",
		month: "short",
		year: "numeric"
	});
}
function uid(prefix = "id") {
	return `${prefix}-${Math.random().toString(36).slice(2, 9)}`;
}
function Button({ children, className, variant = "primary", type = "button", ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium tracking-wide transition-colors duration-150 ease-out disabled:opacity-50", variant === "primary" && "bg-clay text-clay-fg hover:bg-clay/90", variant === "ink" && "bg-ink text-cream hover:bg-ink-2", variant === "ghost" && "border border-paper-3 bg-transparent text-ink hover:bg-paper-2", variant === "paper" && "border border-paper-3 bg-cream text-ink hover:bg-paper-2", variant === "danger" && "bg-danger text-cream hover:bg-danger/90", className),
		...rest,
		children
	});
}
function Field({ label, hint, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: cn("flex min-w-0 flex-col gap-1.5", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[10px] font-semibold tracking-[0.14em] text-stone uppercase",
				children: label
			}),
			children,
			hint ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[11px] text-stone",
				children: hint
			}) : null
		]
	});
}
var inputClass = "min-h-11 w-full rounded-md border border-paper-3 bg-white px-3 text-sm text-ink outline-none transition-[border-color] duration-150 focus:border-clay disabled:bg-paper-2 disabled:text-stone";
function TextInput(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		...props,
		className: cn(inputClass, props.className)
	});
}
function NumInput({ value, onValue, step = "any", className, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type: "number",
		step,
		value: Number.isFinite(value) ? value : 0,
		onChange: (e) => onValue(e.target.value === "" ? 0 : Number(e.target.value)),
		className: cn(inputClass, "text-right tabular-nums", className),
		...rest
	});
}
function Select({ className, children, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		...rest,
		className: cn(inputClass, className),
		children
	});
}
function TextArea(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		...props,
		className: cn(inputClass, "min-h-24 py-2", props.className)
	});
}
function Panel({ children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: cn("rounded-xl border border-paper-3 bg-cream p-5 md:p-6", className),
		children
	});
}
function Kicker({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-2 font-sans text-[10px] font-semibold tracking-[0.22em] text-clay uppercase",
		children
	});
}
function HouseChip({ role }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wider", {
			gm: "bg-house-gm/12 text-house-gm",
			fm: "bg-house-fm/12 text-house-fm",
			om: "bg-house-om/12 text-house-om",
			pc: "bg-house-pc/12 text-house-pc"
		}[role]),
		children: {
			gm: "GM",
			fm: "FM",
			om: "OM",
			pc: "PC"
		}[role]
	});
}
function Signal({ kind, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: cn("inline-flex items-center gap-1.5 text-sm font-medium", kind === "ok" && "text-ok", kind === "warn" && "text-warn", kind === "danger" && "text-danger", kind === "idle" && "text-stone"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-1.5 rounded-full", kind === "ok" && "bg-ok", kind === "warn" && "bg-warn", kind === "danger" && "bg-danger", kind === "idle" && "bg-dust") }), children]
	});
}
var VIEWS = [
	{
		id: "loop",
		label: "The Loop"
	},
	{
		id: "units",
		label: "Units"
	},
	{
		id: "houses",
		label: "Houses"
	},
	{
		id: "daily",
		label: "Daily"
	},
	{
		id: "weekly",
		label: "Weekly"
	},
	{
		id: "doctrine",
		label: "SOPs"
	},
	{
		id: "instruments",
		label: "Instruments"
	},
	{
		id: "edicts",
		label: "Edicts"
	}
];
function Shell({ view, onView, onDownload, children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-paper text-ink",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "no-print sticky top-0 z-40 border-b-2 border-clay bg-ink text-cream",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-[1180px] items-stretch gap-2 px-3 sm:px-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5 border-r border-ink-3 py-3 pr-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landmark, {
							className: "size-4 text-clay",
							strokeWidth: 1.75
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "leading-tight",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-display text-[13px] font-semibold tracking-wide",
								children: ["Guardian ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-clay",
									children: "Parliament"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hidden text-[10px] tracking-wider text-dust uppercase sm:block",
								children: "4P Closed Loop"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden min-w-0 flex-1 items-stretch overflow-x-auto md:flex",
						children: VIEWS.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => onView(v.id),
							className: cn("shrink-0 border-b-2 px-3 text-[12px] tracking-wide transition-colors duration-150", view === v.id ? "border-clay text-cream" : "border-transparent text-dust hover:text-cream"),
							children: v.label
						}, v.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex items-center gap-1.5 py-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								className: "hidden min-h-9 border-ink-3 text-cream hover:bg-ink-2 sm:inline-flex",
								onClick: () => window.print(),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-3.5" }), "Print"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								className: "min-h-9 px-3",
								onClick: onDownload,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline",
										children: "Download HTML"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sm:hidden",
										children: "HTML"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "inline-flex size-11 items-center justify-center rounded-md text-cream md:hidden",
								onClick: () => setOpen((o) => !o),
								"aria-label": "Menu",
								children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
							})
						]
					})
				]
			}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-1 border-t border-ink-3 p-3 md:hidden",
				children: VIEWS.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => {
						onView(v.id);
						setOpen(false);
					},
					className: cn("min-h-11 rounded-md px-3 text-left text-sm", view === v.id ? "bg-clay text-clay-fg" : "text-cream hover:bg-ink-2"),
					children: v.label
				}, v.id))
			}) : null]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "mx-auto max-w-[1180px] px-4 py-8 pb-24 sm:px-6 sm:py-10",
			children
		})]
	});
}
var SPECTRUM = [
	{
		n: "01",
		name: "Caretaker Presence",
		house: "People & Culture",
		role: "pc",
		body: "The day cannot open until every station is occupied by a named person whose certificate is valid. Absence is not a story — it is a count.",
		measure: "Staff on station before 07:15"
	},
	{
		n: "02",
		name: "Frontline Witness",
		house: "Operations",
		role: "om",
		body: "Yield is witnessed in grams, degrees, and minutes. The OM does not report effort. The OM reports the physical unit that left the standard.",
		measure: "Batch logs before service"
	},
	{
		n: "03",
		name: "Narrative Containment",
		house: "Day book",
		role: "om",
		body: "Every deviation is written the same day, in the same form, against a product. Memory is not a meeting. Memory is a line on the checklist.",
		measure: "Wastage and variance lines"
	},
	{
		n: "04",
		name: "Self-Regulation",
		house: "Finance + Seal",
		role: "fm",
		body: "FM converts the physical unit into cash and margin. GM recognises the number as the day's authority. No other narrative outranks the floor.",
		measure: "Gross margin vs KES floor"
	},
	{
		n: "05",
		name: "Civic Participation",
		house: "Monday matrix",
		role: "gm",
		body: "Five sealed days become the shared civic score. A red cell is not a mood. It is an edict against a named house.",
		measure: "Weekly matrix signed before 09:00"
	}
];
var JDS = {
	gm: [
		{
			text: "Review opening stock counts submitted by OM; approve or flag discrepancy before cooking begins",
			metric: "Stock variance (KES)",
			cadence: "Daily 07:00"
		},
		{
			text: "Sign the procurement order raised by FM before any raw material purchase is committed",
			metric: "Order approved Y/N",
			cadence: "As raised"
		},
		{
			text: "Review end-of-day profit signal against the overhead floor; classify the day",
			metric: "Net day result (KES)",
			cadence: "Daily 21:00"
		},
		{
			text: "If wastage exceeds tolerance, issue a Wastage Directive before the next shift opens",
			metric: "WD issued Y/N",
			cadence: "Same day"
		},
		{
			text: "Approve any price change — vestigial; no other role has this authority, and the market still sets the price",
			metric: "PA-01 sealed Y/N",
			cadence: "As required"
		},
		{
			text: "Review the weekly profit matrix every Monday; assign the lowest-yield product to the owning house",
			metric: "Weekly review signed",
			cadence: "Monday"
		}
	],
	fm: [
		{
			text: "Raise the procurement order from OM's projected covers and current stock; submit to GM",
			metric: "Order value (KES)",
			cadence: "Daily 07:30"
		},
		{
			text: "Receive delivered raw materials; count against order; log short delivery before OM begins prep",
			metric: "Delivery match %",
			cadence: "At delivery"
		},
		{
			text: "Count Diet Coke at opening and closing; reconcile units sold against cases opened",
			metric: "Coke variance (units)",
			cadence: "Open / close"
		},
		{
			text: "Record cash sales per product; calculate actual gross margin against standard; submit to GM",
			metric: "Actual vs standard GM",
			cadence: "Daily 20:30"
		},
		{
			text: "Track daily overhead spend; flag any unplanned cost to GM the same day",
			metric: "Overhead variance (KES)",
			cadence: "Daily"
		},
		{
			text: "Compile the weekly profit matrix from five daily records; present to GM before 09:00 Monday",
			metric: "Matrix submitted Y/N",
			cadence: "Monday"
		}
	],
	om: [
		{
			text: "Count all raw materials at opening; log quantity on hand against par; raise shortfall to FM",
			metric: "Stock on hand",
			cadence: "Daily 07:00"
		},
		{
			text: "Prepare rice to standard: 100 g raw → 280 g cooked ± 15 g. Log batch size and portions yielded",
			metric: "Portions / batch",
			cadence: "Per batch"
		},
		{
			text: "Fry chicken to standard: 250 g raw → ≥ 210 g fried. Weigh one portion per fryer batch",
			metric: "Fry yield %",
			cadence: "Per batch"
		},
		{
			text: "Prepare coleslaw: 1 head → 8 × 120 g. Log trim waste per head",
			metric: "Portions / head",
			cadence: "Per batch"
		},
		{
			text: "Log all wastage by product and cause before disposing; obtain GM signature if value > KES 500",
			metric: "Wastage (KES)",
			cadence: "Per event"
		},
		{
			text: "Report covers served and portions sold; reconcile against FM's sales record",
			metric: "Covers served",
			cadence: "Daily 20:00"
		}
	],
	pc: [
		{
			text: "Confirm scheduled staff are on station before service; log absence and activate cover",
			metric: "Staff on station",
			cadence: "Daily 07:15"
		},
		{
			text: "Record attendance with time-in / time-out; flag overtime before it is incurred",
			metric: "Hours logged",
			cadence: "Daily"
		},
		{
			text: "Conduct one observed portion-control check per shift per station; coach immediately on miss",
			metric: "Checks / deviations",
			cadence: "Per shift"
		},
		{
			text: "Ensure hygiene, uniform, and safety standards at opening and through service; log any breach",
			metric: "Compliance items",
			cadence: "Daily"
		},
		{
			text: "Maintain NHIF, NSSF, and food-handler certificates; alert FM 30 days before expiry",
			metric: "Days remaining",
			cadence: "Weekly"
		},
		{
			text: "Log conduct or performance issues with date, description, and action; escalate if repeated in 7 days",
			metric: "Cases open / closed",
			cadence: "As occurs"
		}
	]
};
var SOPS = [
	{
		id: "SOP-01",
		title: "Procurement & delivery",
		owner: "FM · Approval: GM",
		steps: [
			{
				text: "OM counts raw material stock at 07:00 and submits quantity-on-hand to FM on the daily checklist.",
				measure: "By 07:15"
			},
			{
				text: "FM calculates required order: par − on hand + projected covers × portions per cover. Par = 2-day supply.",
				measure: "Formula-driven"
			},
			{
				text: "FM completes PO-01 and submits to GM for signature before any commitment to a supplier.",
				measure: "GM signs first"
			},
			{
				text: "On delivery, FM weighs or counts every item. Chicken per kg. Rice by sack weight. Cabbage by head. Coke by case.",
				measure: "100% check"
			},
			{
				text: "Short delivery or quality failure: FM does not sign the delivery note. Replace or credit before acceptance.",
				measure: "No signature = not accepted"
			},
			{
				text: "FM logs actual received vs ordered. GM is notified of any discrepancy the same day.",
				measure: "Same-day log"
			}
		]
	},
	{
		id: "SOP-02",
		title: "Rice production",
		owner: "OM · Per batch",
		steps: [
			{
				text: "Measure raw rice on the kitchen scale. 100 g raw per portion target. A 20-portion batch is 2,000 g.",
				measure: "Scale ± 5 g"
			},
			{
				text: "Rinse. Water ratio 1 : 1.8 (100 g rice : 180 ml water). Boil, cover, 18 minutes. Lid stays closed.",
				measure: "1:1.8 · 18 min"
			},
			{
				text: "Weigh one portion from the batch. Target 280 g ± 15 g. Below 255 g: adjust water before the next batch.",
				measure: "280 g ± 15 g"
			},
			{
				text: "Record batch number, raw weight in, portions yielded, one-portion check. Submit on the daily checklist.",
				measure: "Log before service"
			},
			{
				text: "Rice held more than 4 hours after cooking is written off. No reheating for service.",
				measure: "4-hour shelf life"
			}
		]
	},
	{
		id: "SOP-03",
		title: "Deep-fried chicken production",
		owner: "OM · Per fryer batch",
		steps: [
			{
				text: "Portion raw chicken at 250 g ± 10 g before marinating. Offcuts logged as trim if within 16% of whole-bird weight.",
				measure: "250 g raw ± 10 g"
			},
			{
				text: "Marinate minimum 2 hours. Standard marinade batch covers 10 portions. Log start time and count.",
				measure: "Min 2 hours"
			},
			{
				text: "Oil 175 °C ± 5 °C before any chicken enters. Fry 12–14 minutes, turning once at 6 minutes.",
				measure: "175 °C · 12–14 min"
			},
			{
				text: "Weigh one piece from every fryer batch after draining. Target ≥ 210 g (84% fry yield). Below 200 g is a yield failure.",
				measure: "≥ 210 g cooked"
			},
			{
				text: "Change frying oil after 20 kg of chicken or at close of day, whichever is sooner. Log volume.",
				measure: "Every 20 kg"
			},
			{
				text: "Fried chicken not served within 30 minutes is written off. No re-frying.",
				measure: "30-minute window"
			}
		]
	},
	{
		id: "SOP-04",
		title: "Coleslaw production",
		owner: "OM · Per prep batch",
		steps: [
			{
				text: "One head of cabbage (~1.2 kg). Remove outer leaves (log trim). Expected usable shred ≥ 1.0 kg (≤ 10% trim).",
				measure: "≥ 1.0 kg usable"
			},
			{
				text: "Grate 2 medium carrots (~200 g) per head. Add 80 g mayonnaise per head-batch. Toss to coat.",
				measure: "80 g mayo / head"
			},
			{
				text: "Portion into 8 × 120 g servings per head-batch. Excess goes to a surplus container — not waste.",
				measure: "8 × 120 g"
			},
			{
				text: "Log heads used, portions yielded, trim weight. Shelf life 4 hours refrigerated. Label with prep time.",
				measure: "4 hrs fridge"
			}
		]
	},
	{
		id: "SOP-05",
		title: "End-of-day close & wastage reconciliation",
		owner: "FM + OM · Signed: GM",
		steps: [
			{
				text: "OM counts remaining uncooked stock and cooked-but-unsold portions (to be written off). No estimates.",
				measure: "Physical count"
			},
			{
				text: "FM reconciles: opening + received − ending = consumed. Consumed should equal portions sold ± wastage.",
				measure: "Consumed = sold ± waste"
			},
			{
				text: "FM records cash per product. Calculates actual gross margin. Compares to the overhead floor.",
				measure: "vs daily floor"
			},
			{
				text: "Total wastage over KES 500 requires WO-01. OM and FM sign; GM countersigns before disposal is recorded.",
				measure: "WO-01 if > 500"
			},
			{
				text: "GM reviews and signs the daily checklist. Classifies the day. Tomorrow's opening note is left for OM.",
				measure: "GM signs before lockup"
			}
		]
	}
];
var RIGHTS = [
	{
		action: "Open the day / confirm roster",
		pc: "Execute",
		om: "Witness",
		fm: "—",
		gm: "Seal if flagged"
	},
	{
		action: "Count opening stock",
		pc: "—",
		om: "Execute",
		fm: "Verify",
		gm: "Flag variance"
	},
	{
		action: "Raise procurement order",
		pc: "—",
		om: "Request",
		fm: "Initiate",
		gm: "Approve before buy"
	},
	{
		action: "Accept delivery",
		pc: "—",
		om: "Hold prep",
		fm: "Execute count",
		gm: "Notified of gap"
	},
	{
		action: "Cook / portion / fry",
		pc: "Observe once",
		om: "Execute",
		fm: "—",
		gm: "Audit"
	},
	{
		action: "Record sales & cash",
		pc: "—",
		om: "Portion count",
		fm: "Execute",
		gm: "Seal"
	},
	{
		action: "Write off wastage > KES 500",
		pc: "Witness",
		om: "Initiate",
		fm: "Value",
		gm: "Approve"
	},
	{
		action: "Change a selling price",
		pc: "—",
		om: "—",
		fm: "Advise",
		gm: "Exclusive · vestigial"
	},
	{
		action: "Classify the day",
		pc: "—",
		om: "—",
		fm: "Compute",
		gm: "Declare"
	},
	{
		action: "Issue an edict from a red cell",
		pc: "House III",
		om: "House I",
		fm: "House II",
		gm: "Seal I–V"
	},
	{
		action: "Present Monday civic score",
		pc: "Compliance annex",
		om: "Yield annex",
		fm: "Compile matrix",
		gm: "Assign action"
	}
];
var LOOP_THESIS = "Selling prices are fixed by the market. Fixed overheads are the floor that must be cleared every day. The only lever is the physical unit — grams, litres, portions, cases. A shortfall is not a pricing problem and not a narrative. It is a developmental failure of one house: presence, production, ledger, or seal.";
var ROLES$1 = [
	{
		id: "pc",
		title: "People & Culture",
		house: "House of Presence",
		stage: "1 · Caretaker Presence",
		brief: "Labour on station, hygiene, certificates, and the day’s first witness that the house is standing.",
		colorToken: "house-pc"
	},
	{
		id: "om",
		title: "Operations Manager",
		house: "House of Production",
		stage: "2 · Frontline Witness",
		brief: "Physical yield of rice, chicken, and coleslaw. Every gram that leaves the standard is a logged deviation.",
		colorToken: "house-om"
	},
	{
		id: "fm",
		title: "Finance Manager",
		house: "House of Ledger",
		stage: "4 · Self-Regulation",
		brief: "Procurement, cash, stock reconciliation, and the conversion of physical units into the profit signal.",
		colorToken: "house-fm"
	},
	{
		id: "gm",
		title: "General Manager",
		house: "House of Seal",
		stage: "4 · Legitimate Authority",
		brief: "The only role that may classify the day, issue an edict, or seal a write-off. Price remains vestigial.",
		colorToken: "house-gm"
	}
];
var PRODUCTS = [
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
		yieldLabel: "portions per kg raw"
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
		yieldLabel: "fry yield %"
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
		yieldLabel: "portions per head"
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
		yieldLabel: "unit integrity %"
	}
];
var OVERHEAD = [
	{
		id: "rent",
		label: "Rent & premises",
		monthly: 45e3,
		basis: "÷ days in month"
	},
	{
		id: "power",
		label: "Electricity & gas",
		monthly: 9e3,
		basis: "÷ days in month"
	},
	{
		id: "water",
		label: "Water",
		monthly: 3600,
		basis: "÷ days in month"
	},
	{
		id: "stat",
		label: "Licences, levies, VAT provision",
		monthly: 9e3,
		basis: "÷ days in month"
	},
	{
		id: "sal",
		label: "Salaries — 4 staff",
		monthly: 12e4,
		basis: "÷ days in month"
	},
	{
		id: "nssf",
		label: "NSSF / SHIF / statutory deductions",
		monthly: 9600,
		basis: "÷ days in month"
	}
];
var PAR = {
	rice: {
		unit: "kg",
		par: 20,
		label: "White rice (raw)"
	},
	chicken: {
		unit: "kg",
		par: 22,
		label: "Chicken (raw, portioned)"
	},
	cabbage: {
		unit: "heads",
		par: 6,
		label: "Cabbage"
	},
	carrots: {
		unit: "kg",
		par: 1.5,
		label: "Carrots"
	},
	mayo: {
		unit: "kg",
		par: 1,
		label: "Mayonnaise"
	},
	coke: {
		unit: "cases",
		par: 2,
		label: "Diet Coke (cases of 24)"
	},
	oil: {
		unit: "L",
		par: 10,
		label: "Frying oil"
	}
};
var EDICT_CLASSES = {
	I: {
		name: "Production yield",
		house: "House of Production (OM)",
		trigger: "Fry yield < 84%, rice < 10 portions/kg, or coleslaw < 8 portions/head"
	},
	II: {
		name: "Ledger & stock",
		house: "House of Ledger (FM)",
		trigger: "Cash variance, can variance, or stock below par without a raised order"
	},
	III: {
		name: "Presence",
		house: "House of Presence (PC)",
		trigger: "Absence without cover, incomplete station, or lapsed food-handler certificate"
	},
	IV: {
		name: "Floor shortfall",
		house: "House of Seal (GM)",
		trigger: "Gross margin fails to clear the daily overhead floor"
	},
	V: {
		name: "Recurrence",
		house: "House of Seal (GM)",
		trigger: "The same red cell appears on two or more days in the civic week"
	}
};
var STATIONS = [
	{
		station: "Fryer / Chef",
		name: "",
		timeIn: "",
		assigned: "Fryer",
		uniform: false,
		cert: false
	},
	{
		station: "Rice / Prep",
		name: "",
		timeIn: "",
		assigned: "Prep",
		uniform: false,
		cert: false
	},
	{
		station: "Counter / Service",
		name: "",
		timeIn: "",
		assigned: "Counter",
		uniform: false,
		cert: false
	},
	{
		station: "Cashier",
		name: "",
		timeIn: "",
		assigned: "Till",
		uniform: false,
		cert: false
	}
];
function emptyStock() {
	return {
		rice: 0,
		chicken: 0,
		cabbage: 0,
		carrots: 0,
		mayo: 0,
		coke: 0,
		oil: 0
	};
}
function emptyFlags() {
	return {
		rice: false,
		chicken: false,
		cabbage: false,
		carrots: false,
		mayo: false,
		coke: false,
		oil: false
	};
}
function blankDaily(date) {
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
		rice: [{
			rawG: 0,
			targeted: 0,
			yielded: 0,
			portionG: 0
		}, {
			rawG: 0,
			targeted: 0,
			yielded: 0,
			portionG: 0
		}],
		chicken: [
			{
				portionsIn: 0,
				oilTemp: 0,
				fryMin: 0,
				sampleG: 0
			},
			{
				portionsIn: 0,
				oilTemp: 0,
				fryMin: 0,
				sampleG: 0
			},
			{
				portionsIn: 0,
				oilTemp: 0,
				fryMin: 0,
				sampleG: 0
			}
		],
		coleslawHeads: 0,
		coleslawTrimG: 0,
		coleslawUsableG: 0,
		coleslawPortions: 0,
		wastage: [{
			time: "",
			product: "rice",
			qty: "",
			cause: "Over-prep",
			kes: 0
		}, {
			time: "",
			product: "chicken",
			qty: "",
			cause: "Time expired",
			kes: 0
		}],
		coversServed: 0,
		omCloseSig: "",
		sales: {
			rice: 0,
			chicken: 0,
			coleslaw: 0,
			coke: 0
		},
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
		sealed: false
	};
}
function filledDaily(date, sales, coke, opts = {}) {
	const d = blankDaily(date);
	const chickenY = opts.chickenYield ?? 85;
	const ricePerKg = opts.ricePerKg ?? 10;
	const heads = Math.max(1, Math.round(sales / 8));
	d.staff = [
		{
			station: "Fryer / Chef",
			name: "Amina Otieno",
			timeIn: "06:50",
			assigned: "Fryer",
			uniform: true,
			cert: true
		},
		{
			station: "Rice / Prep",
			name: "Joseph Mwangi",
			timeIn: "06:55",
			assigned: "Prep",
			uniform: true,
			cert: true
		},
		{
			station: "Counter / Service",
			name: "Faith Wanjiku",
			timeIn: "07:00",
			assigned: "Counter",
			uniform: true,
			cert: true
		},
		{
			station: "Cashier",
			name: "Peter Kamau",
			timeIn: "07:00",
			assigned: "Till",
			uniform: true,
			cert: true
		}
	];
	d.absence = opts.absence ?? "none";
	d.staffCount = opts.absence === "uncovered" ? 3 : 4;
	d.pcSig = "F. Njeri";
	d.stock = {
		rice: 22,
		chicken: 24,
		cabbage: 8,
		carrots: 2,
		mayo: 1.2,
		coke: 2.5,
		oil: 12
	};
	d.omOpenSig = "J. Omondi";
	d.gmOpenSig = "S. Kariuki";
	d.rice = [{
		rawG: Math.round(sales / ricePerKg * 1e3),
		targeted: sales,
		yielded: sales,
		portionG: 280
	}, {
		rawG: 0,
		targeted: 0,
		yielded: 0,
		portionG: 0
	}];
	d.chicken = [
		{
			portionsIn: Math.ceil(sales / 2),
			oilTemp: 175,
			fryMin: 13,
			sampleG: Math.round(250 * (chickenY / 100))
		},
		{
			portionsIn: Math.floor(sales / 2),
			oilTemp: 176,
			fryMin: 13,
			sampleG: Math.round(250 * (chickenY / 100))
		},
		{
			portionsIn: 0,
			oilTemp: 0,
			fryMin: 0,
			sampleG: 0
		}
	];
	d.coleslawHeads = heads;
	d.coleslawTrimG = heads * 80;
	d.coleslawUsableG = heads * 1e3;
	d.coleslawPortions = Math.round(heads * (opts.coleslawPerHead ?? 8));
	const wasteKes = opts.waste ?? 0;
	d.wastage = [{
		time: wasteKes ? "20:10" : "",
		product: "chicken",
		qty: wasteKes ? "2 pieces" : "",
		cause: wasteKes ? "Time expired" : "Over-prep",
		kes: wasteKes
	}, {
		time: "",
		product: "rice",
		qty: "",
		cause: "Over-prep",
		kes: 0
	}];
	d.coversServed = sales;
	d.omCloseSig = "J. Omondi";
	d.sales = {
		rice: sales,
		chicken: sales,
		coleslaw: sales,
		coke
	};
	d.till = 120 * sales + 320 * sales + 80 * sales + 100 * coke;
	d.cokeOpen = 2;
	d.cokeAdded = coke > 24 ? 1 : 0;
	d.cokeRemaining = 48 + d.cokeAdded * 24 - coke;
	d.fmSig = "P. Kamau";
	const gm = 82 * sales + 172 * sales + 58 * sales + 48 * coke;
	d.classify = gm > 6540 ? "profit" : gm === 6540 ? "breakeven" : "loss";
	d.wdRequired = wasteKes > 500;
	d.tomorrowAction = wasteKes > 500 ? "Cut chicken hold by 4 pieces; retrain 30-min window" : "Hold standard";
	d.gmSig = "S. Kariuki";
	d.closeTime = "21:05";
	d.sealed = opts.sealed ?? true;
	return d;
}
function seedDailies() {
	const mon = mondayOf(isoDate());
	const map = {};
	[
		[
			22,
			18,
			{
				chickenYield: 85,
				sealed: true
			}
		],
		[
			20,
			16,
			{
				chickenYield: 82,
				sealed: true
			}
		],
		[
			25,
			20,
			{
				chickenYield: 86,
				sealed: true
			}
		],
		[
			18,
			14,
			{
				chickenYield: 79,
				waste: 740,
				sealed: true
			}
		],
		[
			28,
			22,
			{
				chickenYield: 86,
				sealed: true
			}
		]
	].forEach(([sales, coke, opts], i) => {
		const date = addDays(mon, i);
		map[date] = filledDaily(date, sales, coke, opts);
	});
	return map;
}
function seedEdicts(dailies) {
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
			directive: "Probe oil temperature at every batch; log sample weight before service."
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
			directive: ""
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
			directive: ""
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
			directive: ""
		}
	];
}
var blankPO = () => ({
	ref: `PO-${(/* @__PURE__ */ new Date()).getFullYear()}-001`,
	date: isoDate(),
	delivery: isoDate(),
	supplier: "",
	notes: "",
	total: 0,
	withinBudget: true,
	fmName: "",
	gmName: "",
	recvName: "",
	sealed: false
});
var blankWO = () => ({
	ref: `WO-${(/* @__PURE__ */ new Date()).getFullYear()}-001`,
	date: isoDate(),
	time: "",
	value: 0,
	description: "",
	corrective: "",
	omName: "",
	fmName: "",
	gmName: "",
	sealed: false
});
var blankPrice = () => ({
	ref: `PA-${(/* @__PURE__ */ new Date()).getFullYear()}-001`,
	date: isoDate(),
	product: "rice",
	from: 120,
	to: 120,
	reason: "",
	gmName: "",
	sealed: false
});
var PIDS = [
	"rice",
	"chicken",
	"coleslaw",
	"coke"
];
function productMap(products) {
	return Object.fromEntries(products.map((p) => [p.id, p]));
}
function monthlyOverhead(lines) {
	return lines.reduce((s, l) => s + (Number(l.monthly) || 0), 0);
}
function dailyFloor(lines, daysInMonth) {
	const d = Math.max(1, daysInMonth || 30);
	return monthlyOverhead(lines) / d;
}
function coverMargin(products) {
	return products.reduce((s, p) => s + (p.price - p.rawCost), 0);
}
function breakEvenCovers(floor, margin) {
	if (margin <= 0) return Infinity;
	return Math.ceil(floor / margin);
}
function targetCovers(floor, margin, buffer = .15) {
	if (margin <= 0) return Infinity;
	return Math.ceil(floor * (1 + buffer) / margin);
}
function ricePerKg(d) {
	const raw = d.rice.reduce((s, b) => s + (Number(b.rawG) || 0), 0);
	const y = d.rice.reduce((s, b) => s + (Number(b.yielded) || 0), 0);
	if (raw <= 0 || y <= 0) return null;
	return y / (raw / 1e3);
}
function chickenYield(d) {
	const samples = d.chicken.filter((b) => (b.portionsIn || 0) > 0 && (b.sampleG || 0) > 0);
	if (!samples.length) return null;
	return samples.reduce((s, b) => s + b.sampleG, 0) / samples.length / 250 * 100;
}
function coleslawPerHead(d) {
	if (!d.coleslawHeads) return null;
	return d.coleslawPortions / d.coleslawHeads;
}
function wastageKes(d) {
	return d.wastage.reduce((s, w) => s + (Number(w.kes) || 0), 0);
}
function cokeVariance(d) {
	const start = (Number(d.cokeOpen) || 0) * 24;
	const added = (Number(d.cokeAdded) || 0) * 24;
	const sold = Number(d.sales.coke) || 0;
	return (Number(d.cokeRemaining) || 0) - (start + added - sold);
}
function evaluateDay(d, products, floor) {
	const map = productMap(products);
	const rev = {};
	const cost = {};
	const gm = {};
	let totRev = 0;
	let totCost = 0;
	let totGm = 0;
	let soldAny = false;
	for (const id of PIDS) {
		const s = Number(d.sales[id]) || 0;
		if (s) soldAny = true;
		const p = map[id];
		rev[id] = s * p.price;
		cost[id] = s * p.rawCost;
		gm[id] = rev[id] - cost[id];
		totRev += rev[id];
		totCost += cost[id];
		totGm += gm[id];
	}
	const net = totGm - floor;
	const classify = !soldAny ? "empty" : net > 0 ? "profit" : net === 0 ? "breakeven" : "loss";
	const belowPar = Object.keys(PAR).filter((k) => d.belowPar[k]);
	return {
		date: d.date,
		rev,
		cost,
		gm,
		totRev,
		totCost,
		totGm,
		floor,
		net,
		classify,
		cashVar: (Number(d.till) || 0) - totRev,
		cokeVar: cokeVariance(d),
		ricePerKg: ricePerKg(d),
		chickenYield: chickenYield(d),
		coleslawPerHead: coleslawPerHead(d),
		wastage: wastageKes(d),
		belowPar,
		uncovered: d.absence === "uncovered",
		sealed: d.sealed
	};
}
function edictsFromResult(d, r, products) {
	const out = [];
	const riceT = products.find((p) => p.id === "rice")?.yieldTarget ?? 10;
	const chT = products.find((p) => p.id === "chicken")?.yieldTarget ?? 84;
	const slT = products.find((p) => p.id === "coleslaw")?.yieldTarget ?? 8;
	const push = (cls, house, title, metric, actual, standard) => out.push({
		date: d.date,
		class: cls,
		house,
		title,
		metric,
		actual,
		standard
	});
	if (r.chickenYield != null && r.chickenYield < chT) push("I", "om", "Chicken fry yield below standard", "Fry yield", `${r.chickenYield.toFixed(1)}%`, `≥ ${chT}%`);
	if (r.ricePerKg != null && r.ricePerKg < riceT) push("I", "om", "Rice portions per kg below standard", "Rice yield", r.ricePerKg.toFixed(1), `≥ ${riceT} / kg`);
	if (r.coleslawPerHead != null && r.coleslawPerHead < slT) push("I", "om", "Coleslaw portions per head below standard", "Coleslaw yield", r.coleslawPerHead.toFixed(1), `≥ ${slT} / head`);
	if (r.wastage > 500) push("I", "om", "Wastage exceeds write-off threshold", "Wastage", `KES ${Math.round(r.wastage)}`, "≤ KES 500 without WO-01");
	if (Math.abs(r.cashVar) >= 1 && r.totRev > 0) push("II", "fm", "Cash variance at close", "Cash variance", `KES ${Math.round(r.cashVar)}`, "KES 0");
	if (Math.abs(r.cokeVar) >= 1 && r.totRev > 0) push("II", "fm", "Diet Coke unit variance", "Can variance", `${r.cokeVar} cans`, "0 cans");
	if (r.belowPar.length && r.totRev > 0) push("II", "fm", "Opening stock below par", "Below par", r.belowPar.join(", "), "All items at par");
	if (r.uncovered) push("III", "pc", "Absence without cover", "Staff on station", String(d.staffCount), "Full roster");
	if (d.staff.some((s) => s.name && !s.cert) && (r.totRev > 0 || d.pcSig)) push("III", "pc", "Food-handler certificate not confirmed", "Certificates", "Gap on roster", "All valid");
	if (r.classify === "loss") push("IV", "gm", "Day failed to clear the overhead floor", "Net vs floor", `KES ${Math.round(r.net)}`, "Net ≥ 0");
	return out;
}
function mergeEdicts(existing, generated) {
	const key = (e) => `${e.date}::${e.title}`;
	const map = new Map(existing.map((e) => [key(e), e]));
	for (const g of generated) {
		const k = key(g);
		if (!map.has(k)) map.set(k, {
			...g,
			id: uid("ed"),
			status: "open",
			directive: ""
		});
	}
	return [...map.values()];
}
function applyRecurrence(edicts, weekStart) {
	const weekEnd = addDays(weekStart, 5);
	const inWeek = edicts.filter((e) => e.date >= weekStart && e.date < weekEnd && e.class !== "V");
	const byTitle = /* @__PURE__ */ new Map();
	for (const e of inWeek) {
		const arr = byTitle.get(e.title) ?? [];
		arr.push(e);
		byTitle.set(e.title, arr);
	}
	const extra = [];
	for (const [title, arr] of byTitle) {
		const days = new Set(arr.map((e) => e.date));
		if (days.size >= 2) {
			if (!edicts.some((e) => e.class === "V" && e.metric === title && e.date >= weekStart && e.date < weekEnd)) extra.push({
				id: uid("ed"),
				date: [...days].sort()[1],
				class: "V",
				house: "gm",
				title: "Repeated red cell within the civic week",
				metric: title,
				actual: [...days].sort().join(" + "),
				standard: "No repeated red cell in 5 days",
				status: "open",
				directive: ""
			});
		}
	}
	return extra.length ? [...edicts, ...extra] : edicts;
}
function weekRows(weekStart, dailies, products, floor) {
	const dates = [
		0,
		1,
		2,
		3,
		4
	].map((i) => addDays(weekStart, i));
	const results = dates.map((dt) => {
		const d = dailies[dt];
		return d ? evaluateDay(d, products, floor) : null;
	});
	const sum = (pick) => {
		const vals = results.map((r) => r ? pick(r) : null);
		const nums = vals.filter((v) => v != null);
		const total = nums.length ? nums.reduce((s, n) => s + n, 0) : null;
		return {
			values: vals,
			total,
			avg: nums.length ? total / nums.length : null
		};
	};
	const riceT = products.find((p) => p.id === "rice")?.yieldTarget ?? 10;
	const chT = products.find((p) => p.id === "chicken")?.yieldTarget ?? 84;
	const slT = products.find((p) => p.id === "coleslaw")?.yieldTarget ?? 8;
	return {
		dates,
		rows: [
			{
				key: "riceSold",
				label: "Rice portions sold",
				house: "fm",
				unit: "n",
				...sum((r) => r.rev.rice ? r.rev.rice / (products.find((p) => p.id === "rice")?.price || 120) : 0)
			},
			{
				key: "chSold",
				label: "Chicken portions sold",
				house: "fm",
				unit: "n",
				...sum((r) => r.rev.chicken / (products.find((p) => p.id === "chicken")?.price || 320))
			},
			{
				key: "slSold",
				label: "Coleslaw portions sold",
				house: "fm",
				unit: "n",
				...sum((r) => r.rev.coleslaw / (products.find((p) => p.id === "coleslaw")?.price || 80))
			},
			{
				key: "cokeSold",
				label: "Diet Coke cans sold",
				house: "fm",
				unit: "n",
				...sum((r) => r.rev.coke / (products.find((p) => p.id === "coke")?.price || 100))
			},
			{
				key: "rev",
				label: "Gross revenue",
				house: "fm",
				unit: "kes",
				...sum((r) => r.totRev)
			},
			{
				key: "cost",
				label: "Raw material cost",
				house: "fm",
				unit: "kes",
				...sum((r) => r.totCost)
			},
			{
				key: "gm",
				label: "Gross margin",
				house: "civic",
				unit: "kes",
				...sum((r) => r.totGm)
			},
			{
				key: "floor",
				label: "Overhead floor (fixed)",
				house: "civic",
				unit: "kes",
				values: results.map((r) => r ? r.floor : floor),
				total: floor * 5,
				avg: floor
			},
			{
				key: "net",
				label: "Net profit / (loss)",
				house: "gm",
				unit: "kes",
				...sum((r) => r.classify === "empty" ? null : r.net),
				target: 0
			},
			{
				key: "chY",
				label: "Chicken fry yield",
				house: "om",
				unit: "pct",
				...sum((r) => r.chickenYield),
				target: chT
			},
			{
				key: "riceY",
				label: "Rice portions / kg raw",
				house: "om",
				unit: "n",
				...sum((r) => r.ricePerKg),
				target: riceT
			},
			{
				key: "slY",
				label: "Coleslaw portions / head",
				house: "om",
				unit: "n",
				...sum((r) => r.coleslawPerHead),
				target: slT
			},
			{
				key: "waste",
				label: "Wastage",
				house: "om",
				unit: "kes",
				...sum((r) => r.wastage),
				target: 500,
				invert: true
			}
		],
		results
	};
}
function cellRed(row, value) {
	if (value == null || row.target == null) return false;
	if (row.key === "net") return value < 0;
	if (row.invert) return value > row.target;
	return value < row.target;
}
function loopStages(d, r) {
	const pc = Boolean(d?.pcSig);
	const omOpen = Boolean(d?.omOpenSig);
	const witness = d?.rice.some((b) => b.yielded > 0) || d?.chicken.some((b) => b.portionsIn > 0) || (d?.coleslawPortions ?? 0) > 0;
	const memory = d?.wastage.some((w) => w.kes > 0) || Boolean(d?.omCloseSig);
	const fm = Boolean(d?.fmSig);
	const seal = Boolean(d?.sealed && d?.gmSig);
	return [
		{
			id: "pc",
			label: "Caretaker presence",
			house: "PC",
			done: pc,
			note: pc ? "Roster confirmed" : "Opening staff check"
		},
		{
			id: "om",
			label: "Frontline witness",
			house: "OM",
			done: omOpen && witness,
			note: witness ? "Yield logged" : "Production not yet logged"
		},
		{
			id: "mem",
			label: "Narrative memory",
			house: "OM / FM",
			done: memory || fm,
			note: memory ? "Deviations on the day book" : "No deviations logged"
		},
		{
			id: "fm",
			label: "Self-regulation",
			house: "FM",
			done: fm,
			note: fm ? "Cash reconciled" : "Close the till"
		},
		{
			id: "gm",
			label: "Legitimate authority",
			house: "GM",
			done: seal,
			note: seal ? `Day sealed · ${r?.classify}` : "Awaiting GM seal"
		},
		{
			id: "civic",
			label: "Civic score",
			house: "Week",
			done: seal,
			note: "Feeds the Monday matrix"
		}
	];
}
function audit(actor, action, detail) {
	return {
		id: uid("au"),
		ts: (/* @__PURE__ */ new Date()).toISOString(),
		actor,
		action,
		detail
	};
}
function initial() {
	const dailies = seedDailies();
	return {
		venue: "Four-Product Kitchen · Eastlands",
		products: PRODUCTS.map((p) => ({ ...p })),
		overhead: OVERHEAD.map((l) => ({ ...l })),
		daysInMonth: 30,
		dailies,
		edicts: seedEdicts(dailies),
		audit: [audit("system", "Ledger opened", "Demo civic week seeded from the current Monday. All figures are editable.")],
		po: blankPO(),
		wo: blankWO(),
		priceChange: blankPrice()
	};
}
var useOs = create()(persist((set, get) => ({
	...initial(),
	hydrated: false,
	setHydrated: (v) => set({ hydrated: v }),
	setVenue: (venue) => set({ venue }),
	patchProduct: (id, patch) => set((s) => ({ products: s.products.map((p) => p.id === id ? {
		...p,
		...patch
	} : p) })),
	patchOverhead: (id, monthly) => set((s) => ({ overhead: s.overhead.map((l) => l.id === id ? {
		...l,
		monthly
	} : l) })),
	setDaysInMonth: (n) => set({ daysInMonth: n }),
	ensureDay: (date) => set((s) => {
		if (s.dailies[date]) return s;
		return { dailies: {
			...s.dailies,
			[date]: blankDaily(date)
		} };
	}),
	patchDay: (date, patch) => set((s) => {
		const prev = s.dailies[date] ?? blankDaily(date);
		const next = typeof patch === "function" ? patch(prev) : {
			...prev,
			...patch
		};
		return { dailies: {
			...s.dailies,
			[date]: next
		} };
	}),
	sealDay: (date, gmSig) => set((s) => {
		const d = {
			...s.dailies[date] ?? blankDaily(date),
			gmSig,
			sealed: true
		};
		const floor = dailyFloor(s.overhead, s.daysInMonth);
		const result = evaluateDay(d, s.products, floor);
		d.classify = result.classify === "empty" ? "" : result.classify;
		const generated = edictsFromResult(d, result, s.products);
		let edicts = mergeEdicts(s.edicts, generated);
		edicts = applyRecurrence(edicts, mondayOf(date));
		return {
			dailies: {
				...s.dailies,
				[date]: d
			},
			edicts,
			audit: [audit("gm", "Day sealed", `${date} classified ${d.classify || "empty"} · net KES ${Math.round(result.net)}`), ...s.audit].slice(0, 80)
		};
	}),
	setEdict: (id, patch) => set((s) => ({ edicts: s.edicts.map((e) => e.id === id ? {
		...e,
		...patch
	} : e) })),
	patchPo: (patch) => set((s) => ({ po: {
		...s.po,
		...patch
	} })),
	patchWo: (patch) => set((s) => ({ wo: {
		...s.wo,
		...patch
	} })),
	patchPrice: (patch) => set((s) => ({ priceChange: {
		...s.priceChange,
		...patch
	} })),
	sealPrice: () => set((s) => {
		const pc = s.priceChange;
		if (!pc.gmName.trim()) return s;
		return {
			priceChange: {
				...pc,
				sealed: true
			},
			products: s.products.map((p) => p.id === pc.product ? {
				...p,
				price: pc.to
			} : p),
			audit: [audit("gm", "Price instrument sealed (vestigial)", `${pc.product} ${pc.from} → ${pc.to}`), ...s.audit]
		};
	}),
	log: (actor, action, detail) => set((s) => ({ audit: [audit(actor, action, detail), ...s.audit].slice(0, 80) })),
	resetDemo: () => set({
		...initial(),
		hydrated: true,
		audit: [audit("system", "Demo week restored", isoDate())]
	}),
	clearAll: () => set({
		...initial(),
		dailies: {},
		edicts: [],
		audit: [audit("system", "Ledger cleared", "All daily records removed")],
		hydrated: true
	})
}), {
	name: "guardian-parliament-4p",
	skipHydration: true,
	partialize: (s) => {
		const { hydrated, ...rest } = s;
		return rest;
	}
}));
function hydrateOs() {
	useOs.persist.rehydrate();
	useOs.getState().setHydrated(true);
}
function LoopView({ onView }) {
	const products = useOs((s) => s.products);
	const overhead = useOs((s) => s.overhead);
	const daysInMonth = useOs((s) => s.daysInMonth);
	const dailies = useOs((s) => s.dailies);
	const edicts = useOs((s) => s.edicts);
	const venue = useOs((s) => s.venue);
	const today = isoDate();
	const day = dailies[today];
	const floor = dailyFloor(overhead, daysInMonth);
	const result = day ? evaluateDay(day, products, floor) : void 0;
	const stages = loopStages(day, result);
	const openEdicts = edicts.filter((e) => e.status !== "closed").slice(0, 4);
	const kind = !result || result.classify === "empty" ? "idle" : result.classify === "profit" ? "ok" : result.classify === "breakeven" ? "warn" : "danger";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Closed-loop developmental OS" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl",
					children: "The unit of measure is the only lever"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-[15px] leading-relaxed text-stone",
					children: LOOP_THESIS
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-xs tracking-wide text-dust uppercase",
					children: [
						venue,
						" · ",
						prettyDate(today)
					]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "md:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] font-semibold tracking-[0.18em] text-stone uppercase",
							children: "Today vs overhead floor"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 font-display text-5xl font-semibold tabular-nums tracking-tight",
							children: result && result.classify !== "empty" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: result.net >= 0 ? "text-ok" : "text-danger",
								children: [result.net >= 0 ? "+" : "−", kes(Math.abs(result.net))]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-dust",
								children: "—"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signal, {
								kind,
								children: result?.classify === "profit" ? `Profit — floor of KES ${kes(floor)} cleared` : result?.classify === "loss" ? `Loss — short of the KES ${kes(floor)} floor` : result?.classify === "breakeven" ? "Exactly break-even" : "Seal today’s sales on the Daily desk to generate the signal"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => onView("daily"),
							className: "mt-5 inline-flex items-center gap-1 text-sm font-medium text-clay hover:underline",
							children: ["Open today’s desk ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] font-semibold tracking-[0.18em] text-stone uppercase",
						children: "Floor"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-2 font-display text-4xl font-semibold tabular-nums text-ink",
						children: kes(Math.round(floor))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-stone",
						children: "KES per day. Fixed. Does not move with covers. Edit the lines on Units."
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-4 font-display text-xl font-semibold",
				children: "The developmental sequence"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "grid gap-3 md:grid-cols-5",
				children: SPECTRUM.map((s, i) => {
					const st = stages[i];
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-xl border border-paper-3 bg-cream p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-[11px] text-clay",
									children: s.n
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: st?.done ? "size-2 rounded-full bg-ok" : "size-2 rounded-full bg-dust" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-display text-[15px] font-semibold leading-snug",
								children: s.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-[11px] tracking-wide text-stone uppercase",
								children: s.house
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[12px] leading-relaxed text-stone",
								children: s.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-[11px] font-medium text-ink",
								children: st?.note ?? s.measure
							})
						]
					}, s.n);
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-semibold",
					children: "Four houses"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 divide-y divide-paper-3",
					children: ROLES$1.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "flex items-start justify-between gap-3 py-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HouseChip, { role: r.id }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: r.house
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-stone",
							children: r.brief
						})] })
					}, r.id))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-semibold",
							children: "Open edicts"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Landmark, { className: "size-4 text-clay" })]
					}),
					openEdicts.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm text-stone",
						children: "No open edicts. Red cells on the weekly matrix issue them automatically."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-3",
						children: openEdicts.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-lg border border-paper-3 bg-paper px-3 py-2.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-[11px] text-clay",
										children: ["Class ", e.class]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HouseChip, { role: e.house })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-sm font-medium",
									children: e.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[12px] text-stone",
									children: [
										e.actual,
										" against ",
										e.standard
									]
								})
							]
						}, e.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => onView("edicts"),
						className: "mt-4 text-sm font-medium text-clay hover:underline",
						children: "Rights matrix & audit"
					})
				] })]
			})
		]
	});
}
var ICONS = {
	rice: Wheat,
	chicken: Drumstick,
	coleslaw: Salad,
	coke: CupSoda
};
var TINT = {
	rice: "text-unit-rice",
	chicken: "text-unit-chicken",
	coleslaw: "text-unit-coleslaw",
	coke: "text-unit-coke"
};
function UnitsView() {
	const products = useOs((s) => s.products);
	const overhead = useOs((s) => s.overhead);
	const days = useOs((s) => s.daysInMonth);
	const venue = useOs((s) => s.venue);
	const patchProduct = useOs((s) => s.patchProduct);
	const patchOverhead = useOs((s) => s.patchOverhead);
	const setDaysInMonth = useOs((s) => s.setDaysInMonth);
	const setVenue = useOs((s) => s.setVenue);
	const floor = dailyFloor(overhead, days);
	const gm = coverMargin(products);
	const be = breakEvenCovers(floor, gm);
	const tgt = targetCovers(floor, gm);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Standard units of truth" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-semibold tracking-tight",
					children: "Four products, a floor, and nothing else"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-[15px] leading-relaxed text-stone",
					children: "Every duty, checklist item, and edict traces to these cards. Selling prices are market-fixed. Change a number here and the daily desk, weekly matrix, and edicts recompute."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Venue",
				className: "max-w-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: venue,
					onChange: (e) => setVenue(e.target.value)
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: products.map((p) => {
					const Icon = ICONS[p.id];
					const margin = p.price - p.rawCost;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "rounded-xl border border-paper-3 bg-cream p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: `size-5 ${TINT[p.id]}`,
									strokeWidth: 1.6
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-[10px] tracking-wider text-stone uppercase",
									children: [p.owner, " owns yield"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 font-display text-lg font-semibold",
								children: p.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12px] text-stone",
								children: p.rawMaterial
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 grid grid-cols-2 gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Sell (KES)",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
										value: p.price,
										onValue: (n) => patchProduct(p.id, { price: n })
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Raw cost",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
										value: p.rawCost,
										onValue: (n) => patchProduct(p.id, { rawCost: n })
									})
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `mt-3 font-display text-2xl font-semibold tabular-nums ${TINT[p.id]}`,
								children: kes(p.price)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[12px] text-stone",
								children: p.stdPortion
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 text-[12px]",
								children: ["Margin ", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-medium tabular-nums text-ok",
									children: ["KES ", kes(margin)]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-3 space-y-1 text-[11px] text-stone",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["Buy: ", p.purchaseUnit] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["Yield: ", p.portionsPerUnit] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["Waste: ", p.wastageTolerance] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										"Target: ",
										p.yieldTarget,
										" ",
										p.yieldLabel
									] })
								]
							})
						]
					}, p.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 font-display text-xl font-semibold",
					children: "Fixed daily overhead — the floor"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 max-w-2xl text-sm text-stone",
					children: "These costs exist whether one plate is sold or one hundred. Gross margin from the four units must exceed this floor before profit exists. East-African urban baseline; every line is editable."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "overflow-hidden rounded-xl border border-paper-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[1fr_110px_110px_1fr] bg-ink px-4 py-2.5 text-[11px] font-semibold tracking-wider text-cream uppercase",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Cost line" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-right",
									children: "Monthly"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-right",
									children: "Daily"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-right",
									children: "Basis"
								})
							]
						}),
						overhead.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[1fr_110px_110px_1fr] items-center gap-2 border-b border-paper-3 bg-cream px-4 py-2 text-sm last:border-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: l.label }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
									value: l.monthly,
									onValue: (n) => patchOverhead(l.id, n),
									className: "min-h-9"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-right tabular-nums",
									children: kes(l.monthly / Math.max(1, days))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-right text-[11px] text-stone",
									children: l.basis
								})
							]
						}, l.id)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-[1fr_110px_110px_1fr] bg-paper-2 px-4 py-3 text-sm font-semibold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Daily overhead floor" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-right tabular-nums",
									children: kes(monthlyOverhead(overhead))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-right tabular-nums text-danger",
									children: kes(Math.round(floor))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-right text-[11px] text-stone",
									children: "Every day"
								})
							]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 max-w-xs",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Days in month",
						hint: "Floor = monthly total ÷ this",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
							value: days,
							onValue: setDaysInMonth,
							step: "1"
						})
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 sm:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] tracking-[0.16em] text-stone uppercase",
								children: "Break-even covers"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-4xl font-semibold tabular-nums",
								children: Number.isFinite(be) ? be : "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-stone",
								children: "full covers / day minimum"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] tracking-[0.16em] text-stone uppercase",
								children: "Gross margin / full cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-4xl font-semibold tabular-nums text-ok",
								children: kes(gm)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-stone",
								children: "KES after raw material"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
						className: "text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[10px] tracking-[0.16em] text-stone uppercase",
								children: "Target (15% buffer)"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-display text-4xl font-semibold tabular-nums text-clay",
								children: Number.isFinite(tgt) ? tgt : "—"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-stone",
								children: "covers to hold a profit buffer"
							})
						]
					})
				]
			})
		]
	});
}
function HousesView() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Four houses · bounded authority" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-semibold tracking-tight",
					children: "Duties expressed as daily measurable obligations"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-[15px] leading-relaxed text-stone",
					children: "If a duty cannot be reduced to a number on the daily checklist, it does not belong in the job description. Each house owns one or more raw-material levers and is evaluated against those levers, not against effort."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 md:grid-cols-4",
				children: SPECTRUM.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[11px] text-clay",
							children: s.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-base font-semibold",
							children: s.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[12px] text-stone",
							children: s.house
						})
					]
				}, s.n))
			}),
			ROLES$1.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(JdCard, { role: r.id }, r.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 font-display text-xl font-semibold",
					children: "Rights matrix"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 max-w-2xl text-sm text-stone",
					children: "Authority is bounded. No house may execute an act that belongs to another. Price change is vestigial: the market sets the price; the GM is the only role that may even record a change."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto rounded-xl border border-paper-3",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[720px] text-left text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-ink text-[11px] tracking-wider text-cream uppercase",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2.5 font-semibold",
									children: "Act"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2.5 font-semibold",
									children: "PC"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2.5 font-semibold",
									children: "OM"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2.5 font-semibold",
									children: "FM"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-2.5 font-semibold",
									children: "GM"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: RIGHTS.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-paper-3 bg-cream even:bg-paper-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2.5 font-medium",
									children: row.action
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2.5 text-stone",
									children: row.pc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2.5 text-stone",
									children: row.om
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2.5 text-stone",
									children: row.fm
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-2.5 text-stone",
									children: row.gm
								})
							]
						}, row.action)) })]
					})
				})
			] })
		]
	});
}
function JdCard({ role }) {
	const r = ROLES$1.find((x) => x.id === role);
	const duties = JDS[role];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: `overflow-hidden rounded-xl border border-paper-3 border-l-4 bg-cream ${{
			gm: "border-l-house-gm",
			fm: "border-l-house-fm",
			om: "border-l-house-om",
			pc: "border-l-house-pc"
		}[role]}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "flex flex-wrap items-baseline justify-between gap-2 bg-paper-2 px-5 py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-lg font-semibold",
				children: r.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-stone",
				children: [
					r.house,
					" · ",
					r.stage
				]
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HouseChip, { role })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-5 py-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-[1fr_140px_110px] gap-2 py-2 text-[10px] font-semibold tracking-wider text-stone uppercase",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Duty" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-center",
						children: "Daily metric"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-center",
						children: "Cadence"
					})
				]
			}), duties.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 gap-1 border-t border-paper-3 py-3 text-sm md:grid-cols-[1fr_140px_110px] md:items-center md:gap-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "leading-snug",
						children: d.text
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-clay md:text-center",
						children: d.metric
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-stone md:text-center",
						children: d.cadence
					})
				]
			}, d.metric))]
		})]
	});
}
var ROLES = [
	{
		id: "pc",
		label: "PC · Presence",
		phase: "Opening / during"
	},
	{
		id: "om",
		label: "OM · Production",
		phase: "Open / batch / close"
	},
	{
		id: "fm",
		label: "FM · Ledger",
		phase: "Close 20:30"
	},
	{
		id: "gm",
		label: "GM · Seal",
		phase: "Before lockup"
	}
];
function DailyView() {
	const [date, setDate] = (0, import_react.useState)(isoDate);
	const [role, setRole] = (0, import_react.useState)("pc");
	const ensureDay = useOs((s) => s.ensureDay);
	const day = useOs((s) => s.dailies[date]);
	const patchDay = useOs((s) => s.patchDay);
	const products = useOs((s) => s.products);
	const floor = dailyFloor(useOs((s) => s.overhead), useOs((s) => s.daysInMonth));
	(0, import_react.useEffect)(() => {
		ensureDay(date);
	}, [date, ensureDay]);
	if (!day) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "text-stone",
		children: "Opening the day book…"
	});
	const result = evaluateDay(day, products, floor);
	const patch = (p) => patchDay(date, p);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Daily operating desk · eight minutes" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-semibold tracking-tight",
					children: "One day, four houses, no interpretation"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-[15px] leading-relaxed text-stone",
					children: "Each house fills its own section. Every field is a number, a count, or a yes/no. The GM seals the bottom. The completed form is the day’s audit record and the feed for the Monday matrix."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Operating date",
						className: "w-44",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							type: "date",
							value: date,
							onChange: (e) => setDate(e.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "pb-2 text-sm text-stone",
						children: [
							prettyDate(date),
							" · ",
							weekday(date)
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Target covers",
						className: "w-32",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
							value: day.targetCovers,
							onValue: (n) => patch({ targetCovers: n })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Opening",
						className: "w-32",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							type: "time",
							value: day.openingTime,
							onChange: (e) => patch({ openingTime: e.target.value })
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "no-print flex flex-wrap gap-2",
				children: ROLES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setRole(r.id),
					className: role === r.id ? "min-h-11 rounded-md bg-ink px-4 text-sm text-cream" : "min-h-11 rounded-md border border-paper-3 bg-cream px-4 text-sm text-ink hover:bg-paper-2",
					children: r.label
				}, r.id))
			}),
			role === "pc" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PcDesk, {
				day,
				patch
			}),
			role === "om" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OmDesk, {
				day,
				patch
			}),
			role === "fm" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FmDesk, {
				day,
				patch,
				products,
				result
			}),
			role === "gm" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GmDesk, {
				date,
				day,
				patch,
				result,
				floor
			})
		]
	});
}
function PcDesk({ day, patch }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-lg font-semibold",
				children: "Opening staff & compliance · by 07:15"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HouseChip, { role: "pc" })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[640px] text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "text-[10px] tracking-wider text-stone uppercase",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "pb-2 text-left",
							children: "Station"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "pb-2 text-left",
							children: "Name"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "pb-2 text-left",
							children: "Time in"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "pb-2 text-left",
							children: "Assigned"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "pb-2",
							children: "Uniform"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "pb-2",
							children: "Cert"
						})
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: day.staff.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-paper-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2 pr-2 font-medium",
							children: s.station
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2 pr-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
								className: "min-h-10",
								value: s.name,
								onChange: (e) => patch((d) => {
									const staff = d.staff.map((row, j) => j === i ? {
										...row,
										name: e.target.value
									} : row);
									return {
										...d,
										staff
									};
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2 pr-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
								type: "time",
								className: "min-h-10",
								value: s.timeIn,
								onChange: (e) => patch((d) => {
									const staff = d.staff.map((row, j) => j === i ? {
										...row,
										timeIn: e.target.value
									} : row);
									return {
										...d,
										staff
									};
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2 pr-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
								className: "min-h-10",
								value: s.assigned,
								onChange: (e) => patch((d) => {
									const staff = d.staff.map((row, j) => j === i ? {
										...row,
										assigned: e.target.value
									} : row);
									return {
										...d,
										staff
									};
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2 text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								className: "size-4 accent-clay",
								checked: s.uniform,
								onChange: (e) => patch((d) => {
									const staff = d.staff.map((row, j) => j === i ? {
										...row,
										uniform: e.target.checked
									} : row);
									return {
										...d,
										staff
									};
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2 text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "checkbox",
								className: "size-4 accent-clay",
								checked: s.cert,
								onChange: (e) => patch((d) => {
									const staff = d.staff.map((row, j) => j === i ? {
										...row,
										cert: e.target.checked
									} : row);
									return {
										...d,
										staff
									};
								})
							})
						})
					]
				}, s.station)) })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-3 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Staff count",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
						value: day.staffCount,
						onValue: (n) => patch({ staffCount: n })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Absence",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: day.absence,
						onChange: (e) => patch({ absence: e.target.value }),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "none",
								children: "No absence"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "covered",
								children: "1 absent — cover arranged"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "uncovered",
								children: "1 absent — no cover"
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "PC signature",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						value: day.pcSig,
						onChange: (e) => patch({ pcSig: e.target.value }),
						placeholder: "Signed"
					})
				})
			]
		})
	] });
}
function OmDesk({ day, patch }) {
	const keys = Object.keys(PAR);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-semibold",
						children: "Opening stock · by 07:15"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HouseChip, { role: "om" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-3 text-sm text-stone",
					children: "Count physically. No estimates. Below par: tick and alert FM."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[560px] text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "text-[10px] tracking-wider text-stone uppercase",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "pb-2 text-left",
									children: "Item"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "pb-2 text-right",
									children: "Par"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "pb-2 text-right",
									children: "On hand"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "pb-2 text-center",
									children: "Below"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "pb-2 text-center",
									children: "Alerted"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: keys.map((k) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-paper-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "py-2",
									children: [PAR[k].label, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "ml-1 text-stone",
										children: [
											"(",
											PAR[k].unit,
											")"
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 text-right tabular-nums text-stone",
									children: PAR[k].par
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
										className: "min-h-10",
										value: day.stock[k],
										onValue: (n) => patch((d) => ({
											...d,
											stock: {
												...d.stock,
												[k]: n
											},
											belowPar: {
												...d.belowPar,
												[k]: n < PAR[k].par
											}
										}))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "text-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										className: "size-4 accent-clay",
										checked: day.belowPar[k],
										onChange: (e) => patch((d) => ({
											...d,
											belowPar: {
												...d.belowPar,
												[k]: e.target.checked
											}
										}))
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "text-center",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										className: "size-4 accent-clay",
										checked: day.alertSent[k],
										onChange: (e) => patch((d) => ({
											...d,
											alertSent: {
												...d.alertSent,
												[k]: e.target.checked
											}
										}))
									})
								})
							]
						}, k)) })]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 grid gap-3 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "OM opening signature",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							value: day.omOpenSig,
							onChange: (e) => patch({ omOpenSig: e.target.value })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "GM reviewed opening",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							value: day.gmOpenSig,
							onChange: (e) => patch({ gmOpenSig: e.target.value })
						})
					})]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 font-display text-lg font-semibold",
				children: "Rice — batch log"
			}), day.rice.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 grid grid-cols-2 gap-2 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: `Batch ${i + 1} raw g`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
							value: b.rawG,
							onValue: (n) => patch((d) => ({
								...d,
								rice: d.rice.map((x, j) => j === i ? {
									...x,
									rawG: n
								} : x)
							}))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Targeted",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
							value: b.targeted,
							onValue: (n) => patch((d) => ({
								...d,
								rice: d.rice.map((x, j) => j === i ? {
									...x,
									targeted: n
								} : x)
							}))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Yielded",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
							value: b.yielded,
							onValue: (n) => patch((d) => ({
								...d,
								rice: d.rice.map((x, j) => j === i ? {
									...x,
									yielded: n
								} : x)
							}))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "1-portion g",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
							value: b.portionG,
							onValue: (n) => patch((d) => ({
								...d,
								rice: d.rice.map((x, j) => j === i ? {
									...x,
									portionG: n
								} : x)
							}))
						})
					})
				]
			}, i))] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 font-display text-lg font-semibold",
				children: "Chicken — fryer batch log"
			}), day.chicken.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 grid grid-cols-2 gap-2 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: `Batch ${i + 1} in`,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
							value: b.portionsIn,
							onValue: (n) => patch((d) => ({
								...d,
								chicken: d.chicken.map((x, j) => j === i ? {
									...x,
									portionsIn: n
								} : x)
							}))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Oil °C",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
							value: b.oilTemp,
							onValue: (n) => patch((d) => ({
								...d,
								chicken: d.chicken.map((x, j) => j === i ? {
									...x,
									oilTemp: n
								} : x)
							}))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Fry min",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
							value: b.fryMin,
							onValue: (n) => patch((d) => ({
								...d,
								chicken: d.chicken.map((x, j) => j === i ? {
									...x,
									fryMin: n
								} : x)
							}))
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Sample g",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
							value: b.sampleG,
							onValue: (n) => patch((d) => ({
								...d,
								chicken: d.chicken.map((x, j) => j === i ? {
									...x,
									sampleG: n
								} : x)
							}))
						})
					})
				]
			}, i))] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 font-display text-lg font-semibold",
				children: "Coleslaw — prep batch"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-2 gap-2 md:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Heads used",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
							value: day.coleslawHeads,
							onValue: (n) => patch({ coleslawHeads: n })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Trim g",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
							value: day.coleslawTrimG,
							onValue: (n) => patch({ coleslawTrimG: n })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Usable g",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
							value: day.coleslawUsableG,
							onValue: (n) => patch({ coleslawUsableG: n })
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Portions yielded",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
							value: day.coleslawPortions,
							onValue: (n) => patch({ coleslawPortions: n })
						})
					})
				]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mb-3 font-display text-lg font-semibold",
					children: "Wastage log"
				}),
				day.wastage.map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 grid grid-cols-2 gap-2 md:grid-cols-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Time",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
								type: "time",
								value: w.time,
								onChange: (e) => patch((d) => ({
									...d,
									wastage: d.wastage.map((x, j) => j === i ? {
										...x,
										time: e.target.value
									} : x)
								}))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Product",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: w.product,
								onChange: (e) => patch((d) => ({
									...d,
									wastage: d.wastage.map((x, j) => j === i ? {
										...x,
										product: e.target.value
									} : x)
								})),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "rice",
										children: "Rice"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "chicken",
										children: "Chicken"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "coleslaw",
										children: "Coleslaw"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "coke",
										children: "Coke"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "oil",
										children: "Oil"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Qty",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
								value: w.qty,
								onChange: (e) => patch((d) => ({
									...d,
									wastage: d.wastage.map((x, j) => j === i ? {
										...x,
										qty: e.target.value
									} : x)
								}))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Cause",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: w.cause,
								onChange: (e) => patch((d) => ({
									...d,
									wastage: d.wastage.map((x, j) => j === i ? {
										...x,
										cause: e.target.value
									} : x)
								})),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Over-prep" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Spoilage" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Overcooking" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Dropped" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: "Time expired" })
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "KES",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
								value: w.kes,
								onValue: (n) => patch((d) => ({
									...d,
									wastage: d.wastage.map((x, j) => j === i ? {
										...x,
										kes: n
									} : x)
								}))
							})
						})
					]
				}, i)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 grid gap-3 sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "Covers served",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
							value: day.coversServed,
							onValue: (n) => patch({ coversServed: n })
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "OM close signature",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
							value: day.omCloseSig,
							onChange: (e) => patch({ omCloseSig: e.target.value })
						})
					})]
				})
			] })
		]
	});
}
function FmDesk({ day, patch, products, result }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-lg font-semibold",
				children: "Sales count & cash close · by 20:30"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HouseChip, { role: "fm" })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[640px] text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
					className: "text-[10px] tracking-wider text-stone uppercase",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "pb-2 text-left",
							children: "Product"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "pb-2 text-right",
							children: "Price"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "pb-2 text-right",
							children: "Sold"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "pb-2 text-right",
							children: "Revenue"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "pb-2 text-right",
							children: "Raw cost"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "pb-2 text-right",
							children: "Margin"
						})
					] })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t border-paper-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2 font-medium",
							children: p.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2 text-right tabular-nums",
							children: p.price
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
								className: "min-h-10",
								value: day.sales[p.id],
								onValue: (n) => patch({ sales: {
									...day.sales,
									[p.id]: n
								} })
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2 text-right tabular-nums text-stone",
							children: kes(result.rev[p.id])
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2 text-right tabular-nums text-stone",
							children: kes(result.cost[p.id])
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2 text-right tabular-nums font-medium",
							children: kes(result.gm[p.id])
						})
					]
				}, p.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-t-2 border-ink bg-paper-2 font-semibold",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2",
							colSpan: 3,
							children: "Total"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2 text-right tabular-nums",
							children: kes(result.totRev)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2 text-right tabular-nums",
							children: kes(result.totCost)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2 text-right tabular-nums",
							children: kes(result.totGm)
						})
					]
				})] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-3 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Cash in till",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
						value: day.till,
						onValue: (n) => patch({ till: n })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Expected cash",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						readOnly: true,
						value: kes(result.totRev)
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Cash variance",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						readOnly: true,
						value: String(Math.round(result.cashVar)),
						className: result.cashVar ? "text-danger" : ""
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 grid gap-3 sm:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Coke cases at open",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
						value: day.cokeOpen,
						onValue: (n) => patch({ cokeOpen: n })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Cases opened today",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
						value: day.cokeAdded,
						onValue: (n) => patch({ cokeAdded: n })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Cans remaining",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
						value: day.cokeRemaining,
						onValue: (n) => patch({ cokeRemaining: n })
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Can variance",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						readOnly: true,
						value: String(result.cokeVar),
						className: result.cokeVar ? "text-danger" : ""
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-3 grid gap-3 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Unplanned overhead?",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
					value: day.unplannedOh ? "yes" : "no",
					onChange: (e) => patch({ unplannedOh: e.target.value === "yes" }),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "no",
						children: "No — within plan"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
						value: "yes",
						children: "Yes — flagged to GM"
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "FM signature",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: day.fmSig,
					onChange: (e) => patch({ fmSig: e.target.value })
				})
			})]
		})
	] });
}
function GmDesk({ date, day, patch, result, floor }) {
	const sealDay = useOs((s) => s.sealDay);
	const kind = result.classify === "profit" ? "ok" : result.classify === "loss" ? "danger" : result.classify === "breakeven" ? "warn" : "idle";
	const reds = (0, import_react.useMemo)(() => {
		const list = [];
		if (result.chickenYield != null && result.chickenYield < 84) list.push(`Chicken yield ${result.chickenYield.toFixed(1)}%`);
		if (result.ricePerKg != null && result.ricePerKg < 10) list.push(`Rice ${result.ricePerKg.toFixed(1)} / kg`);
		if (result.coleslawPerHead != null && result.coleslawPerHead < 8) list.push(`Coleslaw ${result.coleslawPerHead.toFixed(1)} / head`);
		if (result.wastage > 500) list.push(`Wastage KES ${kes(result.wastage)}`);
		if (Math.abs(result.cashVar) >= 1 && result.totRev) list.push(`Cash variance ${kes(result.cashVar)}`);
		if (result.uncovered) list.push("Uncovered absence");
		if (result.classify === "loss") list.push("Floor not cleared");
		return list;
	}, [result]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-lg font-semibold",
				children: "Daily profit signal & sign-off"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HouseChip, { role: "gm" })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-xl border-2 px-6 py-8 text-center " + (kind === "ok" ? "border-ok bg-ok-soft" : kind === "danger" ? "border-danger bg-danger-soft" : kind === "warn" ? "border-warn bg-warn-soft" : "border-paper-3"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-[10px] tracking-[0.18em] text-stone uppercase",
					children: [
						"Gross margin vs floor (KES ",
						kes(Math.round(floor)),
						")"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 font-display text-5xl font-semibold tabular-nums",
					children: result.classify === "empty" ? "—" : `KES ${kes(Math.abs(result.net))}`
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Signal, {
						kind,
						children: result.classify === "profit" ? `Profit — floor cleared by KES ${kes(result.net)}` : result.classify === "loss" ? `Loss — KES ${kes(Math.abs(result.net))} short of floor` : result.classify === "breakeven" ? "Exactly break-even" : "Enter sales in the FM desk to generate the signal"
					})
				})
			]
		}),
		reds.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 rounded-lg border border-danger/30 bg-danger-soft px-4 py-3 text-sm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-medium text-danger",
				children: "Red cells that will issue edicts on seal"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-1 list-disc pl-5 text-ink",
				children: reds.map((x) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: x }, x))
			})]
		}) : null,
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-3 sm:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Day classified as",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: day.classify,
						onChange: (e) => patch({ classify: e.target.value }),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								children: "Select after review"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "profit",
								children: "Profit day"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "breakeven",
								children: "Break-even day"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "loss",
								children: "Loss day"
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Wastage directive?",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
						value: day.wdRequired ? "yes" : "no",
						onChange: (e) => patch({ wdRequired: e.target.value === "yes" }),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "no",
							children: "No"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
							value: "yes",
							children: "Yes — WD issued"
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Closing time",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						type: "time",
						value: day.closeTime,
						onChange: (e) => patch({ closeTime: e.target.value })
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
			label: "Tomorrow’s key action",
			className: "mt-3",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
				value: day.tomorrowAction,
				onChange: (e) => patch({ tomorrowAction: e.target.value }),
				placeholder: "e.g. Reduce chicken hold by 2 kg"
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-end",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "GM signature",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					value: day.gmSig,
					onChange: (e) => patch({ gmSig: e.target.value }),
					placeholder: "Full name to seal"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ink",
				disabled: !day.gmSig.trim(),
				onClick: () => sealDay(date, day.gmSig),
				children: day.sealed ? "Re-seal day" : "Seal the day"
			})]
		}),
		day.sealed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-ok",
			children: "Sealed. Edicts (if any) written to the parliament roll."
		}) : null
	] });
}
var DAYS = [
	"Mon",
	"Tue",
	"Wed",
	"Thu",
	"Fri"
];
function fmt(unit, n) {
	if (n == null) return "—";
	if (unit === "kes") return kes(Math.round(n));
	if (unit === "pct") return `${n.toFixed(1)}%`;
	return n.toFixed(n % 1 ? 1 : 0);
}
function WeeklyView() {
	const [week, setWeek] = (0, import_react.useState)(mondayOf(isoDate()));
	const [klass, setKlass] = (0, import_react.useState)("");
	const [lowest, setLowest] = (0, import_react.useState)("");
	const [assigned, setAssigned] = (0, import_react.useState)("");
	const [deadline, setDeadline] = (0, import_react.useState)("");
	const [gm, setGm] = (0, import_react.useState)("");
	const [fm, setFm] = (0, import_react.useState)("");
	const dailies = useOs((s) => s.dailies);
	const products = useOs((s) => s.products);
	const floor = dailyFloor(useOs((s) => s.overhead), useOs((s) => s.daysInMonth));
	const log = useOs((s) => s.log);
	const { dates, rows } = (0, import_react.useMemo)(() => weekRows(week, dailies, products, floor), [
		week,
		dailies,
		products,
		floor
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Civic score · Monday before 09:00" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-semibold tracking-tight",
					children: "Five days at a glance"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-[15px] leading-relaxed text-stone",
					children: "Compiled from the five sealed daily desks. A red cell is not a comment. It is an edict against the owning house. Totals are calculated — they cannot be typed."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				label: "Week commencing Monday",
				className: "w-52",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
					type: "date",
					value: week,
					onChange: (e) => setWeek(mondayOf(e.target.value || week))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto rounded-xl border border-paper-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
					className: "w-full min-w-[760px] text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "bg-ink text-[11px] tracking-wider text-cream uppercase",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "px-3 py-2.5 text-left font-semibold",
								children: "Metric"
							}),
							DAYS.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("th", {
								className: "px-2 py-2.5 text-center font-semibold",
								children: [d, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-sans text-[10px] font-normal normal-case tracking-normal text-dust",
									children: prettyDate(dates[i]).split(",")[0]
								})]
							}, d)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
								className: "bg-clay px-3 py-2.5 text-center font-semibold",
								children: "Week"
							})
						]
					}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
						className: "border-t border-paper-3 bg-cream even:bg-paper-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
								className: "px-3 py-2 font-medium",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mr-2",
									children: row.house !== "civic" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HouseChip, { role: row.house }) : null
								}), row.label]
							}),
							row.values.map((v, i) => {
								const red = cellRed(row, v);
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-2 py-2 text-center tabular-nums " + (red ? "bg-danger-soft font-semibold text-danger" : "text-ink"),
									children: fmt(row.unit, v)
								}, i);
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
								className: "bg-paper-2 px-3 py-2 text-center font-semibold tabular-nums",
								children: fmt(row.unit, row.key.includes("Y") ? row.avg : row.total)
							})
						]
					}, row.key)) })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-semibold",
					children: "GM weekly review"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-3 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Week classified as",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: klass,
								onChange: (e) => setKlass(e.target.value),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Select"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "profit",
										children: "Profitable week"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "mixed",
										children: "Mixed — action required"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "loss",
										children: "Loss week — escalation"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Lowest-yield product",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: lowest,
								onChange: (e) => setLowest(e.target.value),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Select"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "rice",
										children: "Rice — portion yield"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "chicken",
										children: "Chicken — fry yield"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "coleslaw",
										children: "Coleslaw — trim loss"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "coke",
										children: "Coke — unit variance"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Corrective action assigned",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								value: assigned,
								onChange: (e) => setAssigned(e.target.value),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "",
										children: "Select house"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "om",
										children: "OM — retrain production standard"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "fm",
										children: "FM — adjust procurement"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "pc",
										children: "PC — increase portion-control checks"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "gm",
										children: "GM — pricing review (escalation only)"
									})
								]
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 grid gap-3 sm:grid-cols-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Action deadline",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
								type: "date",
								value: deadline,
								onChange: (e) => setDeadline(e.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "GM signature",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
								value: gm,
								onChange: (e) => setGm(e.target.value)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "FM signature",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
								value: fm,
								onChange: (e) => setFm(e.target.value)
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					className: "mt-4",
					variant: "ink",
					disabled: !gm.trim(),
					onClick: () => log("gm", "Weekly civic score signed", `${week} · ${klass || "unclassified"} · ${lowest || "n/a"}`),
					children: "Sign weekly review"
				})
			] })
		]
	});
}
function DoctrineView() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Standard operating procedures" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-semibold tracking-tight",
					children: "Five core SOPs — the physical unit in every step"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-[15px] leading-relaxed text-stone",
					children: "Each SOP names the exact quantity at every step. Where a quantity is the standard, any deviation is logged immediately and brought to the OM."
				})
			] }),
			SOPS.map((sop) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "overflow-hidden rounded-xl border border-paper-3 bg-cream",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "flex flex-wrap items-center justify-between gap-2 bg-ink px-5 py-3 text-cream",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-base font-semibold",
						children: [
							sop.id,
							" · ",
							sop.title
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[11px] text-dust",
						children: sop.owner
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "divide-y divide-paper-3 px-5",
					children: sop.steps.map((st, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid grid-cols-[28px_1fr_auto] items-start gap-3 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 flex size-6 items-center justify-center rounded-full bg-clay text-[11px] font-semibold text-clay-fg",
								children: i + 1
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm leading-relaxed",
								children: st.text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 shrink-0 rounded-sm bg-paper-2 px-2 py-1 text-[10px] font-semibold text-ok",
								children: st.measure
							})
						]
					}, st.measure))
				})]
			}, sop.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-stone",
				children: "These five procedures close the loop: procure the unit, convert it through rice, chicken and coleslaw, then reconcile cash and wastage against the floor. Sales close is SOP-05. There is no sixth product and no sixth procedure."
			}) })
		]
	});
}
function InstrumentsView() {
	const po = useOs((s) => s.po);
	const wo = useOs((s) => s.wo);
	const price = useOs((s) => s.priceChange);
	const patchPo = useOs((s) => s.patchPo);
	const patchWo = useOs((s) => s.patchWo);
	const patchPrice = useOs((s) => s.patchPrice);
	const sealPrice = useOs((s) => s.sealPrice);
	const log = useOs((s) => s.log);
	const products = useOs((s) => s.products);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Approval instruments" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-semibold tracking-tight",
					children: "Three forms — every significant decision leaves a trail"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-[15px] leading-relaxed text-stone",
					children: "No financial commitment, write-off, or (vestigial) price change happens without a counter-signature. These are the paper backbone of the daily desk."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "overflow-hidden rounded-xl border border-paper-3 bg-cream",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "flex items-start justify-between gap-4 border-b-2 border-clay px-5 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-semibold",
							children: "PO-01 · Daily procurement order"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[12px] text-stone",
							children: "Initiated: FM · Approved: GM · Executed: FM on receipt"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-12 items-center justify-center rounded-full border-2 border-paper-3 bg-paper-2 font-display text-sm text-clay",
							children: "PO"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 p-5 sm:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Reference",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									value: po.ref,
									onChange: (e) => patchPo({ ref: e.target.value })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Order date",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									type: "date",
									value: po.date,
									onChange: (e) => patchPo({ date: e.target.value })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Required delivery",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									type: "date",
									value: po.delivery,
									onChange: (e) => patchPo({ delivery: e.target.value })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Supplier",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									value: po.supplier,
									onChange: (e) => patchPo({ supplier: e.target.value })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Estimated total (KES)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
									value: po.total,
									onValue: (n) => patchPo({ total: n })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Within budget?",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
									value: po.withinBudget ? "yes" : "no",
									onChange: (e) => patchPo({ withinBudget: e.target.value === "yes" }),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "yes",
										children: "Yes — within daily budget"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "no",
										children: "No — GM variance"
									})]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "FM notes",
								className: "sm:col-span-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									value: po.notes,
									onChange: (e) => patchPo({ notes: e.target.value })
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sigs, {
						a: {
							label: "Finance Manager — initiator",
							value: po.fmName,
							on: (v) => patchPo({ fmName: v })
						},
						b: {
							label: "General Manager — approval required",
							value: po.gmName,
							on: (v) => patchPo({ gmName: v })
						},
						c: {
							label: "FM — delivery received",
							value: po.recvName,
							on: (v) => patchPo({ recvName: v })
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-5 pb-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ink",
							disabled: !po.gmName.trim(),
							onClick: () => {
								patchPo({ sealed: true });
								log("gm", "PO-01 sealed", `${po.ref} · ${po.supplier} · KES ${po.total}`);
							},
							children: "Seal procurement order"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "overflow-hidden rounded-xl border border-paper-3 bg-cream",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "flex items-start justify-between gap-4 border-b-2 border-clay px-5 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-semibold",
							children: "WO-01 · Wastage write-off"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[12px] text-stone",
							children: "Required when total wastage exceeds KES 500 in any shift"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-12 items-center justify-center rounded-full border-2 border-paper-3 bg-paper-2 font-display text-sm text-clay",
							children: "WO"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 p-5 sm:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Reference",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									value: wo.ref,
									onChange: (e) => patchWo({ ref: e.target.value })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Date",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									type: "date",
									value: wo.date,
									onChange: (e) => patchWo({ date: e.target.value })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Time",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									type: "time",
									value: wo.time,
									onChange: (e) => patchWo({ time: e.target.value })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "KES value",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
									value: wo.value,
									onValue: (n) => patchWo({ value: n })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "What happened",
								className: "sm:col-span-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
									value: wo.description,
									onChange: (e) => patchWo({ description: e.target.value })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Corrective action",
								className: "sm:col-span-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
									value: wo.corrective,
									onChange: (e) => patchWo({ corrective: e.target.value })
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sigs, {
						a: {
							label: "Operations Manager — initiator",
							value: wo.omName,
							on: (v) => patchWo({ omName: v })
						},
						b: {
							label: "Finance Manager — value verified",
							value: wo.fmName,
							on: (v) => patchWo({ fmName: v })
						},
						c: {
							label: "General Manager — write-off approved",
							value: wo.gmName,
							on: (v) => patchWo({ gmName: v })
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "px-5 pb-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ink",
							disabled: !wo.gmName.trim() || !wo.omName.trim() || !wo.fmName.trim(),
							onClick: () => {
								patchWo({ sealed: true });
								log("gm", "WO-01 sealed", `${wo.ref} · KES ${wo.value}`);
							},
							children: "Seal write-off"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "relative overflow-hidden rounded-xl border border-dashed border-dust bg-cream",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute right-6 top-6 rotate-12 font-display text-2xl tracking-[0.3em] text-dust/50 uppercase",
						children: "Vestigial"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "flex items-start justify-between gap-4 border-b border-paper-3 px-5 py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-lg font-semibold",
							children: "PA-01 · Price-change authority"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 max-w-xl text-[12px] text-stone",
							children: "Price is fixed by the market. This instrument exists only to record that no house may alter a selling price without the GM’s exclusive seal — and that the GM ought not to."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-12 items-center justify-center rounded-full border-2 border-paper-3 bg-paper-2 font-display text-sm text-dust",
							children: "PA"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 p-5 sm:grid-cols-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Reference",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									value: price.ref,
									onChange: (e) => patchPrice({ ref: e.target.value })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Product",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Select, {
									value: price.product,
									onChange: (e) => {
										const id = e.target.value;
										const p = products.find((x) => x.id === id) ?? PRODUCTS[0];
										patchPrice({
											product: id,
											from: p.price,
											to: p.price
										});
									},
									children: products.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: p.id,
										children: p.name
									}, p.id))
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "From (KES)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
									value: price.from,
									onValue: (n) => patchPrice({ from: n })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "To (KES)",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NumInput, {
									value: price.to,
									onValue: (n) => patchPrice({ to: n })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "Market-floor reason",
								className: "sm:col-span-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
									value: price.reason,
									onChange: (e) => patchPrice({ reason: e.target.value })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
								label: "GM exclusive signature",
								className: "sm:col-span-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
									value: price.gmName,
									onChange: (e) => patchPrice({ gmName: e.target.value })
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "px-5 pb-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "ghost",
							disabled: !price.gmName.trim(),
							onClick: sealPrice,
							children: "Record vestigial seal (updates unit card)"
						}), price.sealed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-warn",
							children: "Sealed. The unit card now carries the new price. Treat this as an exceptional act."
						}) : null]
					})
				]
			})
		]
	});
}
function Sigs({ a, b, c }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 border-t border-paper-3 px-5 py-5 sm:grid-cols-3",
		children: [
			a,
			b,
			c
		].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-t-2 border-clay pt-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-[10px] font-semibold tracking-wider text-clay uppercase",
				children: s.label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
				className: "mt-2 border-0 border-b border-ink-3 bg-transparent px-0",
				value: s.value,
				onChange: (e) => s.on(e.target.value),
				placeholder: "Full name"
			})]
		}, s.label))
	});
}
function EdictsView() {
	const edicts = useOs((s) => s.edicts);
	const setEdict = useOs((s) => s.setEdict);
	const audit = useOs((s) => s.audit);
	const resetDemo = useOs((s) => s.resetDemo);
	const clearAll = useOs((s) => s.clearAll);
	const log = useOs((s) => s.log);
	const open = edicts.filter((e) => e.status !== "closed");
	const closed = edicts.filter((e) => e.status === "closed");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Kicker, { children: "Parliament roll · Spectrum, edict, audit" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-3xl font-semibold tracking-tight",
					children: "A red cell is an edict of a named class"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-[15px] leading-relaxed text-stone",
					children: "The weekly matrix does not persuade. It classifies. Class I is yield (OM). Class II is ledger (FM). Class III is presence (PC). Class IV is the floor (GM). Class V is recurrence — the civic week repeating a failure."
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 md:grid-cols-5",
				children: Object.entries(EDICT_CLASSES).map(([k, v]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-[11px] text-clay",
							children: ["Class ", k]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-1 font-display text-base font-semibold",
							children: v.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-[12px] text-stone",
							children: v.house
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-[12px] leading-relaxed text-stone",
							children: v.trigger
						})
					]
				}, k))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 font-display text-xl font-semibold",
				children: "Open edicts"
			}), open.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-stone",
				children: "None open. Seal a day with a red cell to issue one."
			}) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-3",
				children: open.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-xl border border-paper-3 bg-cream p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "font-mono text-[11px] text-clay",
										children: ["Class ", e.class]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HouseChip, { role: e.house }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[12px] text-stone",
										children: prettyDate(e.date)
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
								className: "w-40 min-h-10",
								value: e.status,
								onChange: (ev) => setEdict(e.id, { status: ev.target.value }),
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "open",
										children: "Open"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "directed",
										children: "Directed"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "closed",
										children: "Closed"
									})
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-lg font-semibold",
							children: e.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-stone",
							children: [
								e.metric,
								": ",
								e.actual,
								" · standard ",
								e.standard
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Directive to the owning house",
							className: "mt-3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
								value: e.directive,
								onChange: (ev) => setEdict(e.id, { directive: ev.target.value }),
								placeholder: "What the house will change before the next shift"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-3 min-h-10",
							variant: "paper",
							onClick: () => {
								setEdict(e.id, { status: "directed" });
								log("gm", "Edict directed", `${e.class} · ${e.title}`);
							},
							children: "Direct the house"
						})
					]
				}, e.id))
			})] }),
			closed.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 font-display text-lg font-semibold",
				children: "Closed"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "space-y-2 text-sm text-stone",
				children: closed.map((e) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
					"Class ",
					e.class,
					" · ",
					e.title,
					" · ",
					prettyDate(e.date)
				] }, e.id))
			})] }) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mb-3 font-display text-xl font-semibold",
				children: "Audit trail"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-hidden rounded-xl border border-paper-3",
				children: audit.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "p-4 text-sm text-stone",
					children: "Empty."
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "divide-y divide-paper-3 bg-cream",
					children: audit.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "grid gap-1 px-4 py-3 text-sm md:grid-cols-[160px_80px_1fr]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-[11px] text-stone",
								children: new Date(a.ts).toLocaleString("en-KE", { hour12: false })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-semibold tracking-wider text-clay uppercase",
								children: a.actor
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-ink",
								children: a.action
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-stone",
								children: [" — ", a.detail]
							})] })
						]
					}, a.id))
				})
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-semibold",
					children: "Ledger controls"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-stone",
					children: "This OS stores itself in the browser. Download HTML for a portable copy that works without a network."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "paper",
						onClick: resetDemo,
						children: "Restore demo week"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						onClick: clearAll,
						children: "Clear all records"
					})]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
				className: "rounded-xl border border-paper-3 bg-cream p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("summary", {
					className: "cursor-pointer font-display text-base font-semibold",
					children: "Rights matrix (reference)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "w-full min-w-[640px] text-left text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "text-[11px] tracking-wider text-stone uppercase",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "py-2",
									children: "Act"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "PC" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "OM" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "FM" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { children: "GM" })
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: RIGHTS.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-t border-paper-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 font-medium",
									children: r.action
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "text-stone",
									children: r.pc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "text-stone",
									children: r.om
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "text-stone",
									children: r.fm
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "text-stone",
									children: r.gm
								})
							]
						}, r.action)) })]
					})
				})]
			})
		]
	});
}
function esc(s) {
	const map = {
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"\"": "&quot;",
		"'": "&#39;"
	};
	return s.replace(/[&<>"']/g, (c) => map[c] ?? c);
}
function downloadStandalone(state) {
	const html = renderStandalone(state);
	const blob = new Blob([html], { type: "text/html;charset=utf-8" });
	const a = document.createElement("a");
	a.href = URL.createObjectURL(blob);
	a.download = "Guardian_Parliament_4P_OS.html";
	a.click();
	URL.revokeObjectURL(a.href);
}
function renderStandalone(state) {
	const floor = dailyFloor(state.overhead, state.daysInMonth);
	const gmCover = coverMargin(state.products);
	const today = isoDate();
	const { dates, rows } = weekRows(mondayOf(today), state.dailies, state.products, floor);
	const day = state.dailies[today];
	const result = day ? evaluateDay(day, state.products, floor) : null;
	const unitCards = state.products.map((p) => {
		const m = p.price - p.rawCost;
		return `<div class="pstrip-item">
        <div class="pstrip-name">${esc(p.name)}</div>
        <div class="pstrip-price">KES ${kes(p.price)}</div>
        <div class="pstrip-cost">Raw mat. KES ${kes(p.rawCost)} · ${esc(p.stdPortion)}</div>
        <div class="pstrip-margin">Gross margin KES ${kes(m)}</div>
        <div class="pstrip-cost">${esc(p.purchaseUnit)} · ${esc(p.portionsPerUnit)}</div>
        <div class="pstrip-cost">Owner: ${p.owner.toUpperCase()} · target ${p.yieldTarget} ${esc(p.yieldLabel)}</div>
      </div>`;
	}).join("");
	const ohRows = state.overhead.map((l) => `<div class="overhead-row">
        <div>${esc(l.label)}</div>
        <div class="oh-day">${kes(l.monthly)}</div>
        <div class="oh-day">${kes(l.monthly / state.daysInMonth)}</div>
        <div class="oh-note">${esc(l.basis)}</div>
      </div>`).join("");
	const spectrum = SPECTRUM.map((s) => `<div class="card">
      <div class="pg-label">${s.n} · ${esc(s.house)}</div>
      <div class="sub-head">${esc(s.name)}</div>
      <p class="pg-desc" style="margin:0">${esc(s.body)}</p>
      <div class="pstrip-margin">${esc(s.measure)}</div>
    </div>`).join("");
	const jds = ROLES$1.map((r) => {
		const duties = JDS[r.id].map((d) => `<div class="duty-row"><div class="duty-text">${esc(d.text)}</div><div class="duty-metric">${esc(d.metric)}</div><div class="duty-cadence">${esc(d.cadence)}</div></div>`).join("");
		return `<div class="jd-card" style="--jd-color:var(--accent)"><div class="jd-head"><div><div class="jd-title">${esc(r.title)}</div><div class="jd-sub">${esc(r.house)} · ${esc(r.stage)}</div></div><span class="badge">${r.id.toUpperCase()}</span></div><div class="jd-body">${duties}</div></div>`;
	}).join("");
	const rights = RIGHTS.map((row) => `<tr><td>${esc(row.action)}</td><td>${esc(row.pc)}</td><td>${esc(row.om)}</td><td>${esc(row.fm)}</td><td>${esc(row.gm)}</td></tr>`).join("");
	const sops = SOPS.map((sop) => {
		const steps = sop.steps.map((st, i) => `<div class="sop-step"><div class="sop-num">${i + 1}</div><div class="sop-text">${esc(st.text)}</div><div class="sop-measure">${esc(st.measure)}</div></div>`).join("");
		return `<div class="sop-card"><div class="sop-head">${esc(sop.id)} · ${esc(sop.title)} <span>${esc(sop.owner)}</span></div><div class="sop-body">${steps}</div></div>`;
	}).join("");
	const edictClass = Object.entries(EDICT_CLASSES).map(([k, v]) => `<div class="card"><div class="pg-label">Class ${k}</div><div class="sub-head">${esc(v.name)}</div><p class="pg-desc" style="margin:0">${esc(v.house)}. ${esc(v.trigger)}</p></div>`).join("");
	const edicts = state.edicts.map((e) => `<tr><td>Class ${e.class}</td><td>${e.house.toUpperCase()}</td><td>${esc(e.date)}</td><td>${esc(e.title)}</td><td>${esc(e.actual)}</td><td>${esc(e.standard)}</td><td>${e.status}</td></tr>`).join("");
	const weekHead = [
		"Metric",
		"Mon",
		"Tue",
		"Wed",
		"Thu",
		"Fri",
		"Week"
	].map((h) => `<th>${h}</th>`).join("");
	const weekBody = rows.map((row) => {
		const cells = row.values.map((v) => {
			return `<td>${v == null ? "—" : row.unit === "kes" ? kes(Math.round(v)) : row.unit === "pct" ? v.toFixed(1) + "%" : String(Math.round(v * 10) / 10)}</td>`;
		}).join("");
		const tot = row.key.includes("Y") ? row.avg : row.total;
		const totS = tot == null ? "—" : row.unit === "kes" ? kes(Math.round(tot)) : String(Math.round(tot * 10) / 10);
		return `<tr><td>${esc(row.label)}</td>${cells}<td>${totS}</td></tr>`;
	}).join("");
	const parRows = Object.keys(PAR).map((k) => {
		const on = day?.stock[k] ?? "";
		return `<tr><td>${esc(PAR[k].label)}</td><td>${PAR[k].unit}</td><td>${PAR[k].par}</td><td><input class="cl-input" type="number" value="${on}"></td><td><input class="cl-check" type="checkbox"></td></tr>`;
	}).join("");
	const salesRows = state.products.map((p) => {
		const sold = day?.sales[p.id] ?? 0;
		return `<tr><td>${esc(p.name)}</td><td>${p.price}</td><td><input class="cl-input sold" data-id="${p.id}" data-price="${p.price}" data-cost="${p.rawCost}" type="number" value="${sold}"></td><td class="rev">—</td><td>${p.rawCost}</td><td class="cost">—</td><td class="gm">—</td></tr>`;
	}).join("");
	const payload = JSON.stringify({
		venue: state.venue,
		products: state.products,
		overhead: state.overhead,
		daysInMonth: state.daysInMonth,
		floor
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
    <div class="card" style="text-align:center"><div class="pg-label">Target +15%</div><div class="ps-value" style="font-size:36px;color:var(--accent)">${gmCover ? Math.ceil(floor * 1.15 / gmCover) : "—"}</div></div>
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
  <table class="uom-table"><thead><tr><th>Class</th><th>House</th><th>Date</th><th>Title</th><th>Actual</th><th>Standard</th><th>Status</th></tr></thead><tbody>${edicts || "<tr><td colspan=\"7\">None open at download.</td></tr>"}</tbody></table>
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
<\/script>
</body></html>`;
}
function Home() {
	const [view, setView] = (0, import_react.useState)("loop");
	const hydrated = useOs((s) => s.hydrated);
	(0, import_react.useEffect)(() => {
		hydrateOs();
	}, []);
	const onDownload = () => {
		downloadStandalone(useOs.getState());
	};
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-paper text-stone",
		children: "Opening the ledger…"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
		view,
		onView: setView,
		onDownload,
		children: [
			view === "loop" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoopView, { onView: setView }),
			view === "units" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UnitsView, {}),
			view === "houses" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HousesView, {}),
			view === "daily" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DailyView, {}),
			view === "weekly" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WeeklyView, {}),
			view === "doctrine" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DoctrineView, {}),
			view === "instruments" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InstrumentsView, {}),
			view === "edicts" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EdictsView, {})
		]
	});
}
//#endregion
export { Home as component };
