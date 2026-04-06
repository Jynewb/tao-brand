"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SERVICE_PILLARS } from "@/lib/constants";
import { useLocale } from "@/lib/i18n";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

export function ServicePillars() {
  const { t, locale } = useLocale();

  return (
    <section id="services" className="relative py-32 md:py-48 px-6">
      <div className="relative max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-text-secondary text-sm tracking-wide uppercase mb-6">
            {t("servicePillars.label")}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-semibold text-text-primary tracking-tight leading-tight">
            {t("servicePillars.heading_prefix")}
            {t("servicePillars.heading_highlight")}
          </h2>
          <p className="mt-6 text-lg md:text-xl text-text-secondary mb-20 md:mb-28 max-w-[560px] leading-relaxed">
            {t("servicePillars.description")}
          </p>
        </ScrollReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {/* Top row — 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-border-subtle rounded-t-2xl overflow-hidden">
            {SERVICE_PILLARS.slice(0, 3).map((pillar) => (
              <motion.div
                key={pillar.id}
                variants={itemVariants}
                className="bg-bg-primary hover:bg-bg-alt transition-colors duration-300 p-8 md:p-10"
              >
                <p className="text-xs text-text-muted tracking-wider uppercase mb-4">
                  {pillar.titleEN}
                </p>
                <h3 className="text-lg md:text-xl font-medium text-text-primary mb-4">
                  {locale === "zh" ? pillar.title : pillar.titleEN}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {t(`servicePillars.services.${pillar.id}`)}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom row — 2 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-border-subtle rounded-b-2xl overflow-hidden mt-[1px]">
            {SERVICE_PILLARS.slice(3).map((pillar) => (
              <motion.div
                key={pillar.id}
                variants={itemVariants}
                className="bg-bg-primary hover:bg-bg-alt transition-colors duration-300 p-8 md:p-10"
              >
                <p className="text-xs text-text-muted tracking-wider uppercase mb-4">
                  {pillar.titleEN}
                </p>
                <h3 className="text-lg md:text-xl font-medium text-text-primary mb-4">
                  {locale === "zh" ? pillar.title : pillar.titleEN}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {t(`servicePillars.services.${pillar.id}`)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom label — clean, minimal */}
        <ScrollReveal delay={0.3}>
          <div className="mt-10 text-center">
            <span className="text-xs text-text-muted tracking-wider">
              {t("servicePillars.powered")}
            </span>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
