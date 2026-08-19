import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      role="img"
      aria-label="Altix Net"
      className={cn("h-10 w-10 shrink-0 rounded-2xl bg-[image:var(--gradient-brand)]", className)}
    >
      <path
        d="M32 11 L49 53 M32 11 L15 53 M21.5 38 H42.5"
        fill="none"
        stroke="currentColor"
        strokeWidth={6.7}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-violet-foreground"
      />
    </svg>
  );
}
