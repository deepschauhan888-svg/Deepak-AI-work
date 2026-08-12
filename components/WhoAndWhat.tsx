"use client";

import { motion } from "framer-motion";

const FOCUS_AREAS = [
  "Real Estate Research",
  "Valuation & Analytics",
  "Data & Excel",
  "Report & Presentation Design",
  "AI & Automation",
  "Market Intelligence",
];

export default function WhoAndWhat() {
  return (
    <section id="about" className="relative py-20 md:py-24 bg-ivory">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow-light mb-10"
        >
          Who I Am
        </motion.p>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-6"
          >
            <p className="font-display text-2xl md:text-3xl leading-snug text-balance text-charcoal">
              I work in real estate research and analytics — sitting between data,
              market intelligence, valuation and communication.
            </p>
            <p className="mt-6 text-[16px] leading-relaxed text-charcoal-dim max-w-md">
              Most of my work means taking complex information and turning it into
              something someone can act on: an insight, a valuation, a report, a
              decision.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-6"
          >
            <p className="eyebrow-light mb-5">What I Work On</p>
            <ul className="border-t border-ivory-line">
              {FOCUS_AREAS.map((area) => (
                <li key={area} className="border-b border-ivory-line py-4 flex items-center justify-between">
                  <span className="font-display text-lg md:text-xl text-charcoal">{area}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
