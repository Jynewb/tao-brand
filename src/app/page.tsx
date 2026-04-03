import { Hero } from "@/components/sections/Hero";
import { OurEdge } from "@/components/sections/OurEdge";
import { AiCapabilities } from "@/components/sections/AiCapabilities";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { GrowthStory } from "@/components/sections/GrowthStory";
import { ContactCTA } from "@/components/sections/ContactCTA";

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
      <Hero />
      <SectionDivider />
      <OurEdge />
      <SectionDivider />
      <AiCapabilities />
      <SectionDivider />
      <ClientLogos />
      <SectionDivider />
      <GrowthStory />
      <ContactCTA />
    </main>
  );
}
