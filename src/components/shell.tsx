import { Download, Landmark, Menu, Printer, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/primitives";
import { VIEWS, type ViewId } from "@/lib/os/nav";
import { cn } from "@/lib/utils";

export function Shell({
  view,
  onView,
  onDownload,
  children,
}: {
  view: ViewId;
  onView: (v: ViewId) => void;
  onDownload: () => void;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-dvh bg-paper text-ink">
      <header className="no-print sticky top-0 z-40 border-b-2 border-clay bg-ink text-cream">
        <div className="mx-auto flex max-w-[1180px] items-stretch gap-2 px-3 sm:px-5">
          <div className="flex items-center gap-2.5 border-r border-ink-3 py-3 pr-4">
            <Landmark className="size-4 text-clay" strokeWidth={1.75} />
            <div className="leading-tight">
              <div className="font-display text-[13px] font-semibold tracking-wide">
                Guardian <span className="text-clay">Parliament</span>
              </div>
              <div className="hidden text-[10px] tracking-wider text-dust uppercase sm:block">
                4P Closed Loop
              </div>
            </div>
          </div>
          <nav className="hidden min-w-0 flex-1 items-stretch overflow-x-auto md:flex">
            {VIEWS.map((v) => (
              <button
                key={v.id}
                onClick={() => onView(v.id)}
                className={cn(
                  "shrink-0 border-b-2 px-3 text-[12px] tracking-wide transition-colors duration-150",
                  view === v.id
                    ? "border-clay text-cream"
                    : "border-transparent text-dust hover:text-cream",
                )}
              >
                {v.label}
              </button>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-1.5 py-2">
            <Button variant="ghost" className="hidden min-h-9 border-ink-3 text-cream hover:bg-ink-2 sm:inline-flex" onClick={() => window.print()}>
              <Printer className="size-3.5" />
              Print
            </Button>
            <Button className="min-h-9 px-3" onClick={onDownload}>
              <Download className="size-3.5" />
              <span className="hidden sm:inline">Download HTML</span>
              <span className="sm:hidden">HTML</span>
            </Button>
            <button
              className="inline-flex size-11 items-center justify-center rounded-md text-cream md:hidden"
              onClick={() => setOpen((o) => !o)}
              aria-label="Menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {open ? (
          <div className="grid grid-cols-2 gap-1 border-t border-ink-3 p-3 md:hidden">
            {VIEWS.map((v) => (
              <button
                key={v.id}
                onClick={() => {
                  onView(v.id);
                  setOpen(false);
                }}
                className={cn(
                  "min-h-11 rounded-md px-3 text-left text-sm",
                  view === v.id ? "bg-clay text-clay-fg" : "text-cream hover:bg-ink-2",
                )}
              >
                {v.label}
              </button>
            ))}
          </div>
        ) : null}
      </header>
      <main className="mx-auto max-w-[1180px] px-4 py-8 pb-24 sm:px-6 sm:py-10">{children}</main>
    </div>
  );
}
