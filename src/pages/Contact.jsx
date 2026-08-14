import { useState } from "react";
import { Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";
import Eyebrow from "../components/Eyebrow";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <div>
      
      <section className="border-b border-[var(--color-line)] px-6 py-20 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow>Get in Touch</Eyebrow>

          <h1 className="mx-auto mt-5 max-w-2xl text-balance font-[var(--font-display)] text-[41px] font-semibold leading-tight text-[var(--color-ink)] sm:text-[50px]">
            Let's scope your project.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-[var(--color-ink-soft)]">
            Tell us about your site, roof or land area, and typical load-
            we'll get back with next steps.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">

          {/* Contact Details */}
          <div>
            <h2 className="font-[var(--font-display)] text-[22px] font-semibold text-[var(--color-ink)]">
              Contact Details
            </h2>

            <ul className="mt-6 space-y-5">

              {/* Address */}
              <li className="flex gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[var(--color-gold-deep)]"
                />

                <div>
                  <div className="text-[15px] font-medium text-[var(--color-ink)]">
                    Registered Office
                  </div>

                  <div className="text-[14px] text-[var(--color-ink-soft)]">
                    Ward No. 11, Thapathali, Kathmandu, Nepal
                  </div>
                </div>
              </li>

              {/* Email */}
              <li className="flex gap-3">
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-[var(--color-gold-deep)]"
                />

                <div>
                  <div className="text-[15px] font-medium text-[var(--color-ink)]">
                    Email
                  </div>

                  <div className="text-[14px] text-[var(--color-ink-soft)]">
                    <a
                      href="mailto:info.gridtiesolar@gmail.com"
                      className="hover:text-[var(--color-gold-deep)]"
                    >
                      @gmail.com
                    </a>
                  </div>
                </div>
              </li>

              {/* Phone */}
              <li className="flex gap-3">
                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-[var(--color-gold-deep)]"
                />

                <div>
                  <div className="text-[15px] font-medium text-[var(--color-ink)]">
                    Phone
                  </div>

                  <div className="text-[14px] text-[var(--color-ink-soft)]">
                    <a
                      href="tel:+9770000000000"
                      className="hover:text-[var(--color-gold-deep)]"
                    >
                      +977 
                    </a>
                  </div>
                </div>
              </li>
            </ul>

            {/* Sister Company */}
            <p className="mt-8 rounded-xl border border-[var(--color-line)] bg-[var(--color-cream-dim)] px-4 py-4 text-[13px] leading-relaxed text-[var(--color-ink-soft)]">
              Sister company of Janda Devi Nepal Energy Pvt. Ltd. (JDNE) —
              visit{" "}
              <a
                href="https://jdne.com.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-[var(--color-gold-deep)] underline underline-offset-2 hover:text-[var(--color-gold)]"
              >
                JDNE website
              </a>
              .
            </p>
          </div>

          {/* Contact Form */}
          <div className="rounded-2xl border border-[var(--color-line)] bg-white/40 p-8">
            {sent ? (
              /* Success Message */
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <CheckCircle2
                  size={36}
                  className="text-[var(--color-gold-deep)]"
                />

                <h3 className="mt-4 font-[var(--font-display)] text-[20px] font-semibold text-[var(--color-ink)]">
                  Message received
                </h3>

                <p className="mt-2 max-w-xs text-[14px] text-[var(--color-ink-soft)]">
                  Thanks, {form.name || "there"} — we'll follow up at{" "}
                  {form.email || "your email"} shortly.
                </p>

                <button
                  onClick={() => {
                    setSent(false);
                    setForm({
                      name: "",
                      email: "",
                      phone: "",
                      message: "",
                    });
                  }}
                  className="mt-6 rounded-full border border-[var(--color-line)] px-5 py-2 font-[var(--font-mono)] text-[13px] text-[var(--color-ink-soft)] hover:border-[var(--color-gold-deep)]/50"
                >
                  Send another message
                </button>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="space-y-5">

                <h2 className="font-[var(--font-display)] text-[19px] font-semibold text-[var(--color-ink)]">
                  Contact Us
                </h2>

                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <label className="block">
                    <span className="font-[var(--font-mono)] text-[12px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">
                      Full name
                    </span>

                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          name: e.target.value,
                        })
                      }
                      className="mt-2 w-full rounded-lg border border-[var(--color-line)] bg-white/60 px-4 py-2.5 text-[15px] text-[var(--color-ink)] outline-none focus:border-[var(--color-gold-deep)] focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
                      placeholder="Your name"
                    />
                  </label>

                  <label className="block">
                    <span className="font-[var(--font-mono)] text-[12px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">
                      Email
                    </span>

                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          email: e.target.value,
                        })
                      }
                      className="mt-2 w-full rounded-lg border border-[var(--color-line)] bg-white/60 px-4 py-2.5 text-[15px] text-[var(--color-ink)] outline-none focus:border-[var(--color-gold-deep)] focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
                      placeholder="you@company.com"
                    />
                  </label>

                </div>

                {/* Phone */}
                <label className="block">
                  <span className="font-[var(--font-mono)] text-[12px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">
                    Phone number
                  </span>

                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        phone: e.target.value,
                      })
                    }
                    className="mt-2 w-full rounded-lg border border-[var(--color-line)] bg-white/60 px-4 py-2.5 text-[15px] text-[var(--color-ink)] outline-none focus:border-[var(--color-gold-deep)] focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
                    placeholder="+977 ..."
                  />
                </label>

                {/* Project Details */}
                <label className="block">
                  <span className="font-[var(--font-mono)] text-[12px] uppercase tracking-[0.1em] text-[var(--color-ink-soft)]">
                    Project details
                  </span>

                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        message: e.target.value,
                      })
                    }
                    className="mt-2 w-full resize-none rounded-lg border border-[var(--color-line)] bg-white/60 px-4 py-2.5 text-[15px] text-[var(--color-ink)] outline-none focus:border-[var(--color-gold-deep)] focus-visible:ring-2 focus-visible:ring-[var(--color-gold)]"
                    placeholder="Roof/land area, approximate load, location, timeline..."
                  />
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full rounded-full bg-[var(--color-ink)] px-6 py-3.5 text-[15px] font-semibold text-[var(--color-cream)] transition-colors hover:bg-[var(--color-gold-deep)] sm:w-auto"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}