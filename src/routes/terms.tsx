import { createFileRoute } from "@tanstack/react-router";

import gamingImg from "@/assets/gaming.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/motion";
import { Section } from "@/components/site/primitives";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Altix Net" },
      {
        name: "description",
        content: "The terms that govern your use of Altix Net's website and assistance service.",
      },
      { property: "og:title", content: "Terms & Conditions — Altix Net" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

const sections = [
  {
    title: "Who we are",
    body: "Altix Net is an independent, third-party information and assistance platform. We are not an internet, cable, or streaming service provider, and we do not own or operate network infrastructure.",
  },
  {
    title: "No guarantee of service",
    body: "Availability, pricing and speeds referenced on this site are illustrative and subject to change by the providers themselves. We do not guarantee that any specific plan, price or speed will be available at your address.",
  },
  {
    title: "Acceptable use",
    body: "You agree to use this website only for lawful purposes and to provide accurate information when requesting assistance.",
  },
  {
    title: "Third-party services",
    body: "Any service you ultimately purchase is provided and billed by the provider under that provider's own terms, not ours.",
  },
  {
    title: "Limitation of liability",
    body: "Altix Net provides guidance on an as-is basis and is not liable for outcomes related to services provided by third-party companies.",
  },
  {
    title: "Changes to these terms",
    body: "We may update these terms from time to time. Continued use of this site after changes constitutes acceptance of the updated terms.",
  },
];

function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        lead="Last updated August 2026. Please read these terms before using our website or assistance service."
        image={gamingImg}
        alt="Gaming setup with violet ambient lighting"
      />

      <Section>
        <ul className="space-y-10">
          {sections.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 60}>
              <h2 className="font-display text-xl font-bold">{s.title}</h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </Section>
    </>
  );
}
