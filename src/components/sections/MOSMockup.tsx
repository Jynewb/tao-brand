"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "../ui/ScrollReveal";
import { useLocale } from "@/lib/i18n";

function MiniBar({ height, delay }: { height: number; delay: number }) {
  return (
    <motion.div
      className="w-2 rounded-sm bg-text-secondary/30"
      initial={{ height: 0 }}
      whileInView={{ height }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
    />
  );
}

function PulsingDot({ color, size = 6 }: { color: string; size?: number }) {
  return (
    <span className="relative flex" style={{ width: size, height: size }}>
      <span
        className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-40"
        style={{ backgroundColor: color }}
      />
      <span
        className="relative inline-flex rounded-full h-full w-full"
        style={{ backgroundColor: color }}
      />
    </span>
  );
}

export function MOSMockup() {
  const { t } = useLocale();
  const barData = [28, 45, 32, 58, 42, 65, 38, 72, 55, 48, 62, 78];

  return (
    <section className="relative py-16 md:py-24 px-6">
      <div className="relative max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-text-secondary text-sm tracking-wide uppercase mb-6">
            {t("mosMockup.label")}
          </p>
          <p className="text-base md:text-lg text-text-secondary mb-12 max-w-[560px] leading-relaxed">
            {t("mosMockup.description")}
          </p>
        </ScrollReveal>

        {/* Dashboard Mockup — clean Apple aesthetic */}
        <ScrollReveal delay={0.2}>
          <div className="rounded-2xl overflow-hidden border border-border-subtle bg-bg-alt">
            {/* Title bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border-subtle">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <span className="text-[11px] text-text-muted tracking-wider ml-3">
                  TAO MOS — CAMPAIGN INTELLIGENCE
                </span>
              </div>
              <div className="flex items-center gap-2">
                <PulsingDot color="#30d158" size={5} />
                <span className="text-[11px] text-text-muted">LIVE</span>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left — Metrics */}
                <div className="space-y-4">
                  {/* Metric card 1 */}
                  <div className="rounded-xl p-5 border border-border-subtle bg-bg-primary">
                    <p className="text-[11px] text-text-muted tracking-wider uppercase">
                      Market Perception Score
                    </p>
                    <div className="flex items-end gap-2 mt-3">
                      <span className="text-3xl font-semibold text-text-primary">
                        87.3
                      </span>
                      <span className="text-xs text-green-400/80 mb-1">
                        +12.4%
                      </span>
                    </div>
                    <div className="mt-3 h-1 bg-white/[0.06] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-text-secondary/40"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "87%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.5 }}
                      />
                    </div>
                  </div>

                  {/* Metric card 2 */}
                  <div className="rounded-xl p-5 border border-border-subtle bg-bg-primary">
                    <p className="text-[11px] text-text-muted tracking-wider uppercase">
                      Content Performance
                    </p>
                    <div className="flex items-end gap-2 mt-3">
                      <span className="text-3xl font-semibold text-text-primary">
                        2.4M
                      </span>
                      <span className="text-xs text-text-muted mb-1">
                        Impressions
                      </span>
                    </div>
                    <div className="flex items-end gap-1 mt-4 h-12">
                      {barData.map((h, i) => (
                        <MiniBar
                          key={i}
                          height={h * 0.6}
                          delay={0.6 + i * 0.05}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Metric card 3 */}
                  <div className="rounded-xl p-5 border border-border-subtle bg-bg-primary">
                    <p className="text-[11px] text-text-muted tracking-wider uppercase">
                      KOL Match Accuracy
                    </p>
                    <div className="flex items-end gap-2 mt-3">
                      <span className="text-3xl font-semibold text-text-primary">
                        94%
                      </span>
                      <span className="text-xs text-text-secondary mb-1">
                        vs 68% industry avg
                      </span>
                    </div>
                  </div>
                </div>

                {/* Center — Main chart area */}
                <div className="md:col-span-2 rounded-xl p-5 border border-border-subtle bg-bg-primary">
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-[11px] text-text-muted tracking-wider uppercase">
                      Campaign Evolution Tracker
                    </p>
                    <div className="flex gap-4">
                      {["Wave 1", "Wave 2", "Wave 3"].map((w, i) => (
                        <div key={w} className="flex items-center gap-1.5">
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{
                              backgroundColor:
                                i === 0
                                  ? "rgba(255,255,255,0.2)"
                                  : i === 1
                                  ? "rgba(255,255,255,0.35)"
                                  : "rgba(255,255,255,0.55)",
                            }}
                          />
                          <span className="text-[10px] text-text-muted">
                            {w}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="relative h-48 md:h-56">
                    <svg
                      viewBox="0 0 400 160"
                      className="w-full h-full"
                      preserveAspectRatio="none"
                    >
                      {[0, 40, 80, 120, 160].map((y) => (
                        <line
                          key={y}
                          x1="0"
                          y1={y}
                          x2="400"
                          y2={y}
                          stroke="rgba(255,255,255,0.04)"
                          strokeWidth="0.5"
                        />
                      ))}

                      <motion.path
                        d="M0,130 C40,125 80,115 120,110 C160,105 200,100 240,95 C280,92 320,88 360,85 L400,82"
                        fill="none"
                        stroke="rgba(255,255,255,0.2)"
                        strokeWidth="1.5"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                      />

                      <motion.path
                        d="M0,120 C40,110 80,95 120,85 C160,78 200,70 240,60 C280,55 320,48 360,42 L400,38"
                        fill="none"
                        stroke="rgba(255,255,255,0.35)"
                        strokeWidth="1.5"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.6 }}
                      />

                      <motion.path
                        d="M0,100 C40,85 80,65 120,50 C160,40 200,30 240,22 C280,18 320,15 360,12 L400,10"
                        fill="none"
                        stroke="rgba(255,255,255,0.55)"
                        strokeWidth="2"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.9 }}
                      />

                      <defs>
                        <linearGradient
                          id="fillGrad"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="rgba(255,255,255,0.08)"
                          />
                          <stop
                            offset="100%"
                            stopColor="rgba(255,255,255,0)"
                          />
                        </linearGradient>
                      </defs>
                      <motion.path
                        d="M0,100 C40,85 80,65 120,50 C160,40 200,30 240,22 C280,18 320,15 360,12 L400,10 L400,160 L0,160 Z"
                        fill="url(#fillGrad)"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1.2 }}
                      />
                    </svg>

                    <motion.div
                      className="absolute right-4 top-2 text-right"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 1.5 }}
                    >
                      <p className="text-[10px] text-text-secondary tracking-wider">
                        SYSTEM EVOLUTION
                      </p>
                      <p className="text-[10px] text-text-muted mt-0.5">
                        Each wave outperforms the last
                      </p>
                    </motion.div>
                  </div>

                  {/* Bottom stats */}
                  <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-border-subtle">
                    {[
                      {
                        label: "ROI Improvement",
                        value: "+47%",
                        sub: "Wave over Wave",
                      },
                      {
                        label: "Strategy Accuracy",
                        value: "3.2x",
                        sub: "vs Initial Brief",
                      },
                      {
                        label: "Time to Insight",
                        value: "-68%",
                        sub: "vs Manual Process",
                      },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <p className="text-[10px] text-text-muted tracking-wider">
                          {stat.label}
                        </p>
                        <p className="text-lg font-semibold text-text-primary mt-1">
                          {stat.value}
                        </p>
                        <p className="text-[9px] text-text-muted mt-0.5">
                          {stat.sub}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
