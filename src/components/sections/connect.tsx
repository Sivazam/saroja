"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, PartyPopper, Send } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/section-heading";

export function Connect() {
  const c = profile.connect;
  return (
    <section id="connect" className="bg-cream py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <SectionHeading
          index={c.index}
          label={c.label}
          line1={c.headingLine1}
          line2={c.headingLine2}
          subheading={c.subheading}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1fr]">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            <ContactRow icon={MapPin} label="Address" lines={c.address} />
            <ContactRow icon={Phone} label="Phone" lines={c.phones} />
            <ContactRow icon={Mail} label="Email" lines={[c.email]} />
            <ContactRow
              icon={PartyPopper}
              label="Party & Constituency"
              lines={[c.party, c.constituency]}
            />
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-line bg-white p-6 shadow-[0_18px_44px_-26px_rgba(14,42,34,0.35)] lg:p-8"
          >
            <h3 className="font-serif text-xl font-bold text-forest">
              Send a message
            </h3>
            <p className="mt-1 text-sm text-slate-soft">
              Invite Saroja to an event, request support, or join the movement.
            </p>
            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const data = new FormData(form);
                const subject = encodeURIComponent(
                  `Message from ${data.get("name") || "a supporter"}`
                );
                const body = encodeURIComponent(
                  `${data.get("message") || ""}\n\n— ${data.get("name") || ""}\n${
                    data.get("email") || ""
                  }`
                );
                window.location.href = `mailto:${c.email}?subject=${subject}&body=${body}`;
              }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field name="name" label="Full Name" placeholder="Your name" />
                <Field
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>
              <Field
                name="subject"
                label="Subject"
                placeholder="How can we help?"
              />
              <div>
                <label className="mb-1.5 block text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-gold">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Your message…"
                  className="w-full resize-none rounded-xl border border-line bg-cream-warm/40 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-slate-soft/60 focus:border-gold focus:bg-white"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 text-sm font-semibold text-cream shadow-[0_14px_30px_-10px_rgba(27,77,62,0.6)] transition-all hover:bg-forest-deep sm:w-auto"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  lines,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  lines: string[];
}) {
  return (
    <div className="lift flex items-start gap-4 rounded-2xl border border-line bg-white/70 p-5">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-forest text-cream">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-gold">
          {label}
        </div>
        <div className="mt-1 space-y-0.5">
          {lines.map((l, i) => (
            <div key={i} className="text-sm font-medium text-ink">
              {l}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Field({
  name,
  label,
  type = "text",
  placeholder,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-gold">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-cream-warm/40 px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-slate-soft/60 focus:border-gold focus:bg-white"
      />
    </div>
  );
}
