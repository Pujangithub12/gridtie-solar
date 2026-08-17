import { User } from "lucide-react";
import Eyebrow from "../components/Eyebrow";
import kuberManiImg from "../assets/team/kubermani.jpg";
import prabinImg from "../assets/team/prabin.jpg";
import kadamManiImg from "../assets/team/kadam.jpg";

const team = [
  {
    name: "Kuber Mani Nepal",
    role: "Managing Director",
    note: "Leads day-to-day operations and client delivery across active project sites.",
    credentials: [],
    photo: kuberManiImg,
  },
  {
    name: "Kadam Mani Nepal",
    role: "Director",
    note: "Oversees strategic planning and business growth, helping guide the company's project pipeline and long-term direction.",
    credentials: [],
    photo: kadamManiImg,
  },
  {
    name: "Prabin Dhakal",
    role: "Solar Grid-Tie Expert (Mechanical)",
    note: "",
    credentials: [
      "M.Sc. Planning & Operation of Energy Systems",
      "6+ years in solar & renewable energy",
    ],
    photo: prabinImg,
  },
];

export default function Team() {
  return (
    <div>
      <section className="border-b border-[var(--color-line)] px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow>Leadership</Eyebrow>
          <h1 className="mx-auto mt-5 max-w-2xl text-balance font-[var(--font-display)] text-[38px] font-semibold leading-tight text-[var(--color-ink)] sm:text-[46px]">
            The people behind the company.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-[var(--color-ink-soft)]">
            Gridtie Solar telaned team, backed by  their braod experience and technical abilities.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((person) => (
            <div
              key={person.name}
              className="flex flex-col items-center rounded-2xl border border-[var(--color-line)] bg-white/40 p-7 text-center shadow-md"
            >
              {person.photo ? (
                <img
                  src={person.photo}
                  alt={person.name}
                  className="h-40 w-40 rounded-full object-cover"
                />
              ) : (
                <div className="placeholder-block flex h-40 w-40 items-center justify-center rounded-full">
                  <User size={24} className="text-[var(--color-gold-deep)]/70" />
                </div>
              )}

              <h3 className="mt-5 font-[var(--font-display)] text-[15px] font-semibold text-[var(--color-ink)]">
                {person.name}
              </h3>
              <p className="mt-1 font-[var(--font-mono)] text-[11px] uppercase tracking-[0.1em] text-[var(--color-gold-deep)]/80">
                {person.role}
              </p>

              {person.note && (
                <p className="mt-3 text-[13px] leading-relaxed text-[var(--color-ink-soft)]/80">
                  {person.note}
                </p>
              )}

              {person.credentials.length > 0 && (
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {person.credentials.map((c) => (
                    <span
                      key={c}
                      className="rounded-full border border-[var(--color-line)] bg-[var(--color-cream-dim)] px-3 py-1.5 text-[12px] text-[var(--color-ink-soft)]"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
