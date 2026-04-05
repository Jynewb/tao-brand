"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SERVICE_PILLARS } from "@/lib/constants";
import { useLocale } from "@/lib/i18n";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export function ServicePillars() {
  const { t, locale } = useLocale();

  return (
    <section className="relative py-24 md:py-40 px-6">
      <div
        className="absolute top-1/3 right-0 w-[600px] h-[400px] rounded-full opacity-[0.04] blur-[120px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(6,182,212,0.5) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-text-muted text-xs tracking-[0.4em] uppercase mb-6">
            {t("servicePillars.label")}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-text-primary mb-6 tracking-wide">
            {t("servicePillars.heading_prefix")}
            <span className="gradient-text font-light">
              {t("servicePillars.heading_highlight")}
            </span>
          </h2>
          <p className="text-base md:text-lg font-extralight text-text-secondary mb-20 md:mb-28 max-w-2xl leading-relaxed">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/[0.06] rounded-t-2xl overflow-hidden">
            {SERVICE_PILLARS.slice(0, 3).map((pillar) => (
              <motion.div
                key={pillar.id}
                variants={itemVariants}
                className="group bg-bg-primary hover:bg-white/[0.03] transition-colors duration-500 p-8 md:p-10"
              >
                <p className="text-xs text-text-muted tracking-[0.2em] uppercase mb-4">
                  {pillar.titleEN}
                </p>
                <h3 className="text-lg md:text-xl font-light text-text-primary mb-4 tracking-wide">
                  {locale === "zh" ? pillar.title : pillar.titleEN}
                </h3>
                <p className="text-sm text-text-secondary font-extralight leading-relaxed">
                  {t(`servicePillars.services.${pillar.id}`)}
                </p>
                <div
                  className="mt-6 h-px w-0 group-hover:w-12 transition-all duration-700"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(99,102,241,0.6), transparent)",
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Bottom row — 2 items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] rounded-b-2xl overflow-hidden mt-px">
            {SERVICE_PILLARS.slice(3).map((pillar) => (
              <motion.div
                key={pillar.id}
                variants={itemVariants}
                className="group bg-bg-primary hover:bg-white/[0.03] transition-colors duration-500 p-8 md:p-10"
              >
                <p className="text-xs text-text-muted tracking-[0.2em] uppercase mb-4">
                  {pillar.titleEN}
                </p>
                <h3 className="text-lg md:text-xl font-light text-text-primary mb-4 tracking-wide">
                  {locale === "zh" ? pillar.title : pillar.titleEN}
                </h3>
                <p className="text-sm text-text-secondary font-extralight leading-relaxed">
                  {t(`servicePillars.services.${pillar.id}`)}
                </p>
                <div
                  className="mt-6 h-px w-0 group-hover:w-12 transition-all duration-700"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(99,102,241,0.6), transparent)",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom label */}
        <ScrollReveal delay={0.3}>
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/[0.06]">
              <div className="w-1.5 h-1.5 rounded-full bg-purple-start/50" />
              <span className="text-xs text-text-muted tracking-[0.2em] font-light">
                {t("servicePillars.powered")}
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
