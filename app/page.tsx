import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatIDo from "@/components/WhatIDo";
import AIWorkflow from "@/components/AIWorkflow";
import AIWorkbench from "@/components/AIWorkbench";
import ExcelHighlight from "@/components/ExcelHighlight";
import PromptDemo from "@/components/PromptDemo";
import CaseStudies from "@/components/CaseStudies";
import Impact from "@/components/Impact";
import Philosophy from "@/components/Philosophy";
import ToolStack from "@/components/ToolStack";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <WhatIDo />
      <AIWorkflow />
      <AIWorkbench />
      <ExcelHighlight />
      <PromptDemo />
      <CaseStudies />
      <Impact />
      <Philosophy />
      <ToolStack />
      <Footer />
    </main>
  );
}
