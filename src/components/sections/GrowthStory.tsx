"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "../ui/ScrollReveal";
import { TIMELINE } from "@/lib/constants";
import { useLocale } from "@/lib/i18n";

export function GrowthStory() {
  const { t, translations } = useLocale();

  return (
    <section className="relative py-32 md:py-48 px-6">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-text-secondary text-sm tracking-wide uppercase mb-6">
            {t("growthStory.label")}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-semibold text-text-primary tracking-tight leading-tight mb-20 md:mb-32">
            {t("growthStory.heading_prefix")}
            <span className="gradient-text-purple">{t("growthStory.heading_highlight")}</span>
          </h2>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <motion.div
            className="hidden md:block absolute top-[52px] left-0 right-0 h-[0.5px] bg-border-subtle"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ transformOrigin: "left" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {TIMELINE.map((item, i) => {
              const timelineItem =
                translations.growthStory.timeline[
                  item.year as keyof typeof translations.growthStory.timeline
                ];

              return (
                <ScrollReveal key={item.year} delay={i * 0.15}>
                  <div className="md:text-center">
                    {/* Dot */}
                    <div className="hidden md:flex justify-center mb-10">
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${
                          item.isCurrent
                            ? "bg-text-primary"
                            : "bg-text-secondary/50"
                        }`}
                      />
                    </div>

                    <div
                      className={`text-5xl md:text-6xl font-semibold mb-4 tracking-tight ${
                        item.isCurrent
                          ? "text-text-primary"
                          : "text-text-secondary"
                      }`}
                    >
                      {item.year}
                    </div>

                    <p className="text-lg font-medium text-text-primary mb-2">
                      {timelineItem.title}
                    </p>

                    <p className="text-sm text-text-secondary">
                      {timelineItem.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
