import { PenLine } from "lucide-react";

/**
 * A clearly marked stand-in for real copy. Used on pages where content
 * hasn't been written yet (About, Services, Team, Projects). Replace the
 * contents of each usage with real copy when it's ready.
 */
export default function PlaceholderBlock({ label, lines = 3, className = "" }) {
  return (
    <div
      className={`placeholder-block flex flex-col items-center justify-center gap-3 rounded-2xl px-6 py-10 text-center ${className}`}
    >
      <PenLine size={20} className="text-[var(--color-gold-deep)]/70" />
      <span className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--color-gold-deep)]/80">
        {label || "Content placeholder"}
      </span>
      <div className="w-full max-w-sm space-y-2">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="mx-auto h-2 rounded-full bg-[var(--color-gold-deep)]/15"
            style={{ width: `${85 - i * 12}%` }}
          />
        ))}
      </div>
    </div>
  );
}
