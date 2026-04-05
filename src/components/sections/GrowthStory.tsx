"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "../ui/ScrollReveal";
import { TIMELINE } from "@/lib/constants";
import { useLocale } from "@/lib/i18n";

export function GrowthStory() {
  const { t, translations } = useLocale();

  return (
    <section className="relative py-24 md:py-40 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-text-muted text-xs tracking-[0.4em] uppercase mb-6">
            {t("growthStory.label")}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-text-primary mb-20 md:mb-32 tracking-wide">
            {t("growthStory.heading_prefix")}
            <span className="gradient-text-purple font-normal">
              {t("growthStory.heading_highlight")}
            </span>
          </h2>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line */}
          <motion.div
            className="hidden md:block absolute top-[52px] left-0 right-0 h-px"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              background:
                "linear-gradient(90deg, rgba(99,102,241,0.3), rgba(6,182,212,0.3))",
              transformOrigin: "left",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {TIMELINE.map((item, i) => {
              const timelineItem =
                translations.growthStory.timeline[
                  item.year as keyof typeof translations.growthStory.timeline
                ];

              return (
                <ScrollReveal key={item.year} delay={i * 0.2}>
                  <div className="md:text-center">
                    {/* Dot */}
                    <div className="hidden md:flex justify-center mb-10">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          item.isCurrent
                            ? "bg-cyan shadow-[0_0_20px_rgba(6,182,212,0.5)]"
                            : "bg-purple-start/50"
                        }`}
                      />
                    </div>

                    <div
                      className={`text-5xl md:text-6xl font-thin mb-4 tracking-tight ${
                        item.isCurrent ? "gradient-text" : "text-text-primary"
                      }`}
                    >
                      {item.year}
                    </div>

                    <p className="text-lg font-light text-text-primary mb-2 tracking-wide">
                      {timelineItem.title}
                    </p>

                    <p className="text-sm text-text-muted font-extralight">
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
