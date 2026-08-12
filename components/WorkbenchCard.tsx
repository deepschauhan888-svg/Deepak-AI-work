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
      className="group text-left border border-ink-line p-6 md:p-7 h-full flex flex-col justify-between hover:border-brass transition-colors bg-ink-raised/40"
    >
      <div>
        <span className="font-mono text-[11px] text-brass">{item.n}</span>
        <h3 className="font-display text-xl md:text-2xl mt-3 text-paper group-hover:text-brass transition-colors">
          {item.title}
        </h3>
        <p className="mt-3 text-[14px] leading-relaxed text-paper-dim">{item.tagline}</p>
      </div>
      <span className="mt-6 text-[12px] tracking-widest2 uppercase text-stone group-hover:text-brass transition-colors">
        View →
      </span>
    </motion.button>
  );
}
