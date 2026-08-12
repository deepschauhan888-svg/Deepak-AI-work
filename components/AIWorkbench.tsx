"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WORKBENCH } from "@/lib/workbench";
import WorkbenchCard from "./WorkbenchCard";

export default function AIWorkbench() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = openIndex !== null ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [openIndex]);

  const active = openIndex !== null ? WORKBENCH[openIndex] : null;

  return (
    <section id="workbench" className="relative py-28 md:py-36 border-t border-ink-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow mb-6"
        >
          My AI Workbench
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl md:text-5xl max-w-2xl text-balance"
        >
          Where I actually use AI in my day-to-day work.
        </motion.h2>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {WORKBENCH.map((item, i) => (
            <WorkbenchCard key={item.n} item={item} index={i} onOpen={() => setOpenIndex(i)} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink/80 backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-6"
            onClick={() => setOpenIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-ink border border-ink-line max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 md:p-12"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className="font-mono text-[11px] text-brass">{active.n}</span>
                  <h3 className="font-display text-3xl md:text-4xl mt-3 text-paper">
                    {active.title}
                  </h3>
                </div>
                <button
                  onClick={() => setOpenIndex(null)}
                  aria-label="Close"
                  className="text-2xl text-paper-dim hover:text-brass shrink-0 mt-1"
                >
                  ×
                </button>
              </div>

              <p className="mt-6 text-[17px] leading-relaxed text-paper">{active.tagline}</p>

              <div className="mt-8">
                <p className="eyebrow mb-4">AI helps with</p>
                <ul className="space-y-3">
                  {active.aiHelpsWith.map((point) => (
                    <li key={point} className="flex gap-3 text-[15px] leading-relaxed text-paper-dim">
                      <span className="text-brass mt-[3px]">—</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 border-t border-ink-line pt-6">
                <p className="eyebrow mb-3">What stays human-led</p>
                <p className="text-[15px] leading-relaxed text-paper-dim">{active.humanLed}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
