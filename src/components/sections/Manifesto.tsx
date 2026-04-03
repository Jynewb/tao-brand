"use client";

import { ScrollReveal } from "../ui/ScrollReveal";

export function Manifesto() {
  return (
    <section className="relative py-32 md:py-48 lg:py-56 px-6">
      {/* Subtle gradient accent behind text */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.07] blur-[120px]"
        style={{
          background: "radial-gradient(circle, rgba(99,102,241,0.6) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto">
        {/* Line 1 */}
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extralight tracking-wide leading-tight md:leading-tight lg:leading-tight text-text-secondary">
            营销的下一个十年
          </h2>
        </ScrollReveal>

        {/* Line 2 — the punch */}
        <ScrollReveal delay={0.15}>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-normal tracking-wide leading-tight md:leading-tight lg:leading-tight mt-2 md:mt-3 gradient-text-purple">
            属于既懂行业、又掌握AI的公司。
          </h2>
        </ScrollReveal>

        {/* Divider */}
        <ScrollReveal delay={0.3}>
          <div
            className="w-16 h-px mt-16 md:mt-20 mb-16 md:mb-20"
            style={{
              background: "linear-gradient(90deg, rgba(99,102,241,0.5), transparent)",
            }}
          />
        </ScrollReveal>

        {/* Line 3 */}
        <ScrollReveal delay={0.35}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extralight tracking-wide leading-tight md:leading-tight lg:leading-tight text-text-secondary">
            我们不做传统意义上的服务商
          </h2>
        </ScrollReveal>

        {/* Line 4 — second punch */}
        <ScrollReveal delay={0.45}>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-normal tracking-wide leading-tight md:leading-tight lg:leading-tight mt-2 md:mt-3 gradient-text">
            我们交付结果。
          </h2>
        </ScrollReveal>
      </div>
    </section>
  );
}
