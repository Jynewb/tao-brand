"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "../ui/ScrollReveal";
import { CASE_STUDIES } from "@/lib/constants";
import { useLocale } from "@/lib/i18n";

/* ── Roborock Visual ────────────────────────────────────── */

function RoborockVisual() {
  const waves = [
    { label: "W1–W3", roi: 1.2, bar: 20 },
    { label: "W4–W6", roi: 2.1, bar: 35 },
    { label: "W7–W9", roi: 3.4, bar: 56 },
    { label: "W10–W12", roi: 5.1, bar: 85 },
  ];
  const kolGrid = [
    { name: "家居KOL A", match: 97, fans: "82万", tier: "S" },
    { name: "科技KOL B", match: 94, fans: "156万", tier: "S" },
    { name: "生活KOL C", match: 91, fans: "45万", tier: "A" },
    { name: "母婴KOL D", match: 88, fans: "67万", tier: "A" },
    { name: "评测KOL E", match: 93, fans: "210万", tier: "S" },
    { name: "清洁KOL F", match: 86, fans: "38万", tier: "A" },
  ];

  return (
    <div className="rounded-2xl overflow-hidden border border-border-subtle bg-bg-alt">
      {/* Title bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border-subtle">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-white/10" />
            <div className="w-2 h-2 rounded-full bg-white/10" />
            <div className="w-2 h-2 rounded-full bg-white/10" />
          </div>
          <span className="text-[10px] text-text-muted tracking-wider ml-2">
            MOS — ROBOROCK CAMPAIGN INTELLIGENCE
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="relative flex w-[5px] h-[5px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40" />
            <span className="relative inline-flex rounded-full w-full h-full bg-green-400" />
          </span>
          <span className="text-[10px] text-text-muted">LIVE</span>
        </div>
      </div>

      <div className="p-5 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          {/* Left: Wave Evolution Chart */}
          <div className="md:col-span-3 rounded-xl p-5 border border-border-subtle bg-bg-primary">
            <div className="flex items-center justify-between mb-5">
              <p className="text-[10px] text-text-muted tracking-wider uppercase">
                Wave-over-Wave ROI Evolution
              </p>
              <p className="text-[10px] text-text-secondary">
                MOS Evolution Layer
              </p>
            </div>
            {/* Bar chart */}
            <div className="flex items-end gap-3 h-36 mb-4">
              {waves.map((w, i) => (
                <div key={w.label} className="flex-1 flex flex-col items-center gap-2">
                  <span className="text-[10px] text-text-secondary font-medium">{w.roi}x</span>
                  <motion.div
                    className="w-full rounded-t-md"
                    style={{
                      background: `rgba(255,255,255,${0.12 + i * 0.1})`,
                    }}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${w.bar}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.15 }}
                  />
                  <span className="text-[9px] text-text-muted">{w.label}</span>
                </div>
              ))}
            </div>
            {/* Insight */}
            <div className="border-t border-border-subtle pt-3 mt-2">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-1 h-1 rounded-full bg-white/40" />
                <span className="text-[10px] text-text-secondary">MOS Insight</span>
              </div>
              <p className="text-[11px] text-text-muted leading-relaxed">
                Evolution layer detected: laundry category content with &quot;quiet operation&quot; angle outperforms
                by 3.2x — auto-adjusting Wave 10+ strategy focus.
              </p>
            </div>
          </div>

          {/* Right: KOL Network Match */}
          <div className="md:col-span-2 rounded-xl p-5 border border-border-subtle bg-bg-primary">
            <p className="text-[10px] text-text-muted tracking-wider uppercase mb-4">
              Network Layer — KOL Match
            </p>
            <div className="space-y-2.5">
              {kolGrid.map((k, i) => (
                <motion.div
                  key={k.name}
                  className="flex items-center gap-3 py-1.5"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center text-[9px] font-semibold shrink-0"
                    style={{
                      background:
                        k.tier === "S"
                          ? "rgba(255,255,255,0.12)"
                          : "rgba(255,255,255,0.06)",
                    }}
                  >
                    {k.tier}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-text-primary truncate">{k.name}</span>
                      <span className="text-[10px] text-text-muted shrink-0 ml-2">
                        {k.fans}
                      </span>
                    </div>
                    <div className="mt-1 h-1 bg-white/[0.04] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full rounded-full bg-white/20"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${k.match}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 + i * 0.08 }}
                      />
                    </div>
                  </div>
                  <span className="text-[10px] text-text-secondary font-medium shrink-0">
                    {k.match}%
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: Perception Signal */}
        <div className="mt-4 rounded-xl p-4 border border-border-subtle bg-bg-primary">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[10px] text-text-muted tracking-wider uppercase">
              Perception Layer — Category Signal Feed
            </p>
            <p className="text-[10px] text-text-muted">Real-time</p>
          </div>
          <div className="flex gap-3 overflow-hidden">
            {[
              { signal: "小红书: \"洗衣机 静音\" 搜索量 +340%", sentiment: "opportunity", time: "2h ago" },
              { signal: "竞品X发布新洗地机，定价 ¥2,999", sentiment: "competitive", time: "4h ago" },
              { signal: "抖音: 清洁家电品类自然流量 +28%", sentiment: "trend", time: "6h ago" },
              { signal: "微博: 石头品牌提及情感值 92/100", sentiment: "positive", time: "8h ago" },
            ].map((s, i) => (
              <motion.div
                key={i}
                className="shrink-0 px-3 py-2 rounded-lg border border-border-subtle bg-white/[0.02]"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      background:
                        s.sentiment === "opportunity"
                          ? "#30d158"
                          : s.sentiment === "competitive"
                          ? "#ff9f0a"
                          : s.sentiment === "trend"
                          ? "#64d2ff"
                          : "#30d158",
                    }}
                  />
                  <span className="text-[9px] text-text-muted">{s.time}</span>
                </div>
                <p className="text-[10px] text-text-secondary whitespace-nowrap">{s.signal}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── GEO Supplement Visual ──────────────────────────────── */

function GeoSupplementVisual() {
  const timeline = [
    { date: "Week 1", phase: "AI 回答探究", detail: "6大平台品牌归属现状审计", status: "done" },
    { date: "Week 2", phase: "引用源解析", detail: "定位错误引用源 & 权威缺口", status: "done" },
    { date: "Week 3–4", phase: "语料创作发布", detail: "结构化品牌语料矩阵 × 12篇", status: "done" },
    { date: "Week 5–6", phase: "追踪迭代", detail: "动态监测 + 二次优化", status: "done" },
    { date: "Week 7–8", phase: "结果验收", detail: "归属正确率 95%+ 达标", status: "done" },
  ];

  return (
    <div className="rounded-2xl overflow-hidden border border-border-subtle bg-bg-alt">
      {/* Title bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border-subtle">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-white/10" />
            <div className="w-2 h-2 rounded-full bg-white/10" />
            <div className="w-2 h-2 rounded-full bg-white/10" />
          </div>
          <span className="text-[10px] text-text-muted tracking-wider ml-2">
            TAO GEO — BRAND ATTRIBUTION MONITOR
          </span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-400/10 text-green-400">
          RESOLVED
        </span>
      </div>

      <div className="p-5 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Left: Before / After comparison */}
          <div className="space-y-4">
            {/* Before */}
            <div className="rounded-xl p-4 border border-red-500/20 bg-red-500/[0.03]">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <span className="text-[10px] text-red-400/80 tracking-wider uppercase font-medium">
                  Before GEO — AI 回答
                </span>
              </div>
              <div className="space-y-2">
                <div className="rounded-lg bg-white/[0.03] px-3 py-2">
                  <p className="text-[11px] text-text-secondary leading-relaxed">
                    <span className="text-text-muted">Q:</span> XX品牌是哪个国家的？
                  </p>
                </div>
                <div className="rounded-lg bg-white/[0.03] px-3 py-2">
                  <p className="text-[11px] text-text-secondary leading-relaxed">
                    <span className="text-text-muted">AI:</span> XX是
                    <span className="text-red-400/80 line-through">美国品牌</span>
                    ，总部位于...
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] text-text-muted">品牌归属正确率</span>
                  <span className="text-sm font-semibold text-red-400/80">27%</span>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="rounded-xl p-4 border border-green-500/20 bg-green-500/[0.03]">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                <span className="text-[10px] text-green-400/80 tracking-wider uppercase font-medium">
                  After GEO — AI 回答
                </span>
              </div>
              <div className="space-y-2">
                <div className="rounded-lg bg-white/[0.03] px-3 py-2">
                  <p className="text-[11px] text-text-secondary leading-relaxed">
                    <span className="text-text-muted">Q:</span> XX品牌是哪个国家的？
                  </p>
                </div>
                <div className="rounded-lg bg-white/[0.03] px-3 py-2">
                  <p className="text-[11px] text-text-secondary leading-relaxed">
                    <span className="text-text-muted">AI:</span> XX是
                    <span className="text-green-400/80">中国知名健康品牌</span>
                    ，由XX集团旗下...含有XX成分，已通过...
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] text-text-muted">品牌归属正确率</span>
                  <span className="text-sm font-semibold text-green-400/80">95%+</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: GEO execution timeline + progress */}
          <div className="space-y-4">
            <div className="rounded-xl p-4 border border-border-subtle bg-bg-primary">
              <p className="text-[10px] text-text-muted tracking-wider uppercase mb-4">
                GEO Execution Pipeline
              </p>
              <div className="space-y-3">
                {timeline.map((t, i) => (
                  <motion.div
                    key={t.phase}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <div className="flex flex-col items-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-green-400/60 mt-1" />
                      {i < timeline.length - 1 && (
                        <div className="w-px h-6 bg-border-subtle" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[11px] text-text-primary font-medium">
                          {t.phase}
                        </span>
                        <span className="text-[9px] text-text-muted">{t.date}</span>
                      </div>
                      <p className="text-[10px] text-text-muted mt-0.5">{t.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Platform coverage */}
            <div className="rounded-xl p-4 border border-border-subtle bg-bg-primary">
              <p className="text-[10px] text-text-muted tracking-wider uppercase mb-3">
                AI Platform Coverage
              </p>
              <div className="grid grid-cols-3 gap-2">
                {["ChatGPT", "Perplexity", "Kimi", "豆包", "通义千问", "文心一言"].map(
                  (platform, i) => (
                    <motion.div
                      key={platform}
                      className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg bg-white/[0.03] border border-border-subtle"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.06 }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
                      <span className="text-[10px] text-text-secondary">{platform}</span>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── JNBY Visual ────────────────────────────────────────── */

function JnbyVisual() {
  const platforms = [
    {
      name: "微信公众号",
      accounts: ["JNBY", "JNBY Outlet", "不止盒子"],
      metrics: { posts: 128, reads: "460K", engagement: "4.2%" },
      trend: "+18%",
    },
    {
      name: "抖音",
      accounts: ["JNBY女装", "jnbybyJNBY", "速写CROQUIS"],
      metrics: { posts: 342, reads: "2.8M", engagement: "6.7%" },
      trend: "+35%",
    },
    {
      name: "小红书",
      accounts: ["JNBY官方", "速写CROQUIS"],
      metrics: { posts: 216, reads: "1.2M", engagement: "8.1%" },
      trend: "+52%",
    },
  ];

  const contentPipeline = [
    { stage: "AI 趋势捕获", detail: "抓取平台热点 & 品类趋势", icon: "01", status: "auto" },
    { stage: "内容方向生成", detail: "基于品牌调性库批量生成", icon: "02", status: "auto" },
    { stage: "创意审核 & 深化", detail: "资深内容团队筛选精修", icon: "03", status: "human" },
    { stage: "多平台适配发布", detail: "一次创作，全域分发", icon: "04", status: "auto" },
    { stage: "效果追踪 → 回流", detail: "数据回流优化下一轮", icon: "05", status: "auto" },
  ];

  const recentContent = [
    { title: "「无界之境」春夏系列视觉故事", platform: "公众号", score: 94, reads: "12.8K" },
    { title: "城市漫游穿搭灵感合集", platform: "小红书", score: 91, reads: "45.2K" },
    { title: "亲子穿搭 · 不止可爱", platform: "抖音", score: 88, reads: "86K" },
    { title: "CROQUIS 男装通勤美学", platform: "抖音", score: 85, reads: "32.1K" },
  ];

  return (
    <div className="rounded-2xl overflow-hidden border border-border-subtle bg-bg-alt">
      {/* Title bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-border-subtle">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-white/10" />
            <div className="w-2 h-2 rounded-full bg-white/10" />
            <div className="w-2 h-2 rounded-full bg-white/10" />
          </div>
          <span className="text-[10px] text-text-muted tracking-wider ml-2">
            MOS — JNBY CONTENT INTELLIGENCE
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="relative flex w-[5px] h-[5px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-40" />
            <span className="relative inline-flex rounded-full w-full h-full bg-green-400" />
          </span>
          <span className="text-[10px] text-text-muted">LIVE</span>
        </div>
      </div>

      <div className="p-5 md:p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Left: Platform Matrix */}
          <div className="md:col-span-2 space-y-3">
            {platforms.map((p, i) => (
              <motion.div
                key={p.name}
                className="rounded-xl p-4 border border-border-subtle bg-bg-primary"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] text-text-primary font-medium">{p.name}</span>
                    <span className="text-[10px] text-green-400/80">{p.trend}</span>
                  </div>
                  <div className="flex gap-1.5">
                    {p.accounts.map((acc) => (
                      <span
                        key={acc}
                        className="text-[9px] px-1.5 py-0.5 rounded-full border border-border-subtle text-text-muted"
                      >
                        {acc}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="text-[9px] text-text-muted mb-0.5">发布内容</p>
                    <p className="text-sm font-semibold text-text-primary">{p.metrics.posts}</p>
                  </div>
                  <div>
                    <p className="text-[9px] text-text-muted mb-0.5">总阅读/播放</p>
                    <p className="text-sm font-semibold text-text-primary">{p.metrics.reads}</p>
                  </div>
                  <div>
                    <p className="text-[9px] text-text-muted mb-0.5">互动率</p>
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold text-text-primary">{p.metrics.engagement}</p>
                      <div className="flex-1 h-1 bg-white/[0.04] rounded-full overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-white/20"
                          initial={{ width: 0 }}
                          whileInView={{ width: p.metrics.engagement }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.4 + i * 0.1 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: AI Content Pipeline */}
          <div className="space-y-4">
            <div className="rounded-xl p-4 border border-border-subtle bg-bg-primary">
              <p className="text-[10px] text-text-muted tracking-wider uppercase mb-4">
                AI Content Pipeline
              </p>
              <div className="space-y-2.5">
                {contentPipeline.map((step, i) => (
                  <motion.div
                    key={step.stage}
                    className="flex items-start gap-2.5"
                    initial={{ opacity: 0, x: 8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                  >
                    <div className="flex flex-col items-center shrink-0">
                      <div
                        className="w-5 h-5 rounded-md flex items-center justify-center text-[9px] font-medium mt-0.5"
                        style={{
                          background:
                            step.status === "human"
                              ? "rgba(255,159,10,0.15)"
                              : "rgba(255,255,255,0.06)",
                          color:
                            step.status === "human"
                              ? "#ff9f0a"
                              : "rgba(255,255,255,0.4)",
                        }}
                      >
                        {step.icon}
                      </div>
                      {i < contentPipeline.length - 1 && (
                        <div className="w-px h-3 bg-border-subtle mt-1" />
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] text-text-primary font-medium">
                          {step.stage}
                        </span>
                        {step.status === "human" && (
                          <span className="text-[8px] px-1 py-0.5 rounded bg-[#ff9f0a]/10 text-[#ff9f0a]">
                            HUMAN
                          </span>
                        )}
                        {step.status === "auto" && (
                          <span className="text-[8px] px-1 py-0.5 rounded bg-white/[0.04] text-text-muted">
                            AI
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] text-text-muted mt-0.5">{step.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom: Recent AI-scored Content */}
        <div className="mt-4 rounded-xl p-4 border border-border-subtle bg-bg-primary">
          <div className="flex items-center justify-between mb-3">
            <p className="text-[10px] text-text-muted tracking-wider uppercase">
              Recent Content · AI Quality Score
            </p>
            <p className="text-[10px] text-text-muted">Creation Layer Output</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {recentContent.map((c, i) => (
              <motion.div
                key={c.title}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg border border-border-subtle bg-white/[0.01]"
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.08 }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-[11px] font-semibold"
                  style={{
                    background:
                      c.score >= 90
                        ? "rgba(48,209,88,0.1)"
                        : "rgba(255,255,255,0.04)",
                    color:
                      c.score >= 90
                        ? "#30d158"
                        : "rgba(255,255,255,0.5)",
                  }}
                >
                  {c.score}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[11px] text-text-primary truncate">{c.title}</p>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[9px] text-text-muted">{c.platform}</span>
                    <span className="text-[9px] text-text-muted">·</span>
                    <span className="text-[9px] text-text-secondary">{c.reads} reads</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── CaseStudies Section ────────────────────────────────── */

const VISUAL_MAP: Record<string, React.FC> = {
  roborock: RoborockVisual,
  jnby: JnbyVisual,
  "geo-supplement": GeoSupplementVisual,
};

export function CaseStudies() {
  const { t, translations } = useLocale();

  return (
    <section id="cases" className="relative py-32 md:py-48 px-6">
      <div className="relative max-w-5xl mx-auto">
        <ScrollReveal>
          <p className="text-text-secondary text-sm tracking-wide uppercase mb-6">
            {t("caseStudies.label")}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-semibold text-text-primary tracking-tight leading-tight">
            {t("caseStudies.heading_prefix")}
            {t("caseStudies.heading_highlight")}
          </h2>
          <p className="mt-6 text-lg md:text-xl text-text-secondary mb-20 md:mb-28 max-w-[560px] leading-relaxed">
            {t("caseStudies.description")}
          </p>
        </ScrollReveal>

        <div className="space-y-24 md:space-y-36">
          {CASE_STUDIES.map((cs, i) => {
            const caseTranslations =
              translations.caseStudies.cases[
                cs.id as keyof typeof translations.caseStudies.cases
              ];
            const results =
              "results" in caseTranslations
                ? (
                    caseTranslations as unknown as {
                      results: { value: string; label: string }[];
                    }
                  ).results
                : cs.results;
            const VisualComponent = VISUAL_MAP[cs.visual];

            return (
              <ScrollReveal key={cs.id} delay={i * 0.05}>
                <div>
                  {/* Category */}
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-xs text-text-muted tracking-wider uppercase">
                      {cs.categoryEN}
                    </span>
                    <div className="flex-1 h-[0.5px] bg-border-subtle" />
                  </div>

                  <h3 className="text-xl md:text-2xl font-medium text-text-primary mb-3">
                    {caseTranslations.client}
                  </h3>
                  <p className="text-base text-text-secondary leading-relaxed mb-8 max-w-[640px]">
                    {caseTranslations.description}
                  </p>

                  {/* Interactive Visual */}
                  {VisualComponent && <VisualComponent />}

                  {/* Results */}
                  {results && results.length > 0 && (
                    <div className="flex flex-wrap gap-8 md:gap-12 mt-8">
                      {results.map((r) => (
                        <div key={r.label}>
                          <span className="text-2xl md:text-3xl font-semibold text-text-primary">
                            {r.value}
                          </span>
                          <p className="text-xs text-text-secondary tracking-wider mt-2">
                            {r.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
