import { createFileRoute } from "@tanstack/react-router";

import coverageImg from "@/assets/coverage.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/motion";
import { Disclaimer, Eyebrow, Section } from "@/components/site/primitives";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Altix Net" },
      {
        name: "description",
        content:
          "Answers to common questions about how Altix Net's assistance and comparison service works.",
      },
      { property: "og:title", content: "FAQ — Altix Net" },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
  component: FaqPage,
});

const faqs = [
  {
    q: "Are you an internet or cable provider?",
    a: "No. Altix Net is an independent information and assistance platform. We help you explore and compare options; providers deliver the actual service.",
  },
  {
    q: "Does using Altix Net cost anything?",
    a: "Our guidance and comparison assistance is free to use. Any service you choose is billed by that provider under their own terms.",
  },
  {
    q: "Can you promise a specific speed or price?",
    a: "No. Availability, speeds and pricing are set by providers and can vary by address, equipment and time. We give you an honest, plain-language framework to compare with.",
  },
  {
    q: "How do you make recommendations?",
    a: "We ask about your household — number of devices, streaming habits, budget — and match that against publicly available provider information for your area.",
  },
  {
    q: "What happens after I contact you?",
    a: "A member of our team follows up to walk through your options. There's no obligation to sign up for anything.",
  },
  {
    q: "Do you sell my information?",
    a: "No. See our Privacy Policy for details on what we collect and how it's used.",
  },
];

function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Straight answers to the questions we hear most."
        lead="If something here doesn't cover your situation, reach out — a real person will walk you through it."
        image={coverageImg}
        alt="Abstract violet network of connected nodes over a city"
      />

      <Section>
        <Reveal>
          <Eyebrow>Common questions</Eyebrow>
        </Reveal>
        <ul className="mt-10 space-y-4">
          {faqs.map((f, i) => (
            <Reveal as="li" key={f.q} delay={i * 60}>
              <div className="rounded-3xl border border-border bg-card p-7">
                <h2 className="font-display text-lg font-bold">{f.q}</h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
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
