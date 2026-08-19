import { createFileRoute } from "@tanstack/react-router";
import { Gauge, Router as RouterIcon, Wifi, Zap } from "lucide-react";

import fiberImg from "@/assets/fiber.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/motion";
import { CTALink, Disclaimer, Eyebrow, Section } from "@/components/site/primitives";

export const Route = createFileRoute("/internet")({
  head: () => ({
    meta: [
      { title: "Internet Services — Altix Net" },
      {
        name: "description",
        content:
          "Compare fiber, cable and fixed-wireless internet options and understand what speed your household actually needs.",
      },
      { property: "og:title", content: "Internet Services — Altix Net" },
      { property: "og:url", content: "/internet" },
    ],
    links: [{ rel: "canonical", href: "/internet" }],
  }),
  component: InternetPage,
});

const types = [
  {
    icon: Zap,
    title: "Fiber",
    copy: "Symmetric upload and download speeds, the most consistent option where it's available.",
  },
  {
    icon: RouterIcon,
    title: "Cable",
    copy: "Wide availability with strong download speeds; uploads are typically slower than fiber.",
  },
  {
    icon: Wifi,
    title: "Fixed wireless",
    copy: "A practical option in areas without wired infrastructure, using a rooftop or window receiver.",
  },
];

const speedGuide = [
  { need: "Browsing & email", mbps: "25–100 Mbps" },
  { need: "HD streaming, 1–2 devices", mbps: "100–200 Mbps" },
  { need: "4K streaming & remote work", mbps: "300–500 Mbps" },
  { need: "Large households, gaming, smart home", mbps: "500–1000+ Mbps" },
];

function InternetPage() {
  return (
    <>
      <PageHero
        eyebrow="Internet services"
        title="Fiber, cable or fixed wireless — matched to your address."
        lead="Every neighborhood has different infrastructure. We help you understand what's actually available where you live and how each technology behaves in practice."
        image={fiberImg}
        alt="Glowing violet fiber optic strands"
      >
        <CTALink to="/contact">Check what's available</CTALink>
      </PageHero>

      <Section>
        <Reveal>
          <Eyebrow>Connection types</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-display text-4xl leading-tight font-extrabold sm:text-5xl">
            The trade-offs, explained plainly.
          </h2>
        </Reveal>
        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {types.map((t, i) => (
            <Reveal as="li" key={t.title} delay={i * 90}>
              <div className="h-full rounded-3xl border border-border bg-card p-8">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-accent-foreground">
                  <t.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-7 font-display text-2xl font-bold">{t.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.copy}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section className="bg-muted">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>Speed guide</Eyebrow>
            <h2 className="mt-6 font-display text-4xl leading-tight font-extrabold sm:text-5xl">
              How much do you actually need?
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              These are educational ranges to frame the conversation, not a quote from any specific
              provider.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="overflow-hidden rounded-3xl border border-border bg-card">
              {speedGuide.map((row, i) => (
                <div
                  key={row.need}
                  className={`flex items-center justify-between gap-4 px-7 py-5 text-sm ${
                    i !== speedGuide.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <span className="font-medium">{row.need}</span>
                  <span className="flex items-center gap-2 font-semibold text-primary">
                    <Gauge className="h-4 w-4" /> {row.mbps}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <Disclaimer />
        </Reveal>
      </Section>
    </>
  );
}
