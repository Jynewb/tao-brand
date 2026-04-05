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

function SectionDivider() {
  return (
    <div className="flex justify-center py-2">
      <div
        className="w-px h-12"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(99,102,241,0.15), transparent)",
        }}
      />
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <LanguageToggle />
      {/* 1. Cover — Hero with tagline */}
      <Hero />
      <SectionDivider />

      {/* 2. Brand Manifesto */}
      <Manifesto />
      <SectionDivider />

      {/* 3. TAO MOS — System Philosophy + Overview */}
      <MOSIntro />

      {/* 4. TAO MOS — Six Modules Deep Dive */}
      <MOSModules />

      {/* 4.5 TAO MOS — System Preview Mockup */}
      <MOSMockup />
      <SectionDivider />

      {/* 5. Service Capabilities */}
      <ServicePillars />
      <SectionDivider />

      {/* 6. Case Studies */}
      <CaseStudies />
      <SectionDivider />

      {/* 7. Client Trust */}
      <ClientLogos />
      <SectionDivider />

      {/* 7. Journey */}
      <GrowthStory />

      {/* 8. Contact */}
      <ContactCTA />
    </main>
  );
}
