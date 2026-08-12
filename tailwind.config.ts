import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0C0E",
        "ink-raised": "#131417",
        "ink-line": "#242422",
        paper: "#F4F1E9",
        "paper-dim": "#B7B2A4",
        brass: "#B08D4F",
        "brass-soft": "#7D6B45",
        stone: "#6E6A5F",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.28em",
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, rgba(244,241,233,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(244,241,233,0.045) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
export default config;
