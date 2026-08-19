import { createFileRoute } from "@tanstack/react-router";
import { Handshake, ShieldCheck, Sparkles } from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/motion";
import { CTALink, Disclaimer, Eyebrow, Section } from "@/components/site/primitives";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Altix Net" },
      {
        name: "description",
        content:
          "Altix Net is an independent, provider-neutral platform helping households explore and compare cable, internet and streaming options.",
      },
      { property: "og:title", content: "About Altix Net" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: ShieldCheck,
    title: "Provider-neutral",
    copy: "We don't operate a network or sell service directly, so our comparisons aren't tied to one line-up.",
  },
  {
    icon: Sparkles,
    title: "Plain language",
    copy: "Speeds, contracts and equipment fees explained the way we'd want them explained to us.",
  },
  {
    icon: Handshake,
    title: "No pressure",
    copy: "You leave a conversation with us better informed, whether you sign up for anything or not.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Altix Net"
        title="An independent guide to a confusing market."
        lead="Altix Net exists because comparing cable, internet and streaming options shouldn't require reading a dozen fine-print pages. We help households understand what's available and make sense of it."
        image={heroImg}
        alt="Purple-lit living room with a large screen and glowing fiber optics"
      >
        <CTALink to="/contact">Talk to us</CTALink>
      </PageHero>

      <Section>
        <Reveal>
          <Eyebrow>What we stand for</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-display text-4xl leading-tight font-extrabold sm:text-5xl">
            Clarity first, then decisions.
          </h2>
        </Reveal>
        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal as="li" key={v.title} delay={i * 90}>
              <div className="h-full rounded-3xl border border-border bg-card p-8">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-accent-foreground">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-7 font-display text-2xl font-bold">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.copy}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section className="bg-muted">
        <Reveal>
          <Disclaimer />
        </Reveal>
      </Section>
    </>
  );
}
