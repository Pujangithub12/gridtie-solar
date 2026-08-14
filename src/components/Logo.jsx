/**
 * Placeholder for the real logo. logo vayesu
 * /src/assests ma halney and replace the
 * contents of this component with:

 *   <img src="/logo.svg" alt="Company logo" className={className} />
 *
 */
export default function Logo({ className = "h-9 w-9" }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full border border-dashed border-[var(--color-gold-deep)]/40 bg-[var(--color-gold)]/10 ${className}`}
      aria-hidden="true"
    />
  );
}