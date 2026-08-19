import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";

import workImg from "@/assets/work.jpg";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/motion";
import { Disclaimer, Eyebrow, Section } from "@/components/site/primitives";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Altix Net" },
      {
        name: "description",
        content:
          "Get in touch for free, provider-neutral help exploring cable, internet and streaming options at your address.",
      },
      { property: "og:title", content: "Contact — Altix Net" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's find out what your address can do."
        lead="Share a few details and a member of our team will follow up with provider-neutral guidance for your area."
        image={workImg}
        alt="Person working at a desk with a laptop and warm light"
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <Eyebrow>Reach us directly</Eyebrow>
            <h2 className="mt-6 font-display text-3xl leading-tight font-extrabold sm:text-4xl">
              We're happy to talk it through.
            </h2>
            <ul className="mt-8 space-y-5 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>xxx-xxx-xxxx</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href="mailto:support@altixnet.example" className="break-all hover:text-primary">
                  support@altixnet.example
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>1200 Fiber Avenue, Suite 340, Austin, TX 78701</span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl border border-border bg-card p-8">
              {submitted ? (
                <div className="py-10 text-center">
                  <h3 className="font-display text-2xl font-bold">Thanks — we've got it.</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    A member of our team will follow up shortly with options for your address.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block text-sm font-medium">
                      Name
                      <input
                        required
                        type="text"
                        name="name"
                        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      />
                    </label>
                    <label className="block text-sm font-medium">
                      Email
                      <input
                        required
                        type="email"
                        name="email"
                        className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      />
                    </label>
                  </div>
                  <label className="block text-sm font-medium">
                    Service address
                    <input
                      required
                      type="text"
                      name="address"
                      className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </label>
                  <label className="block text-sm font-medium">
                    What are you looking for?
                    <textarea
                      name="message"
                      rows={4}
                      className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </label>
                  <button
                    type="submit"
                    className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-7 text-sm font-semibold text-primary-foreground transition-colors hover:bg-violet"
                  >
                    Check Availability
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-muted">
        <Reveal>
          <Disclaimer />
        </Reveal>
      </Section>
    </>
  );
}
