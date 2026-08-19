import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Disclaimer } from "./primitives";
import { LogoMark } from "./Logo";

export function Footer() {
  return (
    <footer className="surface-ink mt-0 px-5 pt-20 pb-10 sm:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <LogoMark />
              <span className="font-display text-lg font-extrabold">Altix Net</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-foreground/70">
              An independent platform that helps households explore, compare and understand cable,
              internet, TV and streaming options available at their address.
            </p>
          </div>

          <nav aria-label="Services" className="min-w-0">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-ink-foreground/60">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { to: "/internet", label: "Internet Services" },
                { to: "/cable-tv", label: "Cable & TV" },
                { to: "/streaming", label: "Streaming" },
                { to: "/wifi", label: "Wi-Fi & Connectivity" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-ink-foreground/80 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company" className="min-w-0">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-ink-foreground/60">
              Company
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { to: "/about", label: "About Us" },
                { to: "/faq", label: "FAQ" },
                { to: "/contact", label: "Contact" },
                { to: "/privacy", label: "Privacy Policy" },
                { to: "/terms", label: "Terms & Conditions" },
                { to: "/refund", label: "Refund Policy" },
              ].map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-ink-foreground/80 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0">
            <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-ink-foreground/60">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-ink-foreground/80">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <a href="tel:+18005550142" className="hover:text-white">
                  +1 (800) 555-0142
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <a href="mailto:support@altixnet.example" className="break-all hover:text-white">
                  support@altixnet.example
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>1200 Fiber Avenue, Suite 340, Austin, TX 78701</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14">
          <Disclaimer tone="dark" />
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-ink-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Altix Net. Independent assistance platform.</p>
          <p>Not an ISP. Not affiliated with any provider.</p>
        </div>
      </div>
    </footer>
  );
}
