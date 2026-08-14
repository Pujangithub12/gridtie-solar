import { NavLink } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] bg-[#cfe4d2]">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Logo />
              <span className="font-[var(--font-display)] text-[15px] font-semibold text-[var(--color-ink)]">
                GridTie Solar
              </span>
            </div>
            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-[var(--color-ink-soft)]">
              Gridtie solar PV design, installation, and net-metering
              services for homes and businesses.
            </p>
          </div>

          <div>
            <h3 className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-gold-deep)]">
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
                    className="text-[14px] text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-gold-deep)]"
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-[var(--font-mono)] text-[11px] uppercase tracking-[0.18em] text-[var(--color-gold-deep)]">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3 text-[14px] text-[var(--color-ink-soft)]">
              <li className="flex gap-2.5">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[var(--color-gold-deep)]" />
                Ward No. 11, Thapathali, Kathmandu, Nepal
              </li>
              <li className="flex gap-2.5">
                <Mail size={16} className="mt-0.5 shrink-0 text-[var(--color-gold-deep)]" />
                <a href="mailto:info@example.com" className="hover:text-[var(--color-gold-deep)]">
                  @example.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[var(--color-line)] pt-6 font-[var(--font-mono)] text-[12px] text-[var(--color-ink-soft)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Grid Tie Solar. All rights reserved.</p>
          <p>......</p>
        </div>
      </div>
    </footer>
  );
}