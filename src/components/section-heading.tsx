"use client";

import { motion } from "framer-motion";

type Props = {
  index?: string;
  label: string;
  line1: string;
  line2?: string;
  align?: "left" | "center";
  subheading?: string;
  dark?: boolean;
};

export function SectionHeading({
  index,
  label,
  line1,
  line2,
  align = "left",
  subheading,
  dark = false,
}: Props) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "text-center" : "text-left"}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`section-label ${dark ? "on-dark" : ""} ${
          isCenter ? "mx-auto justify-center" : ""
        }`}
      >
        {index && (
          <>
            <span>{index}</span>
            <span className="section-label-dash" aria-hidden="true" />
          </>
        )}
        <span>{label}</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
        className={`display-headline ${dark ? "on-dark" : ""} mt-5 text-4xl sm:text-5xl lg:text-[3.4rem] ${
          isCenter ? "mx-auto" : ""
        }`}
      >
        {line1}
        {line2 && (
          <>
            {" "}
            <span className="accent">{line2}</span>
          </>
        )}
      </motion.h2>

      {subheading && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
          className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${
            dark ? "text-cream/85" : "text-slate-soft"
          } ${isCenter ? "mx-auto" : ""}`}
        >
          {subheading}
        </motion.p>
      )}
    </div>
  );
}
