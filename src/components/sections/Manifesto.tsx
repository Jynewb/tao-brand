"use client";

import { ScrollReveal } from "../ui/ScrollReveal";

export function Manifesto() {
  return (
    <section className="relative py-32 md:py-44 px-6">
      {/* Subtle gradient accent */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.05] blur-[120px] print:hidden"
        style={{
          background:
            "radial-gradient(circle, rgba(99,102,241,0.6) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-text-muted text-xs tracking-[0.4em] uppercase mb-12 md:mb-16">
            Our Belief
          </p>
        </ScrollReveal>

        <div className="space-y-8 md:space-y-10">
          <ScrollReveal delay={0.1}>
            <p className="text-lg md:text-xl lg:text-2xl font-extralight text-text-secondary leading-relaxed">
              营销行业正在经历底层逻辑的重构。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg md:text-xl lg:text-2xl font-extralight text-text-secondary leading-relaxed">
              过去十年，我们深耕品牌整合营销，陪伴中国最具影响力的品牌实现增长。我们理解每一次传播背后的商业诉求，也深知每一分预算背后的决策压力。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-lg md:text-xl lg:text-2xl font-light text-text-primary leading-relaxed">
              今天，当AI从工具进化为基础设施，我们选择不做旁观者。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div
              className="w-16 h-px"
              style={{
                background:
                  "linear-gradient(90deg, rgba(99,102,241,0.5), transparent)",
              }}
            />
          </ScrollReveal>

          <ScrollReveal delay={0.45}>
            <p className="text-lg md:text-xl lg:text-2xl font-extralight text-text-secondary leading-relaxed">
              TAO不是一家在传统服务上叠加AI概念的营销公司。我们从AI原生的视角，重新构建了营销服务的底层逻辑——从洞察到策略，从内容到投放，从执行到进化，每一个环节都被重新思考。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.55}>
            <p className="text-lg md:text-xl lg:text-2xl font-extralight text-text-secondary leading-relaxed">
              我们构建了<span className="font-light gradient-text">TAO MOS</span>，一套让营销决策更精准、内容生产更高效、效果评估更科学的智能营销操作系统。它不替代人的判断力，而是让人的每一次判断都站在更完整的信息与更深层的洞察之上。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.65}>
            <p className="text-xl md:text-2xl lg:text-3xl font-light gradient-text-purple leading-relaxed mt-12">
              我们相信营销的未来不属于最大的公司，
              <br className="hidden md:block" />
              而属于最聪明的系统。
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.75}>
            <p className="text-lg md:text-xl font-light text-text-primary tracking-wide mt-4">
              这是TAO正在构建的未来。
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
