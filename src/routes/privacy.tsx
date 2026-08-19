import { createFileRoute } from "@tanstack/react-router";

import smartHomeImg from "@/assets/smarthome.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/motion";
import { Section } from "@/components/site/primitives";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Altix Net" },
      {
        name: "description",
        content: "How Altix Net collects, uses and protects the information you share with us.",
      },
      { property: "og:title", content: "Privacy Policy — Altix Net" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

const sections = [
  {
    title: "Information we collect",
    body: "When you contact us or request availability guidance, we collect the details you provide — such as name, email, phone number and service address — along with basic usage data from this website.",
  },
  {
    title: "How we use it",
    body: "We use your information to respond to your request, provide comparison guidance, and improve this website. We do not sell your personal information to third parties.",
  },
  {
    title: "Sharing with providers",
    body: "If you ask us to help you pursue a specific service, we may share the details necessary to do so with the relevant provider, with your consent.",
  },
  {
    title: "Data retention",
    body: "We retain contact information only as long as needed to provide assistance or as required by law, then delete it.",
  },
  {
    title: "Your choices",
    body: "You can ask us to access, correct or delete your information at any time by emailing support@altixnet.example.",
  },
];

function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        lead="Last updated August 2026. This page explains what information we collect and how it's used."
        image={smartHomeImg}
        alt="Softly lit smart home devices connected on a shelf"
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
