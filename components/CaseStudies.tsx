"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CASE_STUDIES } from "@/lib/caseStudies";

export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const current = CASE_STUDIES[active];

  return (
    <section id="case-studies" className="relative py-28 md:py-36 border-t border-ink-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow mb-12"
        >
          Real Workflow Case Studies
        </motion.p>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-4 flex md:flex-col gap-1 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {CASE_STUDIES.map((cs, i) => (
              <button
                key={cs.n}
                onClick={() => setActive(i)}
                className={`text-left shrink-0 md:shrink px-4 py-4 border-l-2 transition-colors whitespace-nowrap md:whitespace-normal ${
                  active === i
                    ? "border-brass text-paper"
                    : "border-ink-line text-paper-dim hover:text-paper"
                }`}
              >
                <span className="font-mono text-[11px] text-brass mr-3">{cs.n}</span>
                <span className="font-display text-lg">{cs.title}</span>
              </button>
            ))}
          </div>

          <div className="md:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.n}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                className="border border-ink-line p-8 md:p-10"
              >
                <h3 className="font-display text-3xl md:text-4xl text-paper">{current.title}</h3>
                <dl className="mt-8 grid sm:grid-cols-3 gap-6">
                  <div>
                    <dt className="eyebrow mb-2">Input</dt>
                    <dd className="text-[14px] leading-relaxed text-paper-dim">{current.input}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow mb-2">Process</dt>
                    <dd className="text-[14px] leading-relaxed text-paper-dim">{current.process}</dd>
                  </div>
                  <div>
                    <dt className="eyebrow mb-2">Output</dt>
                    <dd className="text-[14px] leading-relaxed text-paper">{current.output}</dd>
                  </div>
                </dl>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
