import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Gauge,
  Headphones,
  MapPin,
  MonitorPlay,
  Quote,
  Router as RouterIcon,
  ShieldCheck,
  Sparkles,
  Tv,
  Wifi,
} from "lucide-react";
import { useState } from "react";

import heroImg from "@/assets/hero.jpg";
import fiberImg from "@/assets/fiber.jpg";
import streamingImg from "@/assets/streaming.jpg";
import gamingImg from "@/assets/gaming.jpg";
import workImg from "@/assets/work.jpg";
import smartHomeImg from "@/assets/smarthome.jpg";
import coverageImg from "@/assets/coverage.jpg";

import { TextLoop } from "@/components/site/TextLoop";
import { Counter, Parallax, Reveal } from "@/components/site/motion";
import { CTALink, Eyebrow, Section } from "@/components/site/primitives";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Home,
});

const services = [
  {
    icon: Wifi,
    title: "Internet Services",
    copy: "Understand fiber, cable and fixed-wireless options, and what speeds actually suit your household.",
    to: "/internet",
  },
  {
    icon: Tv,
    title: "Cable & TV",
    copy: "Compare channel line-ups, equipment requirements and bundle structures side by side.",
    to: "/cable-tv",
  },
  {
    icon: MonitorPlay,
    title: "Streaming",
    copy: "Work out which streaming apps and devices fit the way your household actually watches.",
    to: "/streaming",
  },
  {
    icon: RouterIcon,
    title: "Wi-Fi & Connectivity",
    copy: "Coverage, mesh layouts and router placement guidance for homes of every shape.",
    to: "/wifi",
  },
];

const lifeCards = [
  {
    img: streamingImg,
    title: "Streaming",
    copy: "Multiple 4K streams without the buffering wheel.",
  },
  { img: gamingImg, title: "Gaming", copy: "Low-latency setups and wired-vs-wireless trade-offs." },
  { img: workImg, title: "Work From Home", copy: "Stable uploads for calls, transfers and VPNs." },
  {
    img: smartHomeImg,
    title: "Smart Home",
    copy: "Dozens of devices, one network that stays calm.",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Provider-neutral",
    copy: "We don't operate a network, so our guidance isn't tied to one line-up.",
  },
  {
    icon: Gauge,
    title: "Plain-language comparisons",
    copy: "Speeds, terms and equipment explained without the fine-print fog.",
  },
  {
    icon: Headphones,
    title: "Human assistance",
    copy: "Talk to a real person who walks through your options with you.",
  },
  {
    icon: MapPin,
    title: "Address-level context",
    copy: "What's typically available where you live, not a national average.",
  },
];

const testimonials = [
  {
    quote:
      "I had no idea what the difference between the plans actually was. Twenty minutes on the phone and I finally understood what I was choosing.",
    name: "Dana R.",
    place: "Round Rock, TX",
  },
  {
    quote:
      "They were upfront that they aren't a provider, which honestly made me trust the comparison more.",
    name: "Marcus L.",
    place: "Columbus, OH",
  },
  {
    quote:
      "The Wi-Fi walkthrough fixed the dead spot in our back bedroom without buying anything new.",
    name: "Priya S.",
    place: "Sacramento, CA",
  },
];

const faqPreview = [
  {
    q: "Are you an internet or cable provider?",
    a: "No. Altix Net is an independent information and assistance platform. We help you explore and compare options, and providers deliver the service.",
  },
  {
    q: "Does using Altix Net cost anything?",
    a: "Our guidance and comparison assistance is free to use. Any service you choose is billed by that provider under their own terms.",
  },
  {
    q: "Can you promise a specific speed or price?",
    a: "No. Availability, speeds and pricing are set by providers and can vary by address, equipment and time.",
  },
];

