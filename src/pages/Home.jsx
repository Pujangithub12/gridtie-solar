import { NavLink } from "react-router-dom";
import { ArrowUpRight, Zap, PlugZap, ShieldCheck } from "lucide-react";
import PVGrid from "../components/PVGrid";
import Eyebrow from "../components/Eyebrow";
import ImagePlaceholder from "../components/ImagePlaceholder";
import HeroCarousel from "../components/HeroCarousel";
import { projects } from "../data/projects";

const orgLabels = {
  commercial: "Rooftop · Commercial",
  industrial: "Rooftop · Industrial",
};

const stats = [
  { value: "5+ MW", label: "Grid-tied capacity installed" },
  { value: "10+ Yrs", label: "In grid-connected solar" },
  { value: "30+", label: "Net-metered systems live" },
  { value: "24/7", label: "Remote system monitoring" },
];

const offerings = [
  {
    icon: PlugZap,
    title: "Grid-Tie Rooftop Solar",
    text: "Net-metered PV systems for homes and businesses that feed excess power straight back into the utility grid.",
  },
  {
    icon: Zap,
    title: "Commercial & Industrial",
    text: "Larger rooftop and ground-mount arrays engineered for high-load commercial, industrial, and institutional sites.",
  },
  {
    icon: ShieldCheck,
    title: "Design to O&M",
    text: "Feasibility studies, engineering design, utility interconnection, installation, and ongoing operation & maintenance.",
  },
];

export default function Home() {
  const featured = projects.slice(0, 3);
  const heroImages = projects.map((p) => p.image).filter(Boolean);

  return (
    <div>
      <section className="relative flex min-h-[560px] items-center overflow-hidden sm:min-h-[640px] lg:min-h-[720px]">
        <HeroCarousel images={heroImages} intervalMs={4000} />

        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="max-w-2xl">
            <Eyebrow large bright glow textClassName="text-yellow-400" barClassName="bg-yellow-400">Grid-Tie Solar · EPC Services</Eyebrow>
            <h1 className="mt-6 text-balance font-[var(--font-display)] text-[42px] font-semibold leading-[1.08] tracking-tight text-white sm:text-[56px]">
              Turning rooftops into grid-tied power plants.
            </h1>
            <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-white/80">
              We design, install, and maintain grid-connected solar PV
              systems for homes and businesses engineered for net
              metering, utility interconnection, and years of reliable
              output.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <NavLink
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-md bg-[var(--color-gold)] px-6 py-3.5 text-[14px] font-semibold text-white transition-colors hover:bg-[var(--color-gold-glow)]"
              >
                Start a Project
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </NavLink>
              <NavLink
                to="/projects"
                className="inline-flex items-center gap-2 rounded-md border border-white/40 px-6 py-3.5 text-[14px] font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
              >
                View Our Work
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-20 -mt-12 px-6 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 rounded-2xl border border-[var(--color-line)] bg-[var(--color-cream-dim)] p-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)] sm:p-6 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-start gap-3 rounded-xl bg-white/50 px-4 py-5 sm:px-5"
            >
              <span className="mt-1 h-8 w-[3px] shrink-0 rounded-full bg-[var(--color-gold)]" />
              <div>
                <div className="font-[var(--font-mono)] text-[24px] font-semibold text-[var(--color-gold-deep)] sm:text-[26px]">
                  {s.value}
                </div>
                <div className="mt-1 text-[13px] font-semibold text-[var(--color-ink-soft)]">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Offerings */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <Eyebrow>What We Deliver</Eyebrow>
        <h2 className="mt-4 max-w-xl text-balance font-[var(--font-display)] text-[30px] font-semibold leading-tight text-[var(--color-ink)] sm:text-[36px]">
          End-to-end grid-tie solar EPC, start to finish.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {offerings.map((o) => (
            <div
              key={o.title}
              className="group relative overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white/30 p-7 shadow-md transition-colors hover:border-[var(--color-gold-deep)]/40"
            >
              <span className="absolute right-0 top-0 h-14 w-14 rounded-bl-2xl bg-[var(--color-gold)]/10 transition-colors group-hover:bg-[var(--color-gold)]/20" />
              <o.icon size={22} className="text-[var(--color-gold-deep)]" strokeWidth={1.75} />
              <h3 className="mt-5 font-[var(--font-display)] text-[18px] font-semibold text-[var(--color-ink)]">
                {o.title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-[var(--color-ink-soft)]">
                {o.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="border-t border-[var(--color-line)] bg-[var(--color-cream-dim)]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Selected Work</Eyebrow>
              <h2 className="mt-4 max-w-xl text-balance font-[var(--font-display)] text-[30px] font-semibold leading-tight text-[var(--color-ink)] sm:text-[36px]">
                Recent installations.
              </h2>
            </div>
            <NavLink
              to="/projects"
              className="inline-flex items-center gap-1.5 font-[var(--font-mono)] text-[13px] font-medium text-[var(--color-gold-deep)] hover:underline"
            >
              View all projects <ArrowUpRight size={14} />
            </NavLink>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featured.map((p) => (
              <div
                key={p.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white/40 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-gold-glow)] hover:shadow-[0_0_28px_6px_rgba(63,196,113,0.55)]"
              >
                <ImagePlaceholder src={p.image} label={p.name} rounded="rounded-none" aspect="aspect-[16/9]" />
                <div className="flex flex-1 flex-col p-5">
                <div className="flex-1">
                  <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--color-gold-deep)]">
                    {orgLabels[p.org] || p.org}
                  </span>
                  <h3 className="mt-2 font-[var(--font-display)] text-[17px] font-semibold text-[var(--color-ink)]">
                    {p.name}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-ink-soft)]">
                    {p.summary}
                  </p>
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-[var(--color-line)] pt-3 font-[var(--font-mono)] text-[12px] text-[var(--color-ink-soft)]">
                  <span>{p.location}</span>
                  <span className="font-semibold text-[var(--color-gold-deep)]">{p.capacity}</span>
                </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-[var(--color-ink)] px-8 py-16 text-center sm:px-16">
          <div className="pointer-events-none absolute -right-10 -top-10 opacity-20">
            <PVGrid rows={6} cols={6} />
          </div>
          <Eyebrow>Let's Talk</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-xl text-balance font-[var(--font-display)] text-[30px] font-semibold leading-tight text-[var(--color-cream)] sm:text-[38px]">
            Ready to put your rooftop to work?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] text-[var(--color-cream)]/70">
            Tell us about your site and load requirements — we'll scope a
            system and walk you through the numbers.
          </p>
          <NavLink
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--color-gold)] px-7 py-3.5 text-[14px] font-semibold text-[var(--color-ink)] transition-colors hover:bg-[var(--color-gold-glow)]"
          >
            Get in Touch
            <ArrowUpRight size={16} />
          </NavLink>
        </div>
      </section>
    </div>
  );
}