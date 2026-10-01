import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden
      className={cn(
        "size-7 transition-transform duration-300 ease-out motion-safe:group-hover:scale-105",
        className,
      )}
    >
      <rect x="4" y="6" width="40" height="36" rx="8" fill="var(--color-tertiary)" opacity="0.12" />
      <rect x="4" y="6" width="40" height="36" rx="8" fill="none" stroke="var(--color-tertiary)" strokeWidth="1.5" />
      
      <g strokeWidth="2.2" strokeLinecap="round" fill="none">
        <path d="M11 35L18 22L26 28L37 11" stroke="var(--color-mark)" />
      </g>
      
      <g fill="var(--color-tertiary)">
        <circle cx="11" cy="35" r="2.5" />
        <circle cx="18" cy="22" r="2.5" />
        <circle cx="26" cy="28" r="2.5" />
        <circle cx="37" cy="11" r="2.5" />
      </g>
      
      <path d="M9 38H39" stroke="var(--color-primary)" strokeWidth="1.8" strokeLinecap="round" opacity="0.35" />
    </svg>
  );
}
