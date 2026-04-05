"use client";

import { ScrollReveal } from "../ui/ScrollReveal";
import { useLocale } from "@/lib/i18n";

export function Manifesto() {
  const { t } = useLocale();

  return (
    <section className="relative py-32 md:py-44 px-6">
      {/* Subtle gradient accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.05] blur-[120px] print:hidden"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.6) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-text-muted text-xs tracking-[0.4em] uppercase mb-12 md:mb-16">
            {t("manifesto.label")}
          </p>
        </ScrollReveal>

        <div className="space-y-8 md:space-y-10">
          <ScrollReveal delay={0.1}>
            <p className="text-lg md:text-xl lg:text-2xl font-extralight text-text-secondary leading-relaxed">
              {t("manifesto.p1")}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg md:text-xl lg:text-2xl font-extralight text-text-secondary leading-relaxed">
              {t("manifesto.p2")}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-lg md:text-xl lg:text-2xl font-light text-text-primary leading-relaxed">
              {t("manifesto.p3")}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div
              className="w-16 h-px"
              style={{
                background:
                  "linear-gradient(90deg, rgba(99,102,241,0.5), transparent)",
              }}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.45}>
            <p className="text-lg md:text-xl lg:text-2xl font-extralight text-text-secondary leading-relaxed">
              {t("manifesto.p4")}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.55}>
            <p className="text-lg md:text-xl lg:text-2xl font-extralight text-text-secondary leading-relaxed">
              {t("manifesto.p5_prefix")}
              <span className="font-light gradient-text">{t("manifesto.p5_highlight")}</span>
              {t("manifesto.p5_suffix")}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.65}>
            <p className="text-xl md:text-2xl lg:text-3xl font-light gradient-text-purple leading-relaxed mt-12">
              {t("manifesto.p6_line1")}
              <br className="hidden md:block" />
              {t("manifesto.p6_line2")}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.75}>
            <p className="text-lg md:text-xl font-light text-text-primary tracking-wide mt-4">
              {t("manifesto.p7")}
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
