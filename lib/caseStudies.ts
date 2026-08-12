export type CaseStudy = {
  n: string;
  title: string;
  oneLine: string;
  input: string;
  process: string;
  output: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    n: "01",
    title: "Complex Excel Workflow",
    oneLine: "A two-day manual process, rebuilt as an automated workflow.",
    input: "A manual, repetitive Excel process — roughly two days of work.",
    process: "Map the logic → rebuild as formulas and rules → test edge cases → automate.",
    output: "Completed in around 20 minutes in selected cases.",
  },
  {
    n: "02",
    title: "Research → Premium Report",
    oneLine: "Research findings, shaped into a client-ready report.",
    input: "Research findings and an analytical direction.",
    process: "Structure → prompt → Claude → iterate → design → review.",
    output: "A premium, client-ready research report.",
  },
  {
    n: "03",
    title: "Valuation → Client-Ready Report",
    oneLine: "Valuation analysis, turned into a professional report.",
    input: "Property information and valuation analysis.",
    process: "Analysis → structure → narrative → design → review.",
    output: "A professional valuation report.",
  },
  {
    n: "04",
    title: "Idea → Initiative",
    oneLine: "A rough idea, structured into something worth discussing.",
    input: "An initial business or research idea.",
    process: "Brainstorm → challenge → refine → framework → presentation.",
    output: "A structured initiative, ready for discussion.",
  },
];
