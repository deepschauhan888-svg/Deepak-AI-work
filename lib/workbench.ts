export type WorkbenchItem = {
  n: string;
  title: string;
  tagline: string;
  aiHelpsWith: string[];
  humanLed: string;
};

export const WORKBENCH: WorkbenchItem[] = [
  {
    n: "01",
    title: "Research Reports",
    tagline: "Turning research findings into a sharper final read.",
    aiHelpsWith: [
      "Report structures and executive summaries",
      "Forewords and research narratives",
      "Insight extraction and headline development",
      "Editing, simplifying and cutting repetition",
    ],
    humanLed:
      "AI doesn't conduct the research independently. The research context, data and analytical direction come from my work — AI helps transform that work into a sharper final product.",
  },
  {
    n: "02",
    title: "Valuation Reports",
    tagline: "Client-ready valuation writing, built on my analysis.",
    aiHelpsWith: [
      "Valuation report structure and writing",
      "Comparable-property storytelling",
      "Market context and executive summaries",
      "Formatting and quality review",
    ],
    humanLed:
      "The valuation judgement — the numbers, the comparables, the conclusion — stays human-led. AI supports how that judgement is written and presented.",
  },
  {
    n: "03",
    title: "Report Design",
    tagline: "Prompting AI design tools to build the visual direction.",
    aiHelpsWith: [
      "Page layouts and information hierarchy",
      "Charts, maps and visual concepts",
      "Premium report structures",
      "Rapid iteration on visual direction",
    ],
    humanLed:
      "I take a research requirement, decide what the final report should communicate, write a detailed prompt, and use AI design tools to rapidly generate and iterate the visual direction. The direction is mine — AI doesn't independently understand the research.",
  },
  {
    n: "04",
    title: "Presentation Design",
    tagline: "From research content to executive-ready decks.",
    aiHelpsWith: [
      "Executive presentation structures",
      "Slide narratives and visual stories",
      "Chart and layout concepts",
      "Fast iteration across drafts",
    ],
    humanLed:
      "The story a deck needs to tell comes from understanding the audience and the research — I set that direction, then use AI to build and refine the execution.",
  },
  {
    n: "05",
    title: "Articles & Content",
    tagline: "Research-led writing, edited and sharpened faster.",
    aiHelpsWith: [
      "Article structures and editorial angles",
      "Headlines and rewriting",
      "Simplifying dense findings",
      "LinkedIn content and visual concepts",
    ],
    humanLed:
      "Domain expertise and research come first. AI helps improve speed and presentation — not the substance of the argument.",
  },
  {
    n: "06",
    title: "Excel Models",
    tagline: "Analytical models built to hold up under scrutiny.",
    aiHelpsWith: [
      "Complex formula logic",
      "Valuation and analytical models",
      "Data structuring and classification logic",
      "Quality checks and edge-case handling",
    ],
    humanLed:
      "I define what the model needs to calculate and why. AI helps build and stress-test the logic that gets it there.",
  },
  {
    n: "07",
    title: "Excel Automation",
    tagline: "Repetitive workbooks turned into repeatable workflows.",
    aiHelpsWith: [
      "Data cleaning and classification",
      "Repeatable reporting workflows",
      "Trackers and processing pipelines",
      "Automated calculations",
    ],
    humanLed:
      "Some workflows that previously required roughly two days of manual effort can now be completed in around 20 minutes in selected cases — see the highlight below.",
  },
  {
    n: "08",
    title: "Brainstorming & Ideation",
    tagline: "AI as a second brain, not a first source of ideas.",
    aiHelpsWith: [
      "Challenging the initial idea",
      "Identifying gaps and alternatives",
      "Structuring the concept into a framework",
      "Turning rough thinking into something presentable",
    ],
    humanLed:
      "Many of the ideas I work on start with me. AI is often my second brain — not my first source of ideas.",
  },
  {
    n: "09",
    title: "Prompt Engineering",
    tagline: "How the problem is framed decides the quality of the output.",
    aiHelpsWith: [
      "Turning a rough requirement into a precise instruction",
      "Sequencing multi-step requests",
      "Tool-specific prompting, especially for Claude",
      "Iterating a prompt against the output it produces",
    ],
    humanLed:
      "Prompt writing is itself part of my workflow. High-quality AI output depends heavily on how the problem is framed.",
  },
  {
    n: "10",
    title: "Maps & Visualisation",
    tagline: "Location intelligence, designed to be read at a glance.",
    aiHelpsWith: [
      "Market and micro-market maps",
      "Infrastructure and metro connectivity visuals",
      "Corridor analysis",
      "Location-led storytelling",
    ],
    humanLed:
      "The market read — which corridors matter, what the data means — is mine. AI helps design how that read is shown.",
  },
  {
    n: "11",
    title: "Internal Tools",
    tagline: "Recurring problems, turned into reusable tools.",
    aiHelpsWith: [
      "Prototyping small internal tools",
      "Research and valuation trackers",
      "Data processing utilities",
      "Reporting workflows",
    ],
    humanLed:
      "When a task repeats often enough, I use AI to help prototype a tool for it rather than redo the manual work each time.",
  },
  {
    n: "12",
    title: "Workflow Redesign",
    tagline: "Rebuilding how a piece of work gets done, not just doing it faster.",
    aiHelpsWith: [
      "Mapping where time actually goes in a workflow",
      "Identifying which steps AI can carry",
      "Redesigning the sequence end to end",
      "Documenting the new workflow so it repeats",
    ],
    humanLed:
      "The goal isn't a faster version of the old process — it's deciding what the process should be once AI is part of it.",
  },
];
