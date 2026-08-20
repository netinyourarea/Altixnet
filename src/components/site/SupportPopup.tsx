import { useEffect, useState } from "react";
import { PhoneCall, X } from "lucide-react";

const PHONE_DISPLAY = "(888) 478-8140";
const PHONE_HREF = "tel:+18884788140";

export function SupportPopup() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 p-4 sm:items-center">
      <div className="relative w-full max-w-sm rounded-3xl border border-border bg-card p-8 text-center shadow-[var(--shadow-soft)]">
        <button
          type="button"
          aria-label="Close"
          onClick={() => setVisible(false)}
          className="absolute top-4 right-4 grid h-8 w-8 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-accent text-accent-foreground">
          <PhoneCall className="h-5 w-5" />
        </div>

        <h2 className="mt-5 font-display text-2xl leading-tight font-extrabold">
          Internet or Cable Not Working?
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Get instant help for slow internet, outages, setup issues, or cable problems.
        </p>

        <a
          href={PHONE_HREF}
          className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-violet"
        >
          CALL SUPPORT NOW
        </a>
        <a
          href={PHONE_HREF}
          className="mt-3 block text-sm font-semibold text-primary hover:underline"
        >
          {PHONE_DISPLAY}
        </a>

        <p className="mt-4 text-xs tracking-wide text-muted-foreground uppercase">
          Quick assistance • No forms • Talk to a real agent
        </p>
      </div>
    </div>
  );
}
