"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight active nav link
  useEffect(() => {
    const ids = profile.nav.map((n) => n.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 3.1 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-line/80 bg-cream/85 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(14,42,34,0.18)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-10">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-forest/40 bg-cream shadow-sm lg:h-11 lg:w-11">
            <span className="font-serif text-xl font-bold text-forest">S</span>
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-base font-bold text-forest lg:text-lg">
              Saroja Polasapalli
            </span>
            <span className="block text-[0.55rem] font-semibold uppercase tracking-[0.24em] text-gold-text lg:text-[0.62rem]">
              Mayor · Leader · Reformer
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {profile.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                active === item.href
                  ? "text-forest"
                  : "text-slate-soft hover:text-forest"
              }`}
            >
              {active === item.href && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-cream-warm"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <a
            href="#connect"
            className="hidden items-center gap-2 rounded-full bg-forest px-5 py-2.5 text-sm font-semibold text-cream shadow-[0_8px_22px_-8px_rgba(27,77,62,0.6)] transition-all hover:bg-forest-deep hover:shadow-[0_12px_28px_-8px_rgba(27,77,62,0.7)] sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            Get In Touch
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-cream text-forest lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-line bg-cream/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-4 sm:px-6">
              {profile.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-ink hover:bg-cream-warm"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#connect"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-forest px-5 py-3 text-sm font-semibold text-cream"
              >
                <Phone className="h-4 w-4" />
                Get In Touch
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
