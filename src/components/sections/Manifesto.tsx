"use client";

import { ScrollReveal } from "../ui/ScrollReveal";
import { useLocale } from "@/lib/i18n";

export function Manifesto() {
  const { t } = useLocale();

  return (
    <section id="manifesto" className="relative py-32 md:py-48 px-6">
      <div className="relative max-w-[720px] mx-auto">
        <ScrollReveal>
          <p className="text-text-secondary text-sm tracking-wide uppercase mb-16 md:mb-20">
            {t("manifesto.label")}
          </p>
        </ScrollReveal>

        {/* Opening — large statement */}
        <ScrollReveal delay={0.1}>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-text-primary leading-snug tracking-tight">
            {t("manifesto.p1")}
          </p>
        </ScrollReveal>

        <div className="mt-12 md:mt-16 space-y-8 md:space-y-10">
          <ScrollReveal delay={0.15}>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              {t("manifesto.p2")}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-text-primary leading-snug tracking-tight">
              {t("manifesto.p3")}
            </p>
          </ScrollReveal>
        </div>

        <div className="mt-16 md:mt-20 space-y-8 md:space-y-10">
          <ScrollReveal delay={0.25}>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              {t("manifesto.p4")}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              {t("manifesto.p5_prefix")}
              <span className="text-text-primary font-medium">{t("manifesto.p5_highlight")}</span>
              {t("manifesto.p5_suffix")}
            </p>
          </ScrollReveal>
        </div>

        {/* Closing — the punchline, Apple "super headline" style */}
        <ScrollReveal delay={0.35}>
          <p className="mt-20 md:mt-28 text-3xl md:text-4xl lg:text-5xl font-semibold text-text-primary leading-tight tracking-tight">
            {t("manifesto.p6_line1")}
            <br className="hidden md:block" />
            <span className="gradient-text">{t("manifesto.p6_line2")}</span>
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="mt-8 text-lg md:text-xl text-text-secondary">
            {t("manifesto.p7")}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
