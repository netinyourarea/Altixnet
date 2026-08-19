import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold tracking-[0.2em] uppercase",
        tone === "light" ? "bg-accent text-accent-foreground" : "glass text-ink-foreground",
      )}
    >
      {children}
    </span>
  );
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn("px-5 py-20 sm:px-8 md:py-28", className)}>
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}

export function CTALink({
  to,
  children,
  variant = "solid",
  className,
}: {
  to: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost-dark";
  className?: string;
}) {
  const base =
    "inline-flex min-h-11 items-center justify-center rounded-full px-7 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none";
  const styles = {
    solid:
      "bg-primary text-primary-foreground shadow-[var(--shadow-soft)] hover:-translate-y-0.5 hover:bg-violet",
    outline:
      "border border-primary/30 bg-transparent text-primary hover:-translate-y-0.5 hover:bg-accent",
    "ghost-dark": "glass text-ink-foreground hover:-translate-y-0.5",
  } as const;

  return (
    <Link to={to} className={cn(base, styles[variant], className)}>
      {children}
    </Link>
  );
}

export function Disclaimer({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <p
      className={cn(
        "rounded-2xl border p-5 text-xs leading-relaxed",
        tone === "light"
          ? "border-border bg-muted text-muted-foreground"
          : "border-white/15 bg-white/5 text-ink-foreground/70",
      )}
    >
      <strong className="font-semibold">Third-party disclaimer:</strong> Altix Net is an independent
      information and assistance platform. We are not an internet, cable, or streaming service
      provider, we are not affiliated with, authorized by, or endorsed by any provider, and we do
      not own or operate any network infrastructure. Service names and trademarks belong to their
      respective owners. Availability, pricing, and features are set by the providers themselves and
      may change at any time.
    </p>
  );
}
