export type WorkbenchItem = {
  n: string;
  title: string;
  blurb: string;
  tagline?: string;
  aiHelpsWith?: string;
  humanLed?: string;
};

export const WORKBENCH: WorkbenchItem[] = [
  {
    n: "01",
    title: "Research Reports",
    blurb:
      "The research and analytical direction are mine. AI helps structure the report, sharpen the narrative and cut repetition — it doesn't conduct the research independently.",
  },
  {
    n: "02",
    title: "Valuation & Analytics",
    blurb:
      "Valuation judgement stays human-led. AI supports the writing, the comparable-property storytelling and the formatting of the final output.",
  },
  {
    n: "03",
    title: "Excel & Automation",
    blurb:
      "Complex formulas, data cleaning, classification logic and repeatable reporting. This is where AI has changed my workflow the most — see the proof below.",
  },
  {
    n: "04",
    title: "Report & Presentation Design",
    blurb:
      "I write a detailed prompt describing what a report or deck needs to communicate, then use AI design tools to rapidly generate and iterate the visual direction.",
  },
  {
    n: "05",
    title: "Market Intelligence & Visualisation",
    blurb:
      "The market read — which corridors and locations matter — is mine. AI helps design how that read is shown: market maps, corridor and connectivity visuals.",
  },
  {
    n: "06",
    title: "AI Workflows",
    blurb:
      "Every piece of work moves through the same loop — think, refine, build, iterate, automate, deliver. Brainstorming and prompting sit inside that loop rather than as separate steps.",
  },
];
