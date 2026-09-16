import type { ViewId } from "./types";

export type { ViewId };

export const VIEWS: { id: ViewId; label: string }[] = [
  { id: "loop", label: "The Loop" },
  { id: "units", label: "Units" },
  { id: "houses", label: "Houses" },
  { id: "daily", label: "Daily" },
  { id: "weekly", label: "Weekly" },
  { id: "doctrine", label: "SOPs" },
  { id: "instruments", label: "Instruments" },
  { id: "edicts", label: "Edicts" },
];
