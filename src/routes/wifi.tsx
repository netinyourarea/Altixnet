import { createFileRoute } from "@tanstack/react-router";
import { Home, Router as RouterIcon, Signal } from "lucide-react";

import wifiImg from "@/assets/wifi.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/motion";
import { CTALink, Disclaimer, Eyebrow, Section } from "@/components/site/primitives";

export const Route = createFileRoute("/wifi")({
  head: () => ({
    meta: [
      { title: "Wi-Fi & Connectivity — Altix Net" },
      {
        name: "description",
        content:
          "Coverage, mesh layouts and router placement guidance for homes of every shape, from real assistance — not a sales script.",
      },
      { property: "og:title", content: "Wi-Fi & Connectivity — Altix Net" },
      { property: "og:url", content: "/wifi" },
    ],
    links: [{ rel: "canonical", href: "/wifi" }],
  }),
  component: WifiPage,
});

const topics = [
  {
    icon: Home,
    title: "Whole-home coverage",
    copy: "Dead zones usually come down to router placement and building materials, not your internet plan.",
  },
  {
    icon: RouterIcon,
    title: "Mesh systems",
    copy: "For larger or multi-story homes, a mesh setup often solves what a single router can't.",
  },
  {
    icon: Signal,
    title: "Device load",
    copy: "Smart home devices, laptops and phones all compete for bandwidth — we help you plan for the real number.",
  },
];

function WifiPage() {
  return (
    <>
      <PageHero
        eyebrow="Wi-Fi & connectivity"
        title="A network that stays calm, even with dozens of devices."
        lead="Slow Wi-Fi is rarely a speed problem. We walk through router placement, mesh layouts and device load so your home network actually keeps up."
        image={wifiImg}
        alt="Wireless signal visualized through a home floor plan"
      >
        <CTALink to="/contact">Get a Wi-Fi walkthrough</CTALink>
      </PageHero>

      <Section>
        <Reveal>
          <Eyebrow>Common fixes</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-display text-4xl leading-tight font-extrabold sm:text-5xl">
            Most dead spots have a simple cause.
          </h2>
        </Reveal>
        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {topics.map((t, i) => (
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

      <Section>
        <Reveal>
          <Disclaimer />
        </Reveal>
      </Section>
    </>
  );
}
