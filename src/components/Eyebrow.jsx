export default function Eyebrow({ children, large = false, bright = false, glow = false, textClassName = "", barClassName = "" }) {
  return (
    <div className="relative inline-flex items-center gap-2.5">
      {glow && (
        <span className="pointer-events-none absolute -inset-x-3 -inset-y-2 -z-10 rounded-full bg-[var(--color-gold)]/25 blur-md" />
      )}
      <span className={`${barClassName || "bg-[var(--color-gold)]"} ${large ? "h-[4px] w-8" : "h-[3px] w-6"}`} />
      <span
        className={`font-[var(--font-mono)] uppercase tracking-[0.22em] ${
          large ? "text-[15px] font-semibold" : "text-[12px]"
        } ${textClassName || (bright ? "text-[var(--color-gold)]" : "text-[var(--color-gold-deep)]")}`}
      >
        {children}
      </span>
    </div>
  );
}