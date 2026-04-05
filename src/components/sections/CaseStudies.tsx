"use client";

import { ScrollReveal } from "../ui/ScrollReveal";
import { asset } from "@/lib/prefix";
import { CASE_STUDIES } from "@/lib/constants";
import { useLocale } from "@/lib/i18n";

export function CaseStudies() {
  const { t, locale, translations } = useLocale();

  return (
    <section className="relative py-24 md:py-40 px-6">
      <div
        className="absolute top-1/4 left-0 w-[600px] h-[400px] rounded-full opacity-[0.04] blur-[120px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(139,92,246,0.5) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-text-muted text-xs tracking-[0.4em] uppercase mb-6">
            {t("caseStudies.label")}
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extralight text-text-primary mb-6 tracking-wide">
            {t("caseStudies.heading_prefix")}
            <span className="gradient-text font-light">
              {t("caseStudies.heading_highlight")}
            </span>
          </h2>
          <p className="text-base md:text-lg font-extralight text-text-secondary mb-20 md:mb-28 max-w-2xl leading-relaxed">
            {t("caseStudies.description")}
          </p>
        </ScrollReveal>

        <div className="space-y-16 md:space-y-24">
          {CASE_STUDIES.map((cs, i) => {
            const caseTranslations =
              translations.caseStudies.cases[cs.id as keyof typeof translations.caseStudies.cases];
            const results =
              "results" in caseTranslations
                ? (caseTranslations as unknown as { results: { value: string; label: string }[] }).results
                : cs.results;

            return (
              <ScrollReveal key={cs.id} delay={i * 0.1}>
                <div className="group">
                  {/* Category + Client */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-[10px] text-text-muted tracking-[0.3em] uppercase">
                      {cs.categoryEN}
                    </span>
                    <div
                      className="flex-1 h-px"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(255,255,255,0.06), transparent)",
                      }}
                    />
                  </div>

                  <h3 className="text-lg md:text-xl font-light text-text-primary mb-2 tracking-wide">
                    {caseTranslations.client}
                  </h3>
                  <p className="text-sm text-text-secondary font-extralight leading-relaxed mb-6 max-w-2xl">
                    {caseTranslations.description}
                  </p>

                  {/* Image */}
                  {cs.image && (
                    <div
                      className={`rounded-xl overflow-hidden border border-white/[0.06] group-hover:border-white/[0.12] transition-colors duration-700 ${
                        cs.bgLight ? "bg-white/[0.03] p-3 md:p-4" : ""
                      }`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={asset(cs.image)}
                        alt={cs.client}
                        className={`w-full h-auto ${cs.bgLight ? "rounded-lg" : ""}`}
                      />
                    </div>
                  )}

                  {/* Results */}
                  {results && results.length > 0 && (
                    <div className="flex flex-wrap gap-6 md:gap-10 mt-6">
                      {results.map((r) => (
                        <div key={r.label}>
                          <span className="text-xl md:text-2xl font-light gradient-text">
                            {r.value}
                          </span>
                          <p className="text-[10px] text-text-muted tracking-wider mt-1">
                            {r.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
