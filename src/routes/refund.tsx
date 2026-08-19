import { createFileRoute } from "@tanstack/react-router";

import coverageImg from "@/assets/coverage.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/motion";
import { Section } from "@/components/site/primitives";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy — Altix Net" },
      {
        name: "description",
        content:
          "How refunds and cancellations work for services arranged with the help of Altix Net.",
      },
      { property: "og:title", content: "Refund Policy — Altix Net" },
      { property: "og:url", content: "/refund" },
    ],
    links: [{ rel: "canonical", href: "/refund" }],
  }),
  component: RefundPage,
});

const sections = [
  {
    title: "Our assistance is free",
    body: "Altix Net does not charge for comparison guidance or assistance, so there is nothing to refund on our end for using this website or speaking with our team.",
  },
  {
    title: "Provider billing",
    body: "Any internet, cable or streaming service you sign up for is billed directly by that provider under their own refund and cancellation policy, not ours.",
  },
  {
    title: "If something goes wrong",
    body: "If you had a poor experience acting on our guidance, contact us — we'll help you understand your options with the provider, including their cancellation window and any early-termination terms.",
  },
  {
    title: "Questions",
    body: "Reach out at support@altixnet.example if you're unsure whether a charge relates to a provider's service or to Altix Net directly.",
  },
];

function RefundPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Refund Policy"
        lead="Last updated August 2026. Altix Net's assistance is free — here's how billing and refunds actually work."
        image={coverageImg}
        alt="Abstract violet network of connected nodes over a city"
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
