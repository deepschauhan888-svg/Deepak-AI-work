"use client";

import { motion } from "framer-motion";

const PROCESS = ["Manual", "Logic", "AI-assisted", "Repeatable"];

export default function Proof() {
  return (
    <section id="proof" className="relative py-20 md:py-24 bg-ink plot-grid-dark overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow-dark mb-8 text-center"
        >
          Selected Complex Excel Workflows
        </motion.p>

        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-4 md:gap-8 font-display text-[13vw] md:text-7xl leading-none"
          >
            <span className="text-cream">2 days</span>
            <span className="text-gold-soft text-4xl md:text-5xl">→</span>
            <span className="text-gold-soft italic">20 min</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 max-w-xl text-[15px] leading-relaxed text-cream-dim"
          >
            Some workflows that previously required roughly two days of manual
            effort can now be completed in around 20 minutes in selected cases.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex items-center gap-3 md:gap-5 flex-wrap justify-center"
          >
            {PROCESS.map((step, i) => (
              <div key={step} className="flex items-center gap-3 md:gap-5">
                <span className="font-mono text-[12px] tracking-wide text-cream border border-ink-line px-4 py-2">
                  {step}
                </span>
                {i < PROCESS.length - 1 && <span className="text-gold-soft">→</span>}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
