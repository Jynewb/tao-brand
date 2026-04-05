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
      duration: 0.5,
    },
  },
};

export function ClientLogos() {
  const { t } = useLocale();

  return (
    <section className="relative py-24 md:py-40 px-6">
      <div className="absolute inset-0 bg-white/[0.015]" />

      <div className="relative max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-text-muted text-xs tracking-[0.4em] uppercase mb-6">
            {t("clientLogos.label")}
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extralight text-text-primary mb-4 tracking-wide">
            {t("clientLogos.heading_prefix")}
            <span className="gradient-text font-light">
              {t("clientLogos.heading_highlight")}
            </span>
            {t("clientLogos.heading_suffix")}
          </h2>
          <p className="text-text-secondary font-extralight text-base mb-20 md:mb-28 max-w-xl leading-relaxed">
            {t("clientLogos.description")}
          </p>
        </ScrollReveal>

        <div className="space-y-16 md:space-y-20">
          {CLIENT_GROUPS.map((group, gi) => (
            <ScrollReveal key={group.categoryEN} delay={gi * 0.1}>
              <div>
                {/* Category label */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[10px] text-text-muted tracking-[0.3em] uppercase">
                    {group.categoryEN}
                  </span>
                  <div
                    className="flex-1 h-px"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(255,255,255,0.06), transparent)",
                    }}
                  />
                </div>

                {/* Brand names */}
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  className="flex flex-wrap gap-x-6 md:gap-x-10 gap-y-4"
                >
                  {group.brands.map((name) => (
                    <motion.span
                      key={name}
                      variants={itemVariants}
                      className="text-xs md:text-sm text-white/25 hover:text-white/55 transition-colors duration-500 font-light tracking-wider whitespace-nowrap"
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
