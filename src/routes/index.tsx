import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Shell } from "@/components/shell";
import { LoopView } from "@/components/views/loop";
import { UnitsView } from "@/components/views/units";
import { HousesView } from "@/components/views/houses";
import { DailyView } from "@/components/views/daily";
import { WeeklyView } from "@/components/views/weekly";
import { DoctrineView } from "@/components/views/doctrine";
import { InstrumentsView } from "@/components/views/instruments";
import { EdictsView } from "@/components/views/edicts";
import { downloadStandalone } from "@/lib/os/exportHtml";
import { hydrateOs, useOs } from "@/lib/os/store";
import type { ViewId } from "@/lib/os/types";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [view, setView] = useState<ViewId>("loop");

  useEffect(() => {
    hydrateOs();
  }, []);

  const onDownload = () => {
    downloadStandalone(useOs.getState());
  };

  return (
    <Shell view={view} onView={setView} onDownload={onDownload}>
      {view === "loop" && <LoopView onView={setView} />}
      {view === "units" && <UnitsView />}
      {view === "houses" && <HousesView />}
      {view === "daily" && <DailyView />}
      {view === "weekly" && <WeeklyView />}
      {view === "doctrine" && <DoctrineView />}
      {view === "instruments" && <InstrumentsView />}
      {view === "edicts" && <EdictsView />}
    </Shell>
  );
}
