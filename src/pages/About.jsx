import { Leaf, ShieldCheck, Users, Compass, Gauge } from "lucide-react";
import Eyebrow from "../components/Eyebrow";

const values = [
  {
    icon: Gauge,
    title: "Technical Depth",
    text: "Every project draws on deep engineering experience across solar EPC and grid-connected systems.",
  },
  {
    icon: ShieldCheck,
    title: "Reliability",
    text: "From site assessment to commissioning, we deliver systems built to run for decades, not just switch on.",
  },
  {
    icon: Compass,
    title: "Regulatory Fluency",
    text: "Familiarity with grid connectivity rules and net metering frameworks, handled in-house from application to approval.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    text: "Every installation is measured against long-term clean energy goals, not just a client's electricity bill.",
  },
  {
    icon: Users,
    title: "Inclusion",
    text: "A workplace and project practice guided by equal opportunity at every level, on every site.",
  },
];

export default function About() {
  return (
    <div>
      <section className="border-b border-[var(--color-line)] px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow>About Gridtie Solar</Eyebrow>
          <h1 className="mx-auto mt-5 max-w-2xl text-balance font-[var(--font-display)] text-[38px] font-semibold leading-tight text-[var(--color-ink)] sm:text-[46px]">
            Grid-connected solar, done right.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-[var(--color-ink-soft)]">
            Gridtie Solar delivers solar EPC services to residential,
            commercial, and institutional clients. It brings all the experience from our sister company, JDNE as well.
            .
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-[var(--font-display)] text-[26px] font-semibold text-[var(--color-ink)]">
              A focused offering, built on real project experience.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
              We provide engineering, procurement, and construction
              services for grid connected solar systems, from initial
              site assessment through design, installation, and
              commissioning.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-ink-soft)]">
              We specialize in grid-tied solar PV rooftop, ground-mount,
              and net-metered systems for homes, businesses, and
              institutions moving toward clean, grid-connected power.
            </p>
          </div>

          <div className="rounded-2xl border border-[var(--color-gold-deep)]/25 bg-[var(--color-cream-dim)] p-8 shadow-md">
            <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-gold-deep)]">
              Company Details
            </span>
            <h3 className="mt-3 font-[var(--font-display)] text-[22px] font-semibold text-[var(--color-ink)]">
              Grid Tie Solar
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-ink-soft)]">
              A dedicated grid-tie solar EPC company focused on delivering
              reliable, well-engineered systems from start to finish.
            </p>
            <dl className="mt-6 space-y-3 border-t border-[var(--color-line)] pt-5 font-[var(--font-mono)] text-[13px]">
              <div className="flex justify-between">
                <dt className="text-[var(--color-ink-soft)]">Registered Office</dt>
                <dd className="text-[var(--color-ink)]">2nd Floor, Trade Tower, Thapathali, Kathmandu, Nepal</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-[var(--color-ink-soft)]">Incorporated</dt>
                <dd className="text-[var(--color-ink)]">2024</dd>
              </div>
            </dl>
          </div>
        </div>

        {/* Mission / Approach */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-[var(--color-line)] bg-white/30 p-8 shadow-md">
            <h3 className="font-[var(--font-display)] text-[19px] font-semibold text-[var(--color-ink)]">
              Our Objective
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-ink-soft)]">
              To provide competitive, technically sound grid-tie solar
              solutions whether its designing, supplying, installing, and
              commissioning PV systems while contributing to broader clean
              energy goals.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--color-line)] bg-white/30 p-8 shadow-md">
            <h3 className="font-[var(--font-display)] text-[19px] font-semibold text-[var(--color-ink)]">
              Our Approach
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-ink-soft)]">
              End-to-end delivery, which includes assessment, design, procurement,
              installation, and O&M with close attention paid to every
              site we take on.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-[var(--color-line)] bg-[var(--color-cream-dim)] px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>What Guides Us</Eyebrow>
          <h2 className="mt-4 max-w-xl text-balance font-[var(--font-display)] text-[30px] font-semibold leading-tight text-[var(--color-ink)] sm:text-[36px]">
            Principles behind every installation.
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-[var(--color-line)] bg-white/40 p-6 shadow-md">
                <v.icon size={20} className="text-[var(--color-gold-deep)]" strokeWidth={1.75} />
                <h3 className="mt-4 font-[var(--font-display)] text-[15px] font-semibold text-[var(--color-ink)]">
                  {v.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-ink-soft)]">
                  {v.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}