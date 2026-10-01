import { cn } from "@/lib/cn";

export function Wordmark({ inverted = false, compact = false }: { inverted?: boolean; compact?: boolean }) {
  return (
    <span className="min-w-0">
      <span className="block font-display text-lg leading-none font-semibold tracking-tight">V.R.M</span>
      <span
        className={cn(
          "mt-1 block text-xs leading-snug text-pretty",
          inverted ? "text-on-primary/70" : "text-secondary",
          compact && "hidden sm:block",
        )}
      >
        Visual Regression Models
      </span>
    </span>
  );
}
