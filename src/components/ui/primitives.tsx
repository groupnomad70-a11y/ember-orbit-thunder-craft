import { cn } from "@/lib/utils";
import type { RoleId } from "@/lib/os/types";

export function Button({
  children,
  className,
  variant = "primary",
  type = "button",
  ...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost" | "ink" | "danger" | "paper";
}) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium tracking-wide transition-colors duration-150 ease-out disabled:opacity-50",
        variant === "primary" && "bg-clay text-clay-fg hover:bg-clay/90",
        variant === "ink" && "bg-ink text-cream hover:bg-ink-2",
        variant === "ghost" && "border border-paper-3 bg-transparent text-ink hover:bg-paper-2",
        variant === "paper" && "border border-paper-3 bg-cream text-ink hover:bg-paper-2",
        variant === "danger" && "bg-danger text-cream hover:bg-danger/90",
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

export function Field({
  label,
  hint,
  children,
  className,
}: {
  label: string;
  hint?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("flex min-w-0 flex-col gap-1.5", className)}>
      <span className="text-[10px] font-semibold tracking-[0.14em] text-stone uppercase">
        {label}
      </span>
      {children}
      {hint ? <span className="text-[11px] text-stone">{hint}</span> : null}
    </label>
  );
}

const inputClass =
  "min-h-11 w-full rounded-md border border-paper-3 bg-white px-3 text-sm text-ink outline-none transition-[border-color] duration-150 focus:border-clay disabled:bg-paper-2 disabled:text-stone";

export function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} className={cn(inputClass, props.className)} />;
}

export function NumInput({
  value,
  onValue,
  step = "any",
  className,
  ...rest
}: Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "type"> & {
  value: number;
  onValue: (n: number) => void;
}) {
  return (
    <input
      type="number"
      step={step}
      value={Number.isFinite(value) ? value : 0}
      onChange={(e) => onValue(e.target.value === "" ? 0 : Number(e.target.value))}
      className={cn(inputClass, "text-right tabular-nums", className)}
      {...rest}
    />
  );
}

export function Select({
  className,
  children,
  ...rest
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select {...rest} className={cn(inputClass, className)}>
      {children}
    </select>
  );
}

export function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      {...props}
      className={cn(inputClass, "min-h-24 py-2", props.className)}
    />
  );
}

export function Panel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("rounded-xl border border-paper-3 bg-cream p-5 md:p-6", className)}>
      {children}
    </section>
  );
}

export function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-2 font-sans text-[10px] font-semibold tracking-[0.22em] text-clay uppercase">
      {children}
    </p>
  );
}

export function HouseChip({ role }: { role: RoleId }) {
  const map: Record<RoleId, string> = {
    gm: "bg-house-gm/12 text-house-gm",
    fm: "bg-house-fm/12 text-house-fm",
    om: "bg-house-om/12 text-house-om",
    pc: "bg-house-pc/12 text-house-pc",
  };
  const label: Record<RoleId, string> = { gm: "GM", fm: "FM", om: "OM", pc: "PC" };
  return (
    <span className={cn("inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wider", map[role])}>
      {label[role]}
    </span>
  );
}

export function Signal({
  kind,
  children,
}: {
  kind: "ok" | "warn" | "danger" | "idle";
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-sm font-medium",
        kind === "ok" && "text-ok",
        kind === "warn" && "text-warn",
        kind === "danger" && "text-danger",
        kind === "idle" && "text-stone",
      )}
    >
      <span
        className={cn(
          "size-1.5 rounded-full",
          kind === "ok" && "bg-ok",
          kind === "warn" && "bg-warn",
          kind === "danger" && "bg-danger",
          kind === "idle" && "bg-dust",
        )}
      />
      {children}
    </span>
  );
}
