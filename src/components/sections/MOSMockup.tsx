"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "../ui/ScrollReveal";
import { useLocale } from "@/lib/i18n";

/* ── Shared small components ─────────────────────────────── */

function PulsingDot({ color, size = 5 }: { color: string; size?: number }) {
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

/* ── Screen 1: Perception — Signal Feed ──────────────────── */

function PerceptionScreen() {
  const signals = [
    {
      platform: "小红书",
      content: "\"清洁家电\" 品类搜索量 7 日环比 +42%",
      tag: "TREND",
      tagColor: "#64d2ff",
      time: "12min ago",
    },
    {
      platform: "抖音",
      content: "竞品A发布新品视频，24h播放 320万",
      tag: "COMPETITIVE",
      tagColor: "#ff9f0a",
      time: "28min ago",
    },
    {
      platform: "微博",
      content: "品牌提及情感值上升至 89/100（+5.2）",
      tag: "SENTIMENT",
      tagColor: "#30d158",
      time: "45min ago",
    },
    {
      platform: "百度指数",
      content: "\"静音洗衣机\" 搜索热度突破历史新高",
      tag: "OPPORTUNITY",
      tagColor: "#30d158",
      time: "1h ago",
    },
    {
      platform: "知乎",
      content: "\"2026年值得买的扫地机器人\" 话题新增 1.2k 讨论",
      tag: "TOPIC",
      tagColor: "#bf5af2",
      time: "2h ago",
    },
  ];

  return (
    <div className="p-5 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
        {/* Left: Live Signal Feed */}
        <div className="md:col-span-3 space-y-2.5">
          {signals.map((s, i) => (
            <motion.div
              key={i}
              className="flex items-start gap-3 rounded-xl p-3.5 border border-border-subtle bg-bg-primary"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.12 }}
            >
              <div className="shrink-0 mt-0.5">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: s.tagColor }}
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] text-text-primary font-medium">
                    {s.platform}
                  </span>
                  <span
                    className="text-[9px] font-medium tracking-wider px-1.5 py-0.5 rounded-full"
                    style={{
                      color: s.tagColor,
                      background: `${s.tagColor}15`,
                    }}
                  >
                    {s.tag}
                  </span>
                  <span className="text-[9px] text-text-muted ml-auto shrink-0">
                    {s.time}
                  </span>
                </div>
                <p className="text-[11px] text-text-secondary leading-relaxed">
                  {s.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: AI Summary Card */}
        <div className="md:col-span-2 space-y-4">
          <motion.div
            className="rounded-xl p-5 border border-border-subtle bg-bg-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-5 rounded-md bg-white/[0.08] flex items-center justify-center">
                <span className="text-[10px]">AI</span>
              </div>
              <span className="text-[10px] text-text-muted tracking-wider uppercase">
                Perception Summary
              </span>
            </div>
            <div className="space-y-3">
              <div className="rounded-lg bg-white/[0.03] px-3 py-2.5">
                <p className="text-[11px] text-text-secondary leading-relaxed">
                  检测到<span className="text-text-primary font-medium">「清洁家电」品类窗口期信号</span>
                  ——静音洗衣机搜索热度创新高，竞品A刚发布新品但用户反馈尚未形成，
                  <span className="text-text-primary font-medium">
                    建议 48h 内启动内容抢占。
                  </span>
                </p>
              </div>
              <div className="rounded-lg bg-white/[0.03] px-3 py-2.5">
                <p className="text-[11px] text-text-secondary leading-relaxed">
                  品牌情感值持续上升，当前内容策略有效。
                  <span className="text-text-primary font-medium">
                    推荐触发策略层推演。
                  </span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Trend indicator */}
          <motion.div
            className="rounded-xl p-4 border border-border-subtle bg-bg-primary"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p className="text-[10px] text-text-muted tracking-wider uppercase mb-3">
              Trending Topics
            </p>
            <div className="flex flex-wrap gap-1.5">
              {[
                { text: "静音洗衣机", weight: 1 },
                { text: "扫地机器人", weight: 0.8 },
                { text: "清洁家电", weight: 0.9 },
                { text: "智能家居", weight: 0.6 },
                { text: "石头科技", weight: 0.7 },
                { text: "自清洁", weight: 0.5 },
                { text: "懒人家电", weight: 0.65 },
              ].map((topic) => (
                <span
                  key={topic.text}
                  className="px-2 py-1 rounded-md border border-border-subtle text-text-secondary"
                  style={{
                    fontSize: `${9 + topic.weight * 3}px`,
                    opacity: 0.5 + topic.weight * 0.5,
                  }}
                >
                  {topic.text}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ── Screen 2: Strategy — AI Recommendation ──────────────── */

function StrategyScreen() {
  const [selected, setSelected] = useState<number | null>(null);

  const strategies = [
    {
      name: "路径 A：KOL 矩阵种草",
      confidence: 87,
      roi: "3.2x",
      budget: "¥180k",
      reasoning:
        "历史数据显示家居类 KOL 在静音家电品类的种草转化率最高，建议 S 级 ×2 + A 级 ×8 矩阵覆盖。",
      tags: ["High Convert", "Proven"],
    },
    {
      name: "路径 B：内容抢占 + 信息流",
      confidence: 74,
      roi: "2.6x",
      budget: "¥220k",
      reasoning:
        "竞品刚发布，用户决策窗口未关闭。快速产出对比评测内容 + 精准信息流投放可截获搜索流量。",
      tags: ["Time-sensitive", "Competitive"],
    },
    {
      name: "路径 C：品牌事件 + 全域联动",
      confidence: 61,
      roi: "4.1x",
      budget: "¥350k",
      reasoning:
        "预估 ROI 最高但不确定性大，需要品牌侧资源配合。适合预算充足、追求破圈的品牌阶段。",
      tags: ["High-Risk High-Reward"],
    },
  ];

  return (
    <div className="p-5 md:p-6">
      <div className="flex items-center gap-2 mb-5">
        <div className="w-5 h-5 rounded-md bg-white/[0.08] flex items-center justify-center">
          <span className="text-[10px]">AI</span>
        </div>
        <p className="text-[11px] text-text-secondary">
          基于感知层信号，AI 已生成 3 条策略路径。请选择一条进入执行。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {strategies.map((s, i) => {
          const isSelected = selected === i;
          return (
            <motion.button
              key={s.name}
              className={`text-left rounded-xl p-5 border transition-colors ${
                isSelected
                  ? "border-white/30 bg-white/[0.06]"
                  : "border-border-subtle bg-bg-primary hover:border-white/15"
              }`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              onClick={() => setSelected(i)}
            >
              <div className="flex items-center justify-between mb-3">
                <p className="text-[12px] text-text-primary font-medium">{s.name}</p>
                {isSelected && (
                  <motion.div
                    className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-white/60" />
                  </motion.div>
                )}
              </div>

              {/* Tags */}
              <div className="flex gap-1.5 mb-4">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] px-1.5 py-0.5 rounded-full border border-border-subtle text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div>
                  <p className="text-[9px] text-text-muted mb-1">置信度</p>
                  <p className="text-sm font-semibold text-text-primary">{s.confidence}%</p>
                </div>
                <div>
                  <p className="text-[9px] text-text-muted mb-1">预估 ROI</p>
                  <p className="text-sm font-semibold text-text-primary">{s.roi}</p>
                </div>
                <div>
                  <p className="text-[9px] text-text-muted mb-1">预算</p>
                  <p className="text-sm font-semibold text-text-primary">{s.budget}</p>
                </div>
              </div>

              {/* Confidence bar */}
              <div className="h-1 bg-white/[0.04] rounded-full overflow-hidden mb-3">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background:
                      s.confidence > 80
                        ? "rgba(48,209,88,0.5)"
                        : s.confidence > 70
                        ? "rgba(255,159,10,0.5)"
                        : "rgba(255,69,58,0.4)",
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${s.confidence}%` }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
                />
              </div>

              {/* Reasoning */}
              <p className="text-[10px] text-text-muted leading-relaxed">{s.reasoning}</p>
            </motion.button>
          );
        })}
      </div>

      {/* Selection feedback */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="mt-5 rounded-xl p-4 border border-white/10 bg-white/[0.03]"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              <p className="text-[11px] text-text-secondary">
                已选择 <span className="text-text-primary font-medium">{strategies[selected].name}</span>
                {" "}— 系统正在调度网络层资源、匹配最优 KOL 组合...
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Screen 3: Evolution — Feedback Loop ─────────────────── */

function EvolutionScreen() {
  const waveData = [
    { wave: "W1", roi: 1.0, learn: "基线建立" },
    { wave: "W2", roi: 1.3, learn: "内容角度优化" },
    { wave: "W3", roi: 1.8, learn: "KOL 组合调整" },
    { wave: "W4", roi: 2.1, learn: "投放时段优化" },
    { wave: "W5", roi: 2.6, learn: "人群定向收窄" },
    { wave: "W6", roi: 3.1, learn: "创意模板迭代" },
    { wave: "W7", roi: 3.4, learn: "跨平台协同" },
    { wave: "W8", roi: 3.9, learn: "转化链路缩短" },
  ];

  return (
    <div className="p-5 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Main chart */}
        <div className="md:col-span-2 rounded-xl p-5 border border-border-subtle bg-bg-primary">
          <div className="flex items-center justify-between mb-5">
            <p className="text-[10px] text-text-muted tracking-wider uppercase">
              Campaign ROI Evolution
            </p>
            <p className="text-[10px] text-text-secondary">
              每一波次数据自动回流 → 系统更聪明
            </p>
          </div>

          {/* Chart area */}
          <div className="relative h-44 md:h-52">
            <svg
              viewBox="0 0 400 160"
              className="w-full h-full"
              preserveAspectRatio="none"
            >
              {/* Grid */}
              {[0, 40, 80, 120, 160].map((y) => (
                <line
                  key={y}
                  x1="0" y1={y} x2="400" y2={y}
                  stroke="rgba(255,255,255,0.03)"
                  strokeWidth="0.5"
                />
              ))}

              {/* Area fill */}
              <defs>
                <linearGradient id="evoGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(48,209,88,0.12)" />
                  <stop offset="100%" stopColor="rgba(48,209,88,0)" />
                </linearGradient>
              </defs>
              <motion.path
                d="M0,145 C25,140 50,132 75,125 C100,118 125,105 150,95 C175,85 200,76 225,68 C250,58 275,50 300,42 C325,36 350,30 375,24 L400,20 L400,160 L0,160 Z"
                fill="url(#evoGrad)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
              />

              {/* Line */}
              <motion.path
                d="M0,145 C25,140 50,132 75,125 C100,118 125,105 150,95 C175,85 200,76 225,68 C250,58 275,50 300,42 C325,36 350,30 375,24 L400,20"
                fill="none"
                stroke="rgba(48,209,88,0.5)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.3 }}
              />

              {/* Dots */}
              {waveData.map((w, i) => {
                const x = (i / (waveData.length - 1)) * 400;
                const y = 145 - (w.roi / 4.0) * 125;
                return (
                  <motion.circle
                    key={w.wave}
                    cx={x} cy={y} r="3"
                    fill="rgba(48,209,88,0.6)"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  />
                );
              })}
            </svg>

            {/* Labels */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-between px-1">
              {waveData.map((w) => (
                <span key={w.wave} className="text-[8px] text-text-muted">
                  {w.wave}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom stats */}
          <div className="grid grid-cols-3 gap-4 mt-5 pt-4 border-t border-border-subtle">
            {[
              { label: "ROI 提升", value: "+290%", sub: "W1 → W8" },
              { label: "策略精准度", value: "3.9x", sub: "vs 初始 Brief" },
              { label: "洞察生成速度", value: "-68%", sub: "vs 人工流程" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-[10px] text-text-muted tracking-wider">
                  {stat.label}
                </p>
                <p className="text-lg font-semibold text-text-primary mt-1">
                  {stat.value}
                </p>
                <p className="text-[9px] text-text-muted mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Learning log */}
        <div className="rounded-xl p-5 border border-border-subtle bg-bg-primary">
          <p className="text-[10px] text-text-muted tracking-wider uppercase mb-4">
            System Learning Log
          </p>
          <div className="space-y-3">
            {waveData.map((w, i) => (
              <motion.div
                key={w.wave}
                className="flex items-start gap-2.5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.08 }}
              >
                <div className="flex flex-col items-center shrink-0">
                  <div
                    className="w-1.5 h-1.5 rounded-full mt-1.5"
                    style={{
                      background: `rgba(48,209,88,${0.2 + (i / waveData.length) * 0.6})`,
                    }}
                  />
                  {i < waveData.length - 1 && (
                    <div className="w-px h-4 bg-border-subtle" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-text-primary font-medium">
                      {w.wave}
                    </span>
                    <span className="text-[9px] text-text-muted">
                      ROI {w.roi}x
                    </span>
                  </div>
                  <p className="text-[10px] text-text-muted">{w.learn}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Feedback loop indicator */}
          <div className="mt-4 pt-3 border-t border-border-subtle">
            <div className="flex items-center gap-2">
              <PulsingDot color="#30d158" />
              <p className="text-[10px] text-text-secondary">
                数据持续回流中...
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Main Component ──────────────────────────────────────── */

const SCREENS = [
  { id: "perception", label: "PERCEPTION", labelCN: "感知层" },
  { id: "strategy", label: "STRATEGY", labelCN: "策略层" },
  { id: "evolution", label: "EVOLUTION", labelCN: "进化层" },
] as const;

const SCREEN_COMPONENTS: Record<string, React.FC> = {
  perception: PerceptionScreen,
  strategy: StrategyScreen,
  evolution: EvolutionScreen,
};

export function MOSMockup() {
  const { t } = useLocale();
  const [activeScreen, setActiveScreen] = useState<string>("perception");

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

        <ScrollReveal delay={0.2}>
          <div className="rounded-2xl overflow-hidden border border-border-subtle bg-bg-alt">
            {/* Title bar with screen tabs */}
            <div className="flex items-center justify-between px-6 py-3 border-b border-border-subtle">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                </div>
                <span className="text-[11px] text-text-muted tracking-wider ml-3">
                  TAO MOS
                </span>
              </div>
              <div className="flex items-center gap-2">
                <PulsingDot color="#30d158" size={5} />
                <span className="text-[11px] text-text-muted">LIVE</span>
              </div>
            </div>

            {/* Tab switcher */}
            <div className="flex border-b border-border-subtle">
              {SCREENS.map((screen) => (
                <button
                  key={screen.id}
                  className={`flex-1 flex items-center justify-center gap-2 py-3 transition-colors text-center ${
                    activeScreen === screen.id
                      ? "bg-white/[0.04] border-b border-white/20"
                      : "hover:bg-white/[0.02]"
                  }`}
                  onClick={() => setActiveScreen(screen.id)}
                >
                  <span
                    className={`text-[11px] tracking-wider ${
                      activeScreen === screen.id
                        ? "text-text-primary font-medium"
                        : "text-text-muted"
                    }`}
                  >
                    {screen.label}
                  </span>
                  <span className="text-[9px] text-text-muted hidden md:inline">
                    {screen.labelCN}
                  </span>
                </button>
              ))}
            </div>

            {/* Screen content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeScreen}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {(() => {
                  const ScreenComponent = SCREEN_COMPONENTS[activeScreen];
                  return ScreenComponent ? <ScreenComponent /> : null;
                })()}
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
