"use client";

import { ScrollReveal } from "../ui/ScrollReveal";
import { NetworkGraph } from "../ui/NetworkGraph";

export function MOSIntro() {
  return (
    <section className="relative py-28 md:py-40 px-6">
      <NetworkGraph className="opacity-40" />
      <div className="relative max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-text-muted text-xs tracking-[0.4em] uppercase mb-6">
            Methodology
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight text-text-primary tracking-wide leading-tight">
            TAO{" "}
            <span className="gradient-text font-light">MOS</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary font-extralight mt-3 tracking-wide">
            Marketing Operating System
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div
            className="w-16 h-px mt-12 mb-12"
            style={{
              background:
                "linear-gradient(90deg, rgba(99,102,241,0.5), transparent)",
            }}
          />
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <p className="text-base md:text-lg font-extralight text-text-secondary leading-loose max-w-3xl">
            传统营销是项目制的——每一次campaign从零开始，经验留在人脑里，换一个团队就归零。TAO MOS是一套AI原生的营销操作系统。它把品牌的每一次市场动作都转化为系统的养分——数据回流、策略迭代、认知沉淀。不是做完一个项目就结束，而是每一次执行都在让下一次更精准。
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.4}>
          <p className="text-sm md:text-base font-extralight text-text-muted leading-loose max-w-3xl mt-6">
            这不是在旧流程上加AI工具，而是用AI重新定义营销服务的底层逻辑。
          </p>
        </ScrollReveal>

        {/* MOS Flow Diagram */}
        <ScrollReveal delay={0.5}>
          <div className="mt-20 md:mt-28">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
              {[
                { num: "01", en: "PERCEPTION", cn: "感知" },
                { num: "02", en: "STRATEGY", cn: "策略" },
                { num: "03", en: "NETWORK", cn: "网络" },
                { num: "04", en: "CREATION", cn: "创造" },
                { num: "05", en: "AMPLIFY", cn: "放大" },
                { num: "06", en: "EVOLUTION", cn: "进化" },
              ].map((item) => (
                <div
                  key={item.num}
                  className="bg-bg-primary p-6 md:p-8 text-center group hover:bg-white/[0.03] transition-colors duration-500"
                >
                  <span className="text-[10px] text-text-muted tracking-[0.3em]">
                    {item.num}
                  </span>
                  <p className="text-xs md:text-sm font-light text-text-primary mt-3 tracking-[0.15em]">
                    {item.en}
                  </p>
                  <p className="text-xs text-text-muted mt-1">{item.cn}</p>
                </div>
              ))}
            </div>

            {/* Loop indicator */}
            <div className="flex justify-center mt-6">
              <div className="flex items-center gap-3 text-text-muted">
                <div
                  className="w-20 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(99,102,241,0.3))",
                  }}
                />
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
                <div
                  className="w-20 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(99,102,241,0.3), transparent)",
                  }}
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
