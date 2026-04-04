"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "../ui/ScrollReveal";
import { MOS_MODULES } from "@/lib/constants";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export function MOSModules() {
  return (
    <section className="relative py-16 md:py-24 px-6">
      {/* Background glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full opacity-[0.04] blur-[150px]"
        style={{
          background:
            "radial-gradient(ellipse, rgba(99,102,241,0.5) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="space-y-px"
        >
          {MOS_MODULES.map((mod) => (
            <motion.div
              key={mod.id}
              variants={itemVariants}
              className="group relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-12 md:py-16 lg:py-20 border-b border-white/[0.06] hover:border-white/[0.12] transition-colors duration-700">
                {/* Left — Number + Name */}
                <div className="lg:col-span-4">
                  <div className="flex items-baseline gap-4 lg:gap-6">
                    <span className="text-[10px] text-text-muted tracking-[0.3em] font-light">
                      {mod.number}
                    </span>
                    <div>
                      <h3 className="text-lg md:text-xl font-light text-text-primary tracking-[0.15em]">
                        {mod.name}
                      </h3>
                      <p className="text-sm text-text-muted mt-1">
                        {mod.nameCN}
                      </p>
                      <p className="text-xs text-text-muted mt-1 tracking-wide">
                        {mod.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right — Content */}
                <div className="lg:col-span-8">
                  <p className="text-sm md:text-base font-light text-text-secondary/80 italic leading-relaxed mb-5">
                    &ldquo;{mod.quote}&rdquo;
                  </p>
                  <p className="text-sm md:text-base font-extralight text-text-secondary leading-loose">
                    {mod.description}
                  </p>

                  {/* Hover accent */}
                  <div
                    className="mt-8 h-px w-0 group-hover:w-16 transition-all duration-700"
                    style={{
                      background:
                        "linear-gradient(90deg, rgba(99,102,241,0.6), transparent)",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
