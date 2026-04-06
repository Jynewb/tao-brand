"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "../ui/ScrollReveal";
import { CLIENT_GROUPS } from "@/lib/constants";
import { useLocale } from "@/lib/i18n";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.02,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
    },
  },
};

export function ClientLogos() {
  const { t } = useLocale();

  return (
    <section className="relative py-32 md:py-48 px-6 bg-bg-alt">
      <div className="relative max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-text-secondary text-sm tracking-wide uppercase mb-6">
            {t("clientLogos.label")}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight leading-tight">
            {t("clientLogos.heading_prefix")}
            {t("clientLogos.heading_highlight")}
            {t("clientLogos.heading_suffix")}
          </h2>
          <p className="mt-6 text-base md:text-lg text-text-secondary mb-20 md:mb-28 max-w-[480px] leading-relaxed">
            {t("clientLogos.description")}
          </p>
        </ScrollReveal>

        <div className="space-y-16 md:space-y-20">
          {CLIENT_GROUPS.map((group, gi) => (
            <ScrollReveal key={group.categoryEN} delay={gi * 0.08}>
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-xs text-text-muted tracking-wider uppercase">
                    {group.categoryEN}
                  </span>
                  <div className="flex-1 h-[0.5px] bg-border-subtle" />
                </div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="flex flex-wrap gap-x-8 md:gap-x-12 gap-y-4"
                >
                  {group.brands.map((name) => (
                    <motion.span
                      key={name}
                      variants={itemVariants}
                      className="text-sm md:text-base text-white/25 hover:text-white/60 transition-colors duration-300 tracking-wider whitespace-nowrap"
                    >
                      {name}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
