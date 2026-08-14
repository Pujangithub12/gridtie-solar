import { useEffect, useState } from "react";

const FALLBACK_GRADIENT = "linear-gradient(135deg, #0b1712, #124f2f)";

/**
 * Cycles through `images` (array of URL strings) as a full-bleed,
 * cross-fading background layer. Sits at z-0; place your hero text in a
 * sibling wrapped with `relative z-10` so it stacks above reliably.
 *
 * If `images` is empty, it just shows the gradient fallback.
 */
export default function HeroCarousel({ images = [], intervalMs = 4000 }) {
  const [index, setIndex] = useState(0);
  const hasImages = images.length > 0;

  useEffect(() => {
    if (!hasImages || images.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images, intervalMs, hasImages]);

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden"
      style={{ background: FALLBACK_GRADIENT }}
    >
      {hasImages &&
        images.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out"
            style={{
              backgroundImage: `url(${src})`,
              opacity: i === index ? 1 : 0,
            }}
          />
        ))}
      {/* Light overlay so text stays readable without hiding the photo */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/10" />
    </div>
  );
}