function Home() {
  const [household, setHousehold] = useState(4);
  const suggested = Math.min(2000, Math.max(100, household * 150));

  return (
    <>
      {/* Cinematic hero */}
      <section className="surface-ink relative flex min-h-[92vh] items-end overflow-hidden px-5 pt-32 pb-14 sm:px-8">
        <img
          src={heroImg}
          alt="Purple-lit living room with a large screen and glowing fiber optics"
          width={1920}
          height={1088}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,oklch(0.14_0.05_300/0.75),oklch(0.14_0.05_300/0.35)_45%,oklch(0.14_0.05_300/0.95))]" />

        <div className="relative mx-auto w-full max-w-7xl">
          <Reveal>
            <Eyebrow tone="dark">
              <Sparkles className="h-3.5 w-3.5" /> Independent service guidance
            </Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-8 max-w-5xl font-display text-[13vw] leading-[0.92] font-extrabold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl">
              CONNECTED
              <br />
              TO <span className="text-gradient">MORE.</span>
            </h1>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-foreground/80 sm:text-lg">
              Altix Net helps you explore, compare and understand the cable, internet, TV and
              streaming options around you — then get real assistance choosing. We're a third-party
              platform, not a provider.
            </p>
          </Reveal>
          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap gap-3">
              <CTALink to="/contact">
                Check Availability <ArrowRight className="ml-2 h-4 w-4" />
              </CTALink>
              <CTALink to="/internet" variant="ghost-dark">
                Explore Services
              </CTALink>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <dl className="mt-16 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 sm:grid-cols-4">
              {[
                { label: "Households assisted", value: 48, suffix: "K+" },
                { label: "Service areas covered", value: 1200, suffix: "+" },
                { label: "Avg. comparison time", value: 12, suffix: " min" },
                { label: "Support satisfaction", value: 4.8, suffix: "/5", d: 1 },
              ].map((s) => (
                <div key={s.label} className="min-w-0">
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="font-display text-3xl font-extrabold sm:text-4xl">
                    <Counter to={s.value} suffix={s.suffix} decimals={s.d ?? 0} />
                  </dd>
                  <p className="mt-2 text-xs tracking-wide text-ink-foreground/60 uppercase">
                    {s.label}
                  </p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <TextLoop text="FAST INTERNET ✦ RELIABLE CONNECTION ✦ ENTERTAINMENT ✦ STAY CONNECTED ✦" />

      {/* Service showcase */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <Eyebrow>What we help with</Eyebrow>
            <h2 className="mt-6 font-display text-4xl leading-tight font-extrabold sm:text-5xl">
              Four ways to make your home
              <span className="text-gradient"> make sense</span>.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-base leading-relaxed text-muted-foreground lg:pb-3">
              Every household weighs speed, entertainment and coverage differently. We break each
              area down into decisions you can actually make, then help you act on them.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 90}>
              <Link
                to={s.to}
                className="group block h-full rounded-3xl border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[var(--shadow-soft)]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent text-accent-foreground transition-colors group-hover:bg-[image:var(--gradient-brand)] group-hover:text-violet-foreground">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-7 font-display text-2xl font-bold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* Interactive speed / connectivity */}
      <Section className="surface-ink relative overflow-hidden rounded-[2.5rem] mx-4 sm:mx-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="min-w-0">
            <Reveal>
              <Eyebrow tone="dark">Connectivity planner</Eyebrow>
              <h2 className="mt-6 font-display text-4xl leading-tight font-extrabold sm:text-5xl">
                How much speed does your home actually need?
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-foreground/70">
                Slide to the number of connected devices in your home. This is an educational
                estimate to help frame the conversation — not a quote or a guarantee.
              </p>
            </Reveal>

            <Reveal delay={140}>
              <div className="glass mt-10 rounded-3xl p-7">
                <label htmlFor="devices" className="text-sm font-semibold">
                  Connected devices: <span className="text-gradient">{household}</span>
                </label>
                <input
                  id="devices"
                  type="range"
                  min={1}
                  max={12}
                  value={household}
                  onChange={(e) => setHousehold(Number(e.target.value))}
                  className="mt-5 h-2 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-[oklch(0.62_0.26_300)]"
                />
                <div className="mt-8 flex flex-wrap items-end gap-x-3 gap-y-1">
                  <span className="font-display text-6xl font-extrabold">{suggested}</span>
                  <span className="pb-2 text-sm tracking-[0.2em] uppercase text-ink-foreground/60">
                    Mbps range to discuss
                  </span>
                </div>
                <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-[image:var(--gradient-brand)] transition-[width] duration-700"
                    style={{ width: `${(suggested / 2000) * 100}%` }}
                  />
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <Parallax strength={40}>
              <img
                src={fiberImg}
                alt="Glowing violet fiber optic strands"
                loading="lazy"
                width={1280}
                height={960}
                className="aspect-4/3 w-full rounded-[2rem] object-cover shadow-[var(--shadow-lift)]"
              />
            </Parallax>
          </Reveal>
        </div>
      </Section>

      {/* Purple-and-white feature section */}
      <Section>
        <div className="rounded-[2.5rem] border border-border bg-[image:var(--gradient-soft)] p-8 sm:p-14">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <Eyebrow>Why it feels different</Eyebrow>
              <h2 className="mt-6 font-display text-4xl leading-tight font-extrabold sm:text-5xl">
                Clarity first,
                <br />
                <span className="text-gradient">then decisions.</span>
              </h2>
            </Reveal>
            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {[
                [
                  "Compare like for like",
                  "Plans lined up on the terms that matter: speed, contract length, equipment and what happens after the promo period.",
                ],
                [
                  "Understand the fine print",
                  "We translate data caps, installation fees and equipment rental into plain sentences.",
                ],
                [
                  "Coverage, honestly",
                  "If your address has limited options, we say so instead of overselling.",
                ],
                [
                  "No pressure, ever",
                  "You leave with information whether you sign up for anything or not.",
                ],
              ].map(([t, c], i) => (
                <Reveal key={t} delay={i * 90}>
                  <h3 className="font-display text-lg font-bold">{t}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{c}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Built for the way you live */}
      <Section>
        <Reveal>
          <Eyebrow>Everyday reality</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-display text-4xl leading-tight font-extrabold sm:text-5xl">
            Built for the way you live.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {lifeCards.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <article className="group relative h-[26rem] overflow-hidden rounded-[1.75rem]">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,oklch(0.16_0.05_300/0.9))]" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-ink-foreground">
                  <h3 className="font-display text-2xl font-bold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-foreground/75 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    {c.copy}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Benefits */}
      <Section className="bg-muted">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <Eyebrow>Trusted assistance</Eyebrow>
            <h2 className="mt-6 font-display text-4xl leading-tight font-extrabold sm:text-5xl">
              A service you can question.
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              We publish what we are and what we aren't, up front. That's the whole basis of the
              relationship.
            </p>
          </Reveal>
          <ul className="grid gap-5 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <Reveal as="li" key={b.title} delay={i * 90}>
                <div className="h-full rounded-3xl bg-card p-7 shadow-[0_20px_50px_-40px_rgba(60,0,120,0.6)]">
                  <b.icon className="h-5 w-5 text-primary" />
                  <h3 className="mt-5 font-display text-lg font-bold">{b.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{b.copy}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      {/* Coverage */}
      <section className="surface-ink relative overflow-hidden px-5 py-24 sm:px-8 md:py-32">
        <img
          src={coverageImg}
          alt="Abstract violet network of connected nodes over a city"
          loading="lazy"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_70%_50%,transparent,oklch(0.14_0.05_300/0.9))]" />
        <div className="relative mx-auto w-full max-w-7xl">
          <Reveal>
            <Eyebrow tone="dark">Coverage & availability</Eyebrow>
            <h2 className="mt-6 max-w-3xl font-display text-4xl leading-tight font-extrabold sm:text-6xl">
              Availability is local. So is our answer.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-foreground/75">
              What reaches your street depends on infrastructure that already exists there. Share
              your address and we'll walk through what's typically offered nearby — and what the
              trade-offs are.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <CTALink to="/contact">Check Availability</CTALink>
              <CTALink to="/wifi" variant="ghost-dark">
                Wi-Fi guidance
              </CTALink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Testimonials */}
      <Section>
        <Reveal>
          <Eyebrow>What people say</Eyebrow>
          <h2 className="mt-6 max-w-2xl font-display text-4xl leading-tight font-extrabold sm:text-5xl">
            Conversations, not sales scripts.
          </h2>
        </Reveal>
        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-8">
                <Quote className="h-6 w-6 text-primary" />
                <blockquote className="mt-6 flex-1 text-sm leading-relaxed text-foreground">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-7 border-t border-border pt-5 text-sm">
                  <span className="font-semibold">{t.name}</span>
                  <span className="block text-muted-foreground">{t.place}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </Section>

      {/* FAQ preview */}
      <Section className="bg-muted">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <Eyebrow>Common questions</Eyebrow>
            <h2 className="mt-6 font-display text-4xl leading-tight font-extrabold sm:text-5xl">
              Straight answers.
            </h2>
            <CTALink to="/faq" variant="outline" className="mt-8">
              See all FAQs
            </CTALink>
          </Reveal>
          <ul className="space-y-4">
            {faqPreview.map((f, i) => (
              <Reveal as="li" key={f.q} delay={i * 90}>
                <div className="rounded-3xl bg-card p-7">
                  <h3 className="font-display text-lg font-bold">{f.q}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </Section>

      <TextLoop text="EXPLORE ✦ COMPARE ✦ UNDERSTAND ✦ GET ASSISTANCE ✦" duration={48} />

      {/* Final CTA */}
      <Section>
        <Reveal>
          <div className="rounded-[2.5rem] bg-[image:var(--gradient-brand)] px-8 py-16 text-center text-violet-foreground sm:px-14 md:py-24">
            <h2 className="mx-auto max-w-3xl font-display text-4xl leading-tight font-extrabold sm:text-6xl">
              Let's find out what your address can do.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/85">
              Free, provider-neutral guidance from a team that doesn't sell you a network.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5"
              >
                Check Availability
              </Link>
              <CTALink to="/about" variant="ghost-dark">
                About Altix Net
              </CTALink>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
