"use client";

import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, ArrowUp } from "lucide-react";
import { profile } from "@/data/profile";

export function SiteFooter() {
  const c = profile.connect;
  return (
    <footer className="bg-forest-ink text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-forest">
                <span className="font-serif text-xl font-bold text-gold">S</span>
              </span>
              <div>
                <div className="font-serif text-lg font-bold text-cream">
                  {profile.fullName}
                </div>
                <div className="text-[0.55rem] font-semibold uppercase tracking-[0.24em] text-gold-bright">
                  {profile.tagline}
                </div>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/85">
              India&apos;s 4th &amp; Andhra Pradesh&apos;s youngest Mayor. A journey of
              courage, conviction, and service to the people of Andhra Pradesh.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#connect"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-bright/40 bg-forest/50 text-gold-bright transition-colors hover:bg-gold-bright hover:text-forest-ink"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-gold-bright">
              Explore
            </h4>
            <ul className="mt-4 space-y-2.5">
              {profile.nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-cream/85 transition-colors hover:text-gold-bright"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-gold-bright">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-cream/90">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-bright" />
                <span>{c.address.join(", ")}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-gold-bright" />
                <a href={`tel:${c.phones[0]}`} className="hover:text-gold-bright">
                  {c.phones[0]}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-gold-bright" />
                <a href={`mailto:${c.email}`} className="hover:text-gold-bright">
                  {c.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Affiliation */}
          <div>
            <h4 className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-gold-bright">
              Affiliation
            </h4>
            <div className="mt-4 rounded-xl border border-cream/15 bg-forest/50 p-4">
              <div className="text-[0.55rem] font-semibold uppercase tracking-[0.18em] text-gold-bright">
                Presently serving
              </div>
              <div className="mt-1 font-serif text-base font-bold text-cream">
                {c.party}
              </div>
              <div className="mt-0.5 text-xs text-cream/75">{c.constituency}</div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-cream/15 pt-6 sm:flex-row">
          <p className="text-xs text-cream/75">
            © {new Date().getFullYear()} {profile.fullName}. All rights reserved.
          </p>
          <p className="text-xs text-cream/75">
            Built with integrity · A movement of service
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-1.5 rounded-full bg-gold-bright px-4 py-2 text-xs font-bold text-forest-ink transition-colors hover:bg-gold"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
