"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "../ui/ScrollReveal";
import { AnimatedCounter } from "../ui/AnimatedCounter";
import { CLIENT_LOGOS } from "@/lib/constants";

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
  return (
    <section className="relative py-24 md:py-40 px-6">
      {/* Slightly different bg */}
      <div className="absolute inset-0 bg-white/[0.015]" />

      <div className="relative max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-text-muted text-xs tracking-[0.4em] uppercase mb-6">
            Trusted By
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-text-primary mb-4 tracking-wide">
            <AnimatedCounter
              target={200}
              suffix="+"
              className="gradient-text font-normal"
            />
          </h2>
          <p className="text-text-secondary font-extralight text-lg mb-20 md:mb-28">
            领先品牌的信任之选
          </p>
        </ScrollReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-4 md:grid-cols-8 gap-y-8 gap-x-2"
        >
          {CLIENT_LOGOS.map((name) => (
            <motion.div
              key={name}
              variants={itemVariants}
              className="flex items-center justify-center py-3 group"
            >
              <span className="text-[11px] md:text-xs text-white/20 group-hover:text-white/50 transition-colors duration-500 text-center font-light tracking-wider whitespace-nowrap">
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
