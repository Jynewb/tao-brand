"use client";

import { ScrollReveal } from "../ui/ScrollReveal";
import { asset } from "@/lib/prefix";
import { CASE_STUDIES } from "@/lib/constants";
import { useLocale } from "@/lib/i18n";

export function CaseStudies() {
  const { t, translations } = useLocale();

  return (
    <section id="cases" className="relative py-32 md:py-48 px-6">
      <div className="relative max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-text-secondary text-sm tracking-wide uppercase mb-6">
            {t("caseStudies.label")}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-semibold text-text-primary tracking-tight leading-tight">
            {t("caseStudies.heading_prefix")}
            {t("caseStudies.heading_highlight")}
          </h2>
          <p className="mt-6 text-lg md:text-xl text-text-secondary mb-20 md:mb-28 max-w-[560px] leading-relaxed">
            {t("caseStudies.description")}
          </p>
        </ScrollReveal>

        <div className="space-y-20 md:space-y-32">
          {CASE_STUDIES.map((cs, i) => {
            const caseTranslations =
              translations.caseStudies.cases[
                cs.id as keyof typeof translations.caseStudies.cases
              ];
            const results =
              "results" in caseTranslations
                ? (
                    caseTranslations as unknown as {
                      results: { value: string; label: string }[];
                    }
                  ).results
                : cs.results;

            return (
              <ScrollReveal key={cs.id} delay={i * 0.05}>
                <div>
                  {/* Category */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs text-text-muted tracking-wider uppercase">
                      {cs.categoryEN}
                    </span>
                    <div className="flex-1 h-[0.5px] bg-border-subtle" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-medium text-text-primary mb-3">
                    {caseTranslations.client}
                  </h3>
                  <p className="text-base text-text-secondary leading-relaxed mb-8 max-w-[640px]">
                    {caseTranslations.description}
                  </p>

                  {/* Image — full width, clean */}
                  {cs.image && (
                    <div className="rounded-2xl overflow-hidden border border-border-subtle">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={asset(cs.image)}
                        alt={cs.client}
                        className="w-full h-auto"
                      />
                    </div>
                  )}

                  {/* Results */}
                  {results && results.length > 0 && (
                    <div className="flex flex-wrap gap-8 md:gap-12 mt-8">
                      {results.map((r) => (
                        <div key={r.label}>
                          <span className="text-2xl md:text-3xl font-semibold text-text-primary">
                            {r.value}
                          </span>
                          <p className="text-xs text-text-secondary tracking-wider mt-2">
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
