"use client";

import { motion } from "framer-motion";
import { MOS_MODULES } from "@/lib/constants";
import { useLocale } from "@/lib/i18n";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
};

export function MOSModules() {
  const { t } = useLocale();

  return (
    <section className="relative py-16 md:py-24 px-6">
      <div className="relative max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {MOS_MODULES.map((mod) => (
            <motion.div key={mod.id} variants={itemVariants}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-14 md:py-20 border-b border-border-subtle">
                {/* Left — Number + Name */}
                <div className="lg:col-span-4">
                  <div className="flex items-baseline gap-4 lg:gap-6">
                    <span className="text-xs text-text-muted tracking-[0.2em]">
                      {mod.number}
                    </span>
                    <div>
                      <h3 className="text-lg md:text-xl font-medium text-text-primary tracking-wider">
                        {mod.name}
                      </h3>
                      <p className="text-sm text-text-secondary mt-1">
                        {mod.nameCN}
                      </p>
                      <p className="text-xs text-text-muted mt-1">
                        {t(`mosModules.${mod.id}.subtitle`)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right — Content */}
                <div className="lg:col-span-8">
                  <p className="text-sm md:text-base text-text-secondary/80 italic leading-relaxed mb-5">
                    &ldquo;{t(`mosModules.${mod.id}.quote`)}&rdquo;
                  </p>
                  <p className="text-sm md:text-base text-text-secondary leading-loose">
                    {t(`mosModules.${mod.id}.description`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
