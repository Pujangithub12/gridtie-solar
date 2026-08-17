import { ImageIcon } from "lucide-react";


 //Shows a real photo when `src` is provided
 
export default function ImagePlaceholder({ src, label, className = "", aspect = "aspect-[4/3]", rounded = "rounded-xl" }) {
  if (src) {
    return (
      <div className={`relative ${aspect} w-full overflow-hidden ${rounded} ${className}`}>
        <img src={src} alt={label || ""} className="h-full w-full object-cover" />
      </div>
    );
  }

  return (
    <div
      className={`relative flex ${aspect} w-full flex-col items-center justify-center gap-2 overflow-hidden ${rounded} border border-dashed border-[var(--color-gold-deep)]/35 bg-[repeating-linear-gradient(135deg,var(--color-cream-dim),var(--color-cream-dim)_10px,rgba(217,166,46,0.08)_10px,rgba(217,166,46,0.08)_20px)] ${className}`}
    >
      <ImageIcon size={22} className="text-[var(--color-gold-deep)]/60" />
      <span className="px-4 text-center font-[var(--font-mono)] text-[11px] uppercase tracking-[0.14em] text-[var(--color-gold-deep)]/70">
        {label || "Image placeholder"}
      </span>
    </div>
  );
}