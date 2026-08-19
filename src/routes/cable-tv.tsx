import { createFileRoute } from "@tanstack/react-router";
import { Clapperboard, Layers, Tv } from "lucide-react";

import cableImg from "@/assets/cable.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/motion";
import { CTALink, Disclaimer, Eyebrow, Section } from "@/components/site/primitives";

export const Route = createFileRoute("/cable-tv")({
  head: () => ({
    meta: [
      { title: "Cable & TV — Altix Net" },
      {
        name: "description",
        content:
          "Compare channel line-ups, equipment requirements and bundle structures for cable TV providers side by side.",
      },
      { property: "og:title", content: "Cable & TV — Altix Net" },
      { property: "og:url", content: "/cable-tv" },
    ],
    links: [{ rel: "canonical", href: "/cable-tv" }],
  }),
  component: CableTvPage,
});

const topics = [
  {
    icon: Tv,
    title: "Channel line-ups",
    copy: "Sports, local, premium and international packages vary widely — we help you compare what's actually included.",
  },
  {
    icon: Layers,
    title: "Bundle structures",
    copy: "Understand how internet, TV and phone bundles are priced, and what happens once the introductory rate ends.",
  },
  {
    icon: Clapperboard,
    title: "Equipment",
    copy: "Set-top boxes, DVR storage and rental fees explained, so there are no surprises on your first bill.",
  },
];

function CableTvPage() {
  return (
    <>
      <PageHero
        eyebrow="Cable & TV"
        title="Channel line-ups and bundles, compared honestly."
        lead="From premium sports tiers to basic local packages, we break cable TV down into terms you can compare across providers."
        image={cableImg}
        alt="Living room with a large television glowing in violet light"
      >
        <CTALink to="/contact">Compare packages</CTALink>
      </PageHero>

      <Section>
        <Reveal>
          <Eyebrow>What we help with</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-display text-4xl leading-tight font-extrabold sm:text-5xl">
            Three things that actually change your bill.
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

      <Section className="bg-muted">
        <Reveal>
          <div className="rounded-[2.5rem] border border-border bg-card p-8 sm:p-14">
            <Eyebrow>A quick note</Eyebrow>
            <h2 className="mt-6 font-display text-3xl leading-tight font-extrabold sm:text-4xl">
              Cord-cutting isn't always cheaper.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Stacking several streaming subscriptions can cost more than a traditional cable
              package, depending on what your household actually watches. We'll walk through the
              real math for your situation before you decide.
            </p>
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <Disclaimer />
        </Reveal>
      </Section>
    </>
  );
}
