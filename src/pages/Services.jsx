import {
  Search,
  Ruler,
  FileCheck2,
  Hammer,
  Gauge,
  Wrench,
} from "lucide-react";
import Eyebrow from "../components/Eyebrow";

const services = [
  {
    icon: Search,
    title: "Site Assessment",
    text: "On-site evaluation of roof or land area, shading, structural condition, and load requirements to determine system feasibility.",
  },
  {
    icon: Ruler,
    title: "System Design & Engineering",
    text: "Custom PV system design sized to your site and consumption, including electrical layout and equipment selection.",
  },
  {
    icon: FileCheck2,
    title: "Permitting & Grid Interconnection",
    text: "Handling utility interconnection applications and net-metering paperwork so the system ties cleanly into the grid.",
  },
  {
    icon: Hammer,
    title: "Installation & Commissioning",
    text: "Professional installation of modules, inverters, and balance-of-system components, followed by testing and commissioning.",
  },
  {
    icon: Gauge,
    title: "Monitoring",
    text: "Remote system monitoring so performance and generation can be tracked after the system goes live.",
  },
  {
    icon: Wrench,
    title: "Operation & Maintenance",
    text: "Ongoing inspection, cleaning, and maintenance support to keep systems performing at their best for years.",
  },
];

const process = [
  { step: "01", title: "Consultation", text: "We discuss your site, goals, and budget to scope the right system." },
  { step: "02", title: "Design & Proposal", text: "You get a system design, cost estimate, and expected generation figures." },
  { step: "03", title: "Installation", text: "Our team installs and commissions the system, coordinating any utility approvals." },
  { step: "04", title: "Monitoring & Support", text: "The system goes live with monitoring and ongoing O&M support available." },
];

export default function Services() {
  return (
    <div>
      <section className="border-b border-[var(--color-line)] px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow>Services</Eyebrow>
          <h1 className="mx-auto mt-5 max-w-2xl text-balance font-[var(--font-display)] text-[38px] font-semibold leading-tight text-[var(--color-ink)] sm:text-[46px]">
            Full-service gridtie solar EPC.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-[var(--color-ink-soft)]">
            From first site visit to years of ongoing support, we handle
            every step of getting a grid-connected solar system up and
            running.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <Eyebrow>What We Offer</Eyebrow>
        <h2 className="mt-4 max-w-xl text-balance font-[var(--font-display)] text-[30px] font-semibold leading-tight text-[var(--color-ink)] sm:text-[36px]">
          End-to-end, so you don't have to manage multiple vendors.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white/30 p-7 shadow-md transition-colors hover:border-[var(--color-gold-deep)]/40"
            >
              <span className="absolute right-0 top-0 h-14 w-14 rounded-bl-2xl bg-[var(--color-gold)]/10 transition-colors group-hover:bg-[var(--color-gold)]/20" />
              <s.icon size={22} className="text-[var(--color-gold-deep)]" strokeWidth={1.75} />
              <h3 className="mt-5 font-[var(--font-display)] text-[18px] font-semibold text-[var(--color-ink)]">
                {s.title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-relaxed text-[var(--color-ink-soft)]">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[var(--color-line)] bg-[var(--color-cream-dim)] px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <Eyebrow>Our Process</Eyebrow>
          <h2 className="mt-4 max-w-xl text-balance font-[var(--font-display)] text-[30px] font-semibold leading-tight text-[var(--color-ink)] sm:text-[36px]">
            From first call to commissioning.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.step} className="rounded-2xl border border-[var(--color-line)] bg-white/40 p-6 shadow-md">
                <span className="font-[var(--font-mono)] text-[13px] font-medium text-[var(--color-gold-deep)]">
                  {p.step}
                </span>
                <h3 className="mt-3 font-[var(--font-display)] text-[16px] font-semibold text-[var(--color-ink)]">
                  {p.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--color-ink-soft)]">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}