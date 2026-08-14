import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/team", label: "Team" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-[var(--color-cream)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <NavLink to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Logo />
          <span className="font-[var(--font-display)] leading-tight">
            <span className="block text-[15px] font-semibold tracking-tight text-[var(--color-ink)]">
              Gridtie Solar
            </span>
            <span className="block font-[var(--font-mono)] text-[9px] uppercase tracking-[0.2em] text-[var(--color-gold-deep)]">
              Private Limited
            </span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `font-[var(--font-body)] text-[14px] font-medium tracking-tight transition-colors ${
                  isActive
                    ? "text-[var(--color-gold-deep)]"
                    : "text-[var(--color-ink-soft)] hover:text-[var(--color-ink)]"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <NavLink
            to="/contact"
            className="rounded-full bg-[var(--color-ink)] px-5 py-2.5 font-[var(--font-body)] text-[14px] font-semibold text-[var(--color-cream)] transition-colors hover:bg-[var(--color-gold-deep)]"
          >
            Contact
          </NavLink>
        </div>

        <button
          className="text-[var(--color-ink)] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--color-line)] bg-[var(--color-cream)] px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 font-[var(--font-body)] text-[15px] font-medium ${
                    isActive
                      ? "bg-[var(--color-gold)]/15 text-[var(--color-gold-deep)]"
                      : "text-[var(--color-ink-soft)]"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-[var(--color-ink)] px-4 py-2.5 text-center font-[var(--font-body)] text-[15px] font-semibold text-[var(--color-cream)]"
            >
              Contact
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}