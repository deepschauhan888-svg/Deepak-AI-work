"use client";

import { motion } from "framer-motion";
import type { WorkbenchItem } from "@/lib/workbench";

export default function WorkbenchCard({
  item,
  index,
  onOpen,
}: {
  item: WorkbenchItem;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      onClick={onOpen}
      className="group text-left border border-ivory-line p-6 md:p-7 h-full flex flex-col justify-between hover:border-gold transition-colors bg-ivory"
    >
      <div>
        <span className="font-mono text-[11px] text-gold">{item.n}</span>
        <h3 className="font-display text-xl md:text-2xl mt-3 text-charcoal group-hover:text-gold transition-colors">
          {item.title}
        </h3>
        <p className="mt-3 text-[14px] leading-relaxed text-charcoal-dim">{item.blurb}</p>
      </div>
      <span className="mt-6 text-[12px] tracking-widest uppercase text-charcoal-dim group-hover:text-gold transition-colors">
        View →
      </span>
    </motion.button>
  );
}
