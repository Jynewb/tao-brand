"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GradientMesh } from "../ui/GradientMesh";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-24">
      <GradientMesh />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-16"
        >
          <Image
            src="/logo-tao.png"
            alt="TAO"
            width={600}
            height={200}
            className="w-[200px] md:w-[260px] lg:w-[300px] h-auto"
            style={{ filter: "invert(1)" }}
            priority
          />
        </motion.div>

        {/* Manifesto — integrated into hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-lg md:text-xl lg:text-2xl font-extralight text-text-secondary leading-relaxed tracking-wide mb-3">
            营销的下一个十年，
          </p>
          <p className="text-lg md:text-xl lg:text-2xl font-normal gradient-text-purple leading-relaxed tracking-wide">
            属于既懂行业、又掌握AI的公司。
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-12 h-px mx-auto my-10"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-lg md:text-xl lg:text-2xl font-extralight text-text-secondary leading-relaxed tracking-wide mb-3">
            我们不做传统意义上的服务商，
          </p>
          <p className="text-lg md:text-xl lg:text-2xl font-normal gradient-text leading-relaxed tracking-wide">
            我们交付结果。
          </p>
        </motion.div>

        {/* Subtle positioning label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-14 text-xs text-text-muted tracking-[0.25em] font-light"
        >
          AI-Native Marketing Intelligence
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-9 rounded-full border border-white/15 flex items-start justify-center p-1.5">
          <div
            className="w-1 h-1.5 rounded-full bg-white/30"
            style={{ animation: "scroll-hint 2s ease-in-out infinite" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
