"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="relative py-32 md:py-48 border-t border-ink-line overflow-hidden">
      <div className="absolute inset-0 plot-grid opacity-40 pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-6 md:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display italic text-3xl md:text-5xl leading-tight text-balance text-paper"
        >
          AI doesn&rsquo;t replace the person doing the work.
          <br />
          It changes what that person is capable of doing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 flex flex-col sm:flex-row justify-center gap-10 sm:gap-16 text-[16px] text-paper-dim"
        >
          <p>
            I don&rsquo;t use AI to think less.
            <br />I use it to think further.
          </p>
          <p>
            The idea is human.
            <br />
            <span className="text-brass">The leverage is AI.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
