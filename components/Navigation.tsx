"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import { NAV_ITEMS, LINKEDIN_URL } from "@/lib/constants";

export default function Navigation() {
  const { scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled ? "bg-ivory/90 backdrop-blur-md border-b border-ivory-line" : "bg-transparent"
        }`}
      >
        <motion.div className="h-[2px] bg-gold origin-left" style={{ scaleX: scrollYProgress }} />
        <nav className="max-w-6xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <a href="#top" className="font-display text-sm tracking-wide text-charcoal" aria-label="Back to top">
            D.C.
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-[13px] tracking-wide text-charcoal-dim hover:text-charcoal transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center border border-ivory-line px-4 py-2 text-[12px] tracking-widest uppercase text-charcoal hover:border-gold hover:text-gold transition-colors"
          >
            LinkedIn
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden flex flex-col justify-center items-end gap-[5px] w-8 h-8"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <span className={`h-[1.5px] bg-charcoal transition-all duration-300 ${open ? "w-6 rotate-45 translate-y-[6.5px]" : "w-6"}`} />
            <span className={`h-[1.5px] bg-charcoal transition-all duration-300 ${open ? "opacity-0" : "w-4"}`} />
            <span className={`h-[1.5px] bg-charcoal transition-all duration-300 ${open ? "w-6 -rotate-45 -translate-y-[6.5px]" : "w-6"}`} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-ivory md:hidden flex flex-col justify-center px-8"
          >
            <ul className="flex flex-col gap-6">
              {NAV_ITEMS.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <a href={item.href} onClick={() => setOpen(false)} className="font-display text-3xl text-charcoal">
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * NAV_ITEMS.length }}
              >
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="text-gold text-sm tracking-widest uppercase">
                  Connect on LinkedIn
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
