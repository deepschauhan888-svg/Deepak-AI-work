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
    <section className="relative py-16 md:py-20 bg-ivory">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
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
            className="fixed inset-0 z-[60] bg-charcoal/70 backdrop-blur-sm flex items-end md:items-center justify-center p-0 md:p-6"
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
              className="bg-ivory border border-ivory-line max-w-xl w-full max-h-[85vh] overflow-y-auto p-8 md:p-10"
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className="font-mono text-[11px] text-gold">{active.n}</span>
                  <h3 className="font-display text-3xl md:text-4xl mt-3 text-charcoal">
                    {active.title}
                  </h3>
                </div>
                <button
                  onClick={() => setOpenIndex(null)}
                  aria-label="Close"
                  className="text-2xl text-charcoal-dim hover:text-gold shrink-0 mt-1"
                >
                  ×
                </button>
              </div>

              <p className="mt-6 text-[17px] leading-relaxed text-charcoal">{active.blurb}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
