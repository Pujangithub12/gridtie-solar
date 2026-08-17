import { NavLink } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-r from-[#1e5c38] via-[#2d8557] to-[#1e5c38]">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10">
                <Logo className="h-5 w-5" />
              </span>
              <span className="font-[var(--font-display)] text-[15px] font-semibold text-white">
                GridTie Solar
              </span>
            </div>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-white">
              Gridtie solar PV design, installation, and net-metering
              services for homes and businesses.
            </p>
          </div>

          <div>
            <h3 className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-gold-glow)]">
              Sitemap
            </h3>
            <ul className="mt-4 space-y-2.5">
              {[
                ["About", "/about"],
                ["Services", "/services"],
                ["Projects", "/projects"],
                ["Team", "/team"],
                ["Contact", "/contact"],
              ].map(([label, to]) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className="text-[14px] text-white transition-colors hover:text-white"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-gold-glow)]">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3 text-[14px] text-white">
              <li className="flex gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[var(--color-gold-glow)]" />
                2nd Floor, Trade Tower, Thapathali, Kathmandu, Nepal
              </li>
              <li className="flex gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0 text-[var(--color-gold-glow)]" />
                <a href="mailto:info@example.com" className="hover:text-white">
                  @example.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 font-[var(--font-mono)] text-[12px] text-white sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Grid Tie Solar. All rights reserved.</p>
          <p>......</p>
        </div>
      </div>
    </footer>
  );
}