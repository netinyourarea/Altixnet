import { createFileRoute } from "@tanstack/react-router";
import { Film, Smartphone, Tv2 } from "lucide-react";

import streamingImg from "@/assets/streaming.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/motion";
import { CTALink, Disclaimer, Eyebrow, Section } from "@/components/site/primitives";

export const Route = createFileRoute("/streaming")({
  head: () => ({
    meta: [
      { title: "Streaming — Altix Net" },
      {
        name: "description",
        content:
          "Work out which streaming apps, devices and internet speeds fit the way your household actually watches.",
      },
      { property: "og:title", content: "Streaming — Altix Net" },
      { property: "og:url", content: "/streaming" },
    ],
    links: [{ rel: "canonical", href: "/streaming" }],
  }),
  component: StreamingPage,
});

const guidance = [
  {
    icon: Tv2,
    title: "Devices",
    copy: "Smart TVs, streaming sticks and consoles all handle apps differently — we help you pick what fits your setup.",
  },
  {
    icon: Film,
    title: "Services",
    copy: "From live-TV bundles to on-demand libraries, we compare what each service actually offers before you subscribe.",
  },
  {
    icon: Smartphone,
    title: "Multi-device streaming",
    copy: "Households with several simultaneous streams need enough upload and download headroom — we help you size it right.",
  },
];

function StreamingPage() {
  return (
    <>
      <PageHero
        eyebrow="Streaming"
        title="Picking apps and devices without the guesswork."
        lead="Streaming looks simple until you're choosing between a dozen services and three device ecosystems. We help you match the right combination to how your household actually watches."
        image={streamingImg}
        alt="Streaming interface glowing on a screen in a dark room"
      >
        <CTALink to="/contact">Get streaming guidance</CTALink>
      </PageHero>

      <Section>
        <Reveal>
          <Eyebrow>Where to start</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-display text-4xl leading-tight font-extrabold sm:text-5xl">
            Devices, services, and the bandwidth behind them.
          </h2>
        </Reveal>
        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {guidance.map((g, i) => (
            <Reveal as="li" key={g.title} delay={i * 90}>
              <div className="h-full rounded-3xl border border-border bg-card p-8">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-accent-foreground">
                  <g.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-7 font-display text-2xl font-bold">{g.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{g.copy}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section>
        <Reveal>
          <Disclaimer />
        </Reveal>
      </Section>
    </>
  );
}
