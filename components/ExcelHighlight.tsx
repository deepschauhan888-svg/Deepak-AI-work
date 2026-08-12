"use client";

import { motion } from "framer-motion";

export default function ExcelHighlight() {
  return (
    <section className="relative py-28 md:py-40 border-t border-ink-line overflow-hidden">
      <div className="absolute inset-0 plot-grid opacity-60 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow mb-8 text-center"
        >
          Excel &amp; Automation
        </motion.p>

        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4 md:gap-8 font-display text-[13vw] md:text-8xl leading-none"
          >
            <span className="text-paper">2 days</span>
            <span className="text-brass text-4xl md:text-6xl">→</span>
            <span className="text-brass italic">20 min</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 font-mono text-[12px] tracking-widest2 uppercase text-stone"
          >
            Selected complex Excel workflows
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 max-w-xl text-[16px] leading-relaxed text-paper-dim"
          >
            I have used AI to convert complicated, repetitive Excel work into much
            shorter, repeatable workflows. Some workflows that previously required
            roughly two days of manual effort can now be completed in around 20
            minutes in selected cases.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            {[
              "Complex formulas",
              "Data cleaning",
              "Classifications",
              "Automated calculations",
              "Repeatable reporting",
              "Valuation models",
              "Trackers",
              "Quality checks",
            ].map((tag) => (
              <span
                key={tag}
                className="font-mono text-[11px] tracking-wide text-paper-dim border border-ink-line px-3 py-1.5"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
