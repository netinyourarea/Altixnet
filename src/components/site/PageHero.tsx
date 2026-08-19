import type { ReactNode } from "react";
import { Eyebrow } from "./primitives";
import { Reveal } from "./motion";

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  alt,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead: string;
  image: string;
  alt: string;
  children?: ReactNode;
}) {
  return (
    <section className="surface-ink relative overflow-hidden px-5 pt-32 pb-20 sm:px-8 md:pt-40 md:pb-28">
      <img
        src={image}
        alt={alt}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25"
        loading="eager"
      />
      <div className="absolute inset-0 bg-[radial-gradient(90%_70%_at_15%_10%,transparent,oklch(0.14_0.05_300/0.85))]" />
      <div className="relative mx-auto w-full max-w-7xl">
        <Reveal>
          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-7 max-w-4xl font-display text-4xl leading-[1.02] font-extrabold sm:text-6xl md:text-7xl">
            {title}
          </h1>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-foreground/75 sm:text-lg">
            {lead}
          </p>
        </Reveal>
        {children && (
          <Reveal delay={260}>
            <div className="mt-10">{children}</div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
