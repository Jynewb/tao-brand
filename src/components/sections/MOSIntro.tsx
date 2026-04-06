"use client";

import { ScrollReveal } from "../ui/ScrollReveal";
import { useLocale } from "@/lib/i18n";

const mosFlowItems = [
  { num: "01", en: "PERCEPTION", cn: "感知" },
  { num: "02", en: "STRATEGY", cn: "策略" },
  { num: "03", en: "NETWORK", cn: "网络" },
  { num: "04", en: "CREATION", cn: "创造" },
  { num: "05", en: "AMPLIFY", cn: "放大" },
  { num: "06", en: "EVOLUTION", cn: "进化" },
];

export function MOSIntro() {
  const { t } = useLocale();

  return (
    <section id="mos" className="relative py-32 md:py-48 px-6">
      <div className="relative max-w-5xl mx-auto">
        {/* Eyebrow + Super headline */}
        <ScrollReveal>
          <p className="text-text-secondary text-sm tracking-wide uppercase mb-6">
            {t("mosIntro.label")}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl md:text-5xl lg:text-[64px] font-semibold text-text-primary tracking-tight leading-[1.08]">
            TAO <span className="gradient-text-purple">MOS</span>
          </h2>
          <p className="mt-4 text-xl md:text-2xl text-text-secondary">
            {t("mosIntro.subtitle")}
          </p>
        </ScrollReveal>

        {/* Description — constrained width like Apple */}
        <div className="max-w-[720px] mt-12 md:mt-16">
          <ScrollReveal delay={0.2}>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              {t("mosIntro.p1")}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p className="mt-6 text-base text-text-muted leading-relaxed">
              {t("mosIntro.p2")}
            </p>
          </ScrollReveal>
        </div>

        {/* MOS Flow — clean grid, Apple bento style */}
        <ScrollReveal delay={0.3}>
          <div className="mt-20 md:mt-28">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-[1px] overflow-hidden rounded-2xl bg-border-subtle">
              {mosFlowItems.map((item) => (
                <div
                  key={item.num}
                  className="bg-bg-primary p-6 md:p-8 text-center transition-colors duration-300 hover:bg-bg-alt"
                >
                  <span className="text-[11px] text-text-muted tracking-[0.2em]">
                    {item.num}
                  </span>
                  <p className="text-sm font-medium text-text-primary mt-3 tracking-wider">
                    {item.en}
                  </p>
                  <p className="text-xs text-text-secondary mt-1">{item.cn}</p>
                </div>
              ))}
            </div>

            {/* Loop indicator */}
            <div className="flex justify-center mt-6">
              <div className="flex items-center gap-3 text-text-muted">
                <div className="w-16 h-[0.5px] bg-border-subtle" />
                <span className="text-[10px] tracking-[0.3em]">LOOP</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="opacity-40"
                >
                  <path d="M17 1l4 4-4 4" />
                  <path d="M3 11V9a4 4 0 014-4h14" />
                  <path d="M7 23l-4-4 4-4" />
                  <path d="M21 13v2a4 4 0 01-4 4H3" />
                </svg>
                <div className="w-16 h-[0.5px] bg-border-subtle" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
