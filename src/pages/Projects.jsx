import { useState } from "react";
import { MapPin } from "lucide-react";
import Eyebrow from "../components/Eyebrow";
import ImagePlaceholder from "../components/ImagePlaceholder";
import { projects } from "../data/projects";

const orgLabels = {
  commercial: "Rooftop · Commercial",
  industrial: "Rooftop · Industrial",
  utility: "Utility-Scale",
};

const tabs = [
  { key: "all", label: "All Projects" },
  { key: "gridtie", label: "Gridtie Solar" },
  { key: "jdne", label: "JDNE" },
];

function ProjectCard({ p }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-[var(--color-line)] bg-white/40 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-gold-glow)] hover:shadow-[0_0_28px_6px_rgba(63,196,113,0.55)]">
      <ImagePlaceholder src={p.image} label={p.name} rounded="rounded-none" aspect="aspect-[16/9]" />

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between">
          <span className="font-[var(--font-mono)] text-[12px] uppercase tracking-[0.12em] text-[var(--color-gold-deep)]">
            {orgLabels[p.org] || p.org}
          </span>
          <span className="rounded-full bg-[var(--color-ink)]/8 px-2.5 py-0.5 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.08em] text-[var(--color-ink-soft)]">
            {p.status}
          </span>
        </div>

        <h3 className="mt-3 font-[var(--font-display)] text-[19px] font-semibold leading-snug text-[var(--color-ink)]">
          {p.name}
        </h3>
        <p className="mt-1.5 flex items-center gap-1.5 text-[14px] text-[var(--color-ink-soft)]">
          <MapPin size={13} className="text-[var(--color-gold-deep)]" />
          {p.location}
        </p>
        <p className="mt-3 text-[14px] leading-relaxed text-[var(--color-ink-soft)]">
          {p.summary}
        </p>

        <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-[var(--color-line)] pt-3">
          {p.specs.map((s) => (
            <div key={s.label}>
              <div className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.08em] text-[var(--color-ink-soft)]/70">
                {s.label}
              </div>
              <div className="font-[var(--font-mono)] text-[13px] text-[var(--color-ink)]">
                {s.value}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between border-t border-[var(--color-line)] pt-3">
          <span className="font-[var(--font-mono)] text-[13px] text-[var(--color-ink-soft)]">
            {p.year}
          </span>
          <span className="font-[var(--font-display)] text-[17px] font-semibold text-[var(--color-gold-deep)]">
            {p.capacity}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState("all");

  const shown =
    active === "all" ? projects : projects.filter((p) => p.company === active);

  return (
    <div>
      <section className="border-b border-[var(--color-line)] px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow>Track Record</Eyebrow>
          <h1 className="mx-auto mt-5 max-w-2xl text-balance font-[var(--font-display)] text-[41px] font-semibold leading-tight text-[var(--color-ink)] sm:text-[50px]">
            Our project portfolio.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-[var(--color-ink-soft)]">
            Grid-tied solar installations delivered directly, alongside a
            selection from our sister company, JDNE.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-wrap gap-3">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setActive(t.key)}
              className={`rounded-full border px-5 py-2.5 font-[var(--font-mono)] text-[13px] font-medium uppercase tracking-[0.08em] transition-colors ${
                active === t.key
                  ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-cream)]"
                  : "border-[var(--color-line)] text-[var(--color-ink-soft)] hover:border-[var(--color-gold-deep)]/50"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
