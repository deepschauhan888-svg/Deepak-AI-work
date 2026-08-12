export type CaseStudy = {
  n: string;
  title: string;
  input: string;
  process: string;
  output: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    n: "01",
    title: "Complex Excel Workflow",
    input: "A manual, repetitive Excel process — roughly two days of work.",
    process: "Map the logic → rebuild as formulas and rules → test edge cases → automate.",
    output: "An AI-assisted workflow completed in around 20 minutes in selected cases.",
  },
  {
    n: "02",
    title: "Research → Premium Report",
    input: "Research findings and an analytical direction.",
    process: "Structure → prompt → Claude → iterate → design → review.",
    output: "A premium, client-ready research report.",
  },
  {
    n: "03",
    title: "Valuation → Client-Ready Report",
    input: "Property information and valuation analysis.",
    process: "Analysis → structure → narrative → design → review.",
    output: "A professional valuation report.",
  },
  {
    n: "04",
    title: "Idea → Initiative",
    input: "An initial business or research idea.",
    process: "Brainstorm → challenge → refine → framework → presentation.",
    output: "A structured initiative, ready for discussion.",
  },
  {
    n: "05",
    title: "Data → Story",
    input: "Complex market data.",
    process: "Analysis → insight → narrative → charts / maps → presentation.",
    output: "A decision-ready market story.",
  },
];
