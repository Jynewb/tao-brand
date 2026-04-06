import { Hero } from "@/components/sections/Hero";
import { Manifesto } from "@/components/sections/Manifesto";
import { MOSIntro } from "@/components/sections/MOSIntro";
import { MOSModules } from "@/components/sections/MOSModules";
import { MOSMockup } from "@/components/sections/MOSMockup";
import { ServicePillars } from "@/components/sections/ServicePillars";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { GrowthStory } from "@/components/sections/GrowthStory";
import { ContactCTA } from "@/components/sections/ContactCTA";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { StickyNav } from "@/components/ui/StickyNav";

export default function Home() {
  return (
    <main>
      <StickyNav />
      <LanguageToggle />

      <Hero />
      <Manifesto />
      <MOSIntro />
      <MOSModules />
      <MOSMockup />
      <ServicePillars />
      <CaseStudies />
      <ClientLogos />
      <GrowthStory />
      <ContactCTA />
    </main>
  );
}
