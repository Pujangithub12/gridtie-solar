import { useEffect, useState } from "react";

/**
 * Renders a grid of small rectangles reminiscent of PV cells on a solar
 * module. A handful of cells "catch the light" in sequence on mount.
 * This is the site's signature visual device, used in the hero and as a
 * quiet structural accent elsewhere.
 */
export default function PVGrid({ rows = 6, cols = 10, className = "" }) {
  const [lit, setLit] = useState([]);

  useEffect(() => {
    const total = rows * cols;
    const litCount = Math.max(3, Math.round(total * 0.08));
    const indices = new Set();
    while (indices.size < litCount) {
      indices.add(Math.floor(Math.random() * total));
    }
    const arr = Array.from(indices);
    let i = 0;
    const timers = [];
    arr.forEach((idx, order) => {
      const t = setTimeout(() => {
        setLit((prev) => [...prev, idx]);
      }, order * 180 + 300);
      timers.push(t);
    });
    return () => timers.forEach(clearTimeout);
  }, [rows, cols]);

  return (
    <div
      className={`grid gap-[3px] ${className}`}
      style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      aria-hidden="true"
    >
      {Array.from({ length: rows * cols }).map((_, idx) => (
        <div
          key={idx}
          className="aspect-square rounded-[1px] transition-colors duration-700"
          style={{
            backgroundColor: lit.includes(idx)
              ? "var(--color-gold-glow)"
              : "var(--color-ink)",
            opacity: lit.includes(idx) ? 1 : 0.08,
          }}
        />
      ))}
    </div>
  );
}
