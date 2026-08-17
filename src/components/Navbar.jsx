import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
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
    <header className="sticky top-0 z-50 border-b border-[var(--color-line)] bg-white shadow-[0_4px_24px_-8px_rgba(0,0,0,0.15)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <NavLink to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-12 w-20 shrink-0 items-center justify-center overflow-hidden">
            <Logo className="h-20 w-20 scale-150" />
          </span>
          <span className="font-[var(--font-display)] leading-tight">
            <span className="block text-[17px] font-semibold tracking-tight text-[var(--color-ink)]">
              Gridtie Solar
            </span>
            <span className="block font-[var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[#2d8557]">
              Private Limited
            </span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `rounded-md px-4 py-2 font-[var(--font-body)] text-[15px] font-semibold tracking-tight transition-colors ${
                  isActive
                    ? "bg-[#2d8557] text-white"
                    : "text-[var(--color-ink-soft)] hover:bg-[var(--color-cream-dim)] hover:text-[var(--color-ink)]"
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
            className="group inline-flex items-center gap-1.5 rounded-md bg-[#2d8557] px-5 py-2.5 font-[var(--font-body)] text-[15px] font-semibold text-white transition-colors hover:bg-[#1e5c38]"
          >
            Contact
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
        <div className="border-t border-[var(--color-line)] bg-white px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-1 pt-2">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 font-[var(--font-body)] text-[15px] font-medium ${
                    isActive ? "bg-[var(--color-cream-dim)] text-[#2d8557]" : "text-[var(--color-ink-soft)]"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-md bg-[#2d8557] px-4 py-2.5 text-center font-[var(--font-body)] text-[15px] font-semibold text-white"
            >
              Contact
              <ArrowUpRight size={16} />
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
