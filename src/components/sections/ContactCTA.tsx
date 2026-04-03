"use client";

import Image from "next/image";
import { ScrollReveal } from "../ui/ScrollReveal";
import { GradientMesh } from "../ui/GradientMesh";
import { CONTACT } from "@/lib/constants";

export function ContactCTA() {
  return (
    <section className="relative py-40 md:py-56 px-6 overflow-hidden">
      <GradientMesh className="opacity-40" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-wide leading-tight">
            {CONTACT.headline.split("，")[0]}，
            <br />
            <span className="gradient-text font-normal">
              {CONTACT.headline.split("，")[1]}
            </span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="mt-16">
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-light tracking-[0.15em] transition-all duration-500 hover:scale-105 border border-white/10 hover:border-white/20 hover:bg-white/[0.04]"
            >
              {CONTACT.cta}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="mt-6 text-text-muted text-xs tracking-wider font-light">
            {CONTACT.email}
          </p>
        </ScrollReveal>

        {/* Footer mark */}
        <ScrollReveal delay={0.4}>
          <div className="mt-32 pt-8 border-t border-white/[0.06]">
            <Image
              src="/logo-tao.png"
              alt="TAO"
              width={300}
              height={100}
              className="w-20 h-auto mx-auto opacity-20"
              style={{ filter: "invert(1)" }}
            />
            <p className="text-white/15 text-[10px] mt-4 tracking-[0.3em] font-light">
              BRAND TO BLOSSOM
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
