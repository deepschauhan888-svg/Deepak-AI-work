"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WORKBENCH } from "@/lib/workbench";

export default function SelectedWork() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="work" className="relative py-16 md:py-20 bg-ivory">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow-light mb-8"
        >
          Selected Work
        </motion.p>

        <div className="border-t border-ivory-line">
          {WORKBENCH.map((item, i) => {
            const isActive = active === i;
            return (
              <div key={item.n} className="border-b border-ivory-line">
                <button
                  onClick={() => setActive(isActive ? null : i)}
                  aria-expanded={isActive}
                  className="w-full flex items-center gap-5 md:gap-8 py-4 md:py-5 text-left group"
                >
                  <span className="font-mono text-xs text-gold w-7 shrink-0">{item.n}</span>
                  <span
                    className={`font-display text-xl md:text-3xl transition-colors flex-1 ${
                      isActive ? "text-gold" : "text-charcoal group-hover:text-gold"
                    }`}
                  >
                    {item.title}
                  </span>
                  <motion.span
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-2xl text-charcoal-dim shrink-0"
                    aria-hidden
                  >
                    +
                  </motion.span>
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
                      <p className="pb-5 md:pl-[52px] max-w-xl text-[15px] leading-relaxed text-charcoal-dim">
                        {item.blurb}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
