"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CASE_STUDIES } from "@/lib/caseStudies";

export default function CaseStudies() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="relative py-16 md:py-20 bg-ivory">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow-light mb-8"
        >
          Case Studies
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CASE_STUDIES.map((cs, i) => {
            const isActive = active === i;
            return (
              <motion.div
                key={cs.n}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="border border-ivory-line"
              >
                <button
                  onClick={() => setActive(isActive ? null : i)}
                  aria-expanded={isActive}
                  className="w-full text-left p-6 flex flex-col gap-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] text-gold">{cs.n}</span>
                    <motion.span
                      animate={{ rotate: isActive ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-xl text-charcoal-dim"
                      aria-hidden
                    >
                      +
                    </motion.span>
                  </div>
                  <span className="font-display text-xl md:text-2xl text-charcoal">{cs.title}</span>
                  <span className="text-[14px] text-charcoal-dim">{cs.oneLine}</span>
                </button>

                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <dl className="px-6 pb-6 grid grid-cols-1 gap-4 border-t border-ivory-line pt-5">
                        <div>
                          <dt className="eyebrow-light mb-1.5">Input</dt>
                          <dd className="text-[13px] leading-relaxed text-charcoal-dim">{cs.input}</dd>
                        </div>
                        <div>
                          <dt className="eyebrow-light mb-1.5">Process</dt>
                          <dd className="text-[13px] leading-relaxed text-charcoal-dim">{cs.process}</dd>
                        </div>
                        <div>
                          <dt className="eyebrow-light mb-1.5">Output</dt>
                          <dd className="text-[13px] leading-relaxed text-charcoal">{cs.output}</dd>
                        </div>
                      </dl>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
