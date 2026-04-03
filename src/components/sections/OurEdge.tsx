"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "../ui/ScrollReveal";
import { AnimatedCounter } from "../ui/AnimatedCounter";

export function OurEdge() {
  return (
    <section className="relative py-20 md:py-28 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-white/[0.015]" />

      <div className="relative max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-text-muted text-xs tracking-[0.4em] uppercase mb-14 md:mb-16">
            Why Us
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 relative">
          {/* Experience */}
          <ScrollReveal direction="left">
            <div>
              <div className="text-5xl md:text-6xl font-thin gradient-text leading-none mb-5">
                <AnimatedCounter target={10} className="gradient-text" />
                <span className="text-2xl md:text-3xl">年+</span>
              </div>
              <h3 className="text-base md:text-lg font-light text-text-primary mb-3 tracking-wide">
                行业深耕 · 200+头部品牌
              </h3>
              <p className="text-sm text-text-secondary font-extralight leading-relaxed">
                从奢侈品到科技，从快消到出行，我们深谙每个行业的营销语言与增长逻辑。
              </p>
            </div>
          </ScrollReveal>

          {/* AI */}
          <ScrollReveal direction="right">
            <div>
              <div className="text-5xl md:text-6xl font-thin gradient-text leading-none mb-5">
                AI
              </div>
              <h3 className="text-base md:text-lg font-light text-text-primary mb-3 tracking-wide">
                原生基因 · 重构每一个环节
              </h3>
              <p className="text-sm text-text-secondary font-extralight leading-relaxed">
                不是在旧流程上贴AI标签。我们先用AI革新了自己的工作方式，再将能力产品化赋能客户。
              </p>
            </div>
          </ScrollReveal>

          {/* Center divider — desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2">
            <motion.div
              className="w-full h-full"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                background: "linear-gradient(180deg, transparent, rgba(99,102,241,0.15), transparent)",
                transformOrigin: "top",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
