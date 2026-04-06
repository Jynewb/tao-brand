"use client";

import { motion } from "framer-motion";
import { asset } from "@/lib/prefix";
import { useLocale } from "@/lib/i18n";

export function Hero() {
  const { t } = useLocale();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6"
    >
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex justify-center mb-10"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/logo-tao.png")}
            alt="TAO"
            className="w-[140px] md:w-[180px] h-auto"
            style={{ filter: "invert(1)" }}
          />
        </motion.div>

        {/* Main headline — Apple-style massive text */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-5xl md:text-7xl lg:text-[88px] font-semibold tracking-tight text-text-primary leading-[1.05]"
        >
          {t("hero.title1")}
          {t("hero.titlePunctuation")}{" "}
          <span className="gradient-text">{t("hero.title2")}</span>.
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mt-6 text-xl md:text-2xl lg:text-[28px] text-text-secondary font-normal"
        >
          {t("hero.tagline")}
        </motion.p>

        {/* Positioning */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-4 text-base md:text-lg text-text-secondary"
        >
          {t("hero.positioning")}
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
