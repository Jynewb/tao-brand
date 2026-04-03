"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "../ui/ScrollReveal";
import { AI_CAPABILITIES } from "@/lib/constants";

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
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export function AiCapabilities() {
  return (
    <section className="relative py-24 md:py-40 px-6">
      {/* Background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-[0.06] blur-[120px]"
        style={{
          background: "radial-gradient(ellipse, rgba(99,102,241,0.5) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-text-muted text-xs tracking-[0.4em] uppercase mb-6">
            Capabilities
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-text-primary mb-20 md:mb-28 tracking-wide">
            <span className="gradient-text font-normal">AI原生</span>能力矩阵
          </h2>
        </ScrollReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06] rounded-2xl overflow-hidden"
        >
          {AI_CAPABILITIES.map((cap, i) => (
            <motion.div
              key={cap.id}
              variants={itemVariants}
              className="group bg-bg-primary hover:bg-white/[0.03] transition-colors duration-500 p-8 md:p-10 lg:p-12"
            >
              {/* Number indicator */}
              <span className="text-xs text-text-muted tracking-[0.3em] font-light">
                0{i + 1}
              </span>

              <h3 className="text-xl md:text-2xl font-light text-text-primary mt-6 mb-2 tracking-wide">
                {cap.title}
              </h3>
              <p className="text-xs text-text-muted tracking-[0.2em] uppercase mb-5">
                {cap.titleEN}
              </p>
              <p className="text-text-secondary font-extralight leading-relaxed text-sm md:text-base">
                {cap.description}
              </p>

              {/* Hover accent line */}
              <div
                className="mt-8 h-px w-0 group-hover:w-12 transition-all duration-700"
                style={{
                  background: "linear-gradient(90deg, rgba(99,102,241,0.6), transparent)",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
