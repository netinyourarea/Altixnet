import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { LogoMark } from "./Logo";

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/internet", label: "Internet" },
  { to: "/cable-tv", label: "Cable & TV" },
  { to: "/streaming", label: "Streaming" },
  { to: "/wifi", label: "Wi-Fi" },
  { to: "/about", label: "About" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "glass-light text-foreground shadow-[0_10px_40px_-30px_rgba(60,0,120,0.6)]"
          : "bg-transparent text-white",
      )}
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <LogoMark />
          <span className="truncate font-display text-lg font-extrabold tracking-tight">
            Altix Net
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.slice(1, 8).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "rounded-full px-3.5 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                scrolled ? "text-muted-foreground" : "text-white/85",
              )}
              activeProps={{ className: "bg-accent text-accent-foreground" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-2 inline-flex min-h-10 items-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-violet"
          >
            Check Availability
          </Link>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "grid h-11 w-11 shrink-0 place-items-center rounded-full border lg:hidden",
            scrolled
              ? "border-border bg-card text-foreground"
              : "border-white/30 bg-white/10 text-white",
          )}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="glass-light border-t border-border px-5 pb-6 text-foreground lg:hidden">
          <nav className="flex flex-col">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="min-h-11 border-b border-border/60 py-3 text-base font-medium"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground"
            >
              Check Availability
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
