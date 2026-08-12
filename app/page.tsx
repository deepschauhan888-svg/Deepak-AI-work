import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhoAndWhat from "@/components/WhoAndWhat";
import AIWorkflow from "@/components/AIWorkflow";
import SelectedWork from "@/components/SelectedWork";
import Proof from "@/components/Proof";
import CaseStudies from "@/components/CaseStudies";
import PhilosophyAndCTA from "@/components/PhilosophyAndCTA";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <WhoAndWhat />
      <AIWorkflow />
      <SelectedWork />
      <Proof />
      <CaseStudies />
      <PhilosophyAndCTA />
    </main>
  );
}
