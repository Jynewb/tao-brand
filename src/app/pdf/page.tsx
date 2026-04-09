"use client";

import { useEffect, Suspense, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { useLocale, type Locale } from "@/lib/i18n";
import { MOS_MODULES, SERVICE_PILLARS, CASE_STUDIES, CLIENT_GROUPS, TIMELINE, CONTACT } from "@/lib/constants";
import { asset } from "@/lib/prefix";

function Slide({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`slide w-[1280px] h-[720px] overflow-hidden bg-bg-primary relative flex-shrink-0 ${className ?? ""}`}
      style={{ pageBreakAfter: "always" }}
    >
      {children}
    </div>
  );
}

function LanguageSetter() {
  const searchParams = useSearchParams();
  const { setLocale } = useLocale();

  useEffect(() => {
    const lang = searchParams.get("lang");
    if (lang === "en" || lang === "zh") {
      setLocale(lang as Locale);
    }
  }, [searchParams, setLocale]);

  return null;
}

function PDFSlides() {
  const { t, locale, translations } = useLocale();

  return (
    <div className="flex flex-col items-center">
      <Suspense>
        <LanguageSetter />
      </Suspense>

      {/* Slide 1: Cover */}
      <Slide className="flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
        <div className="relative z-10 flex flex-col items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={asset("/logo-tao.png")} alt="TAO" className="w-[220px] h-auto mb-16" style={{ filter: "invert(1)" }} />
          <h1 className="text-6xl font-extralight tracking-tight text-text-primary leading-none">
            {t("hero.title1")}
            <span className="text-purple-end font-light">{t("hero.titlePunctuation")}</span>{" "}
            {t("hero.title2")}
            <span className="text-purple-end font-light">.</span>
          </h1>
          <p className="mt-4 text-2xl font-extralight text-text-secondary tracking-widest">
            {t("hero.tagline")}
          </p>
          <div className="w-12 h-px mx-auto my-10" style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)" }} />
          <p className="text-sm text-text-muted tracking-[0.3em] font-light">
            {t("hero.positioning")}
          </p>
        </div>
      </Slide>

      {/* Slide 2: Manifesto */}
      <Slide className="flex items-center px-24">
        <div className="max-w-[1000px]">
          <p className="text-text-muted text-xs tracking-[0.4em] uppercase mb-10">{t("manifesto.label")}</p>
          <p className="text-xl font-extralight text-text-secondary leading-relaxed mb-6">
            {t("manifesto.p1")}
          </p>
          <p className="text-xl font-extralight text-text-secondary leading-relaxed mb-6">
            {t("manifesto.p3")}
          </p>
          <div className="w-16 h-px my-8" style={{ background: "linear-gradient(90deg, rgba(99,102,241,0.5), transparent)" }} />
          <p className="text-xl font-extralight text-text-secondary leading-relaxed mb-8">
            {t("manifesto.p5_prefix")}
            <span className="font-light text-purple-end">{t("manifesto.p5_highlight")}</span>
            {t("manifesto.p5_suffix")}
          </p>
          <p className="text-2xl font-light text-purple-end leading-relaxed mt-6">
            {t("manifesto.p6_line1")}
            {t("manifesto.p6_line2")}
          </p>
        </div>
      </Slide>

      {/* Slide 3: MOS Overview */}
      <Slide className="flex flex-col justify-center px-24">
        <p className="text-text-muted text-xs tracking-[0.4em] uppercase mb-6">{t("mosIntro.label")}</p>
        <h2 className="text-5xl font-extralight text-text-primary tracking-wide leading-tight mb-2">
          TAO <span className="font-light text-purple-end">MOS</span>
        </h2>
        <p className="text-lg text-text-secondary font-extralight tracking-wide mb-10">
          {t("mosIntro.subtitle")}
        </p>
        <p className="text-base font-extralight text-text-secondary leading-loose max-w-[900px] mb-16">
          {t("mosIntro.p1")}
        </p>
        <div className="grid grid-cols-6 gap-px bg-white/[0.06] rounded-xl overflow-hidden">
          {[
            { num: "01", en: "PERCEPTION", cn: "感知" },
            { num: "02", en: "STRATEGY", cn: "策略" },
            { num: "03", en: "NETWORK", cn: "网络" },
            { num: "04", en: "CREATION", cn: "创造" },
            { num: "05", en: "AMPLIFY", cn: "放大" },
            { num: "06", en: "EVOLUTION", cn: "进化" },
          ].map((item) => (
            <div key={item.num} className="bg-bg-primary p-5 text-center">
              <span className="text-[10px] text-text-muted tracking-[0.3em]">{item.num}</span>
              <p className="text-xs font-light text-text-primary mt-2 tracking-[0.15em]">{item.en}</p>
              <p className="text-xs text-text-muted mt-1">{item.cn}</p>
            </div>
          ))}
        </div>
      </Slide>

      {/* Slide 4: MOS Modules 1-3 */}
      <Slide className="flex flex-col justify-center px-20">
        <div className="grid grid-cols-3 gap-10">
          {MOS_MODULES.slice(0, 3).map((mod) => (
            <div key={mod.id} className="border-l border-white/[0.08] pl-6">
              <span className="text-[10px] text-text-muted tracking-[0.3em]">{mod.number}</span>
              <h3 className="text-base font-light text-text-primary tracking-[0.15em] mt-2">{mod.name}</h3>
              <p className="text-xs text-text-muted mt-1">{mod.nameCN}</p>
              <p className="text-[11px] text-text-muted mt-1 tracking-wide">
                {t(`mosModules.${mod.id}.subtitle`)}
              </p>
              <p className="text-xs font-light text-text-secondary/80 italic leading-relaxed mt-5 mb-4">
                &ldquo;{t(`mosModules.${mod.id}.quote`)}&rdquo;
              </p>
              <p className="text-xs font-extralight text-text-secondary leading-relaxed">
                {t(`mosModules.${mod.id}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Slide>

      {/* Slide 5: MOS Modules 4-6 */}
      <Slide className="flex flex-col justify-center px-20">
        <div className="grid grid-cols-3 gap-10">
          {MOS_MODULES.slice(3, 6).map((mod) => (
            <div key={mod.id} className="border-l border-white/[0.08] pl-6">
              <span className="text-[10px] text-text-muted tracking-[0.3em]">{mod.number}</span>
              <h3 className="text-base font-light text-text-primary tracking-[0.15em] mt-2">{mod.name}</h3>
              <p className="text-xs text-text-muted mt-1">{mod.nameCN}</p>
              <p className="text-[11px] text-text-muted mt-1 tracking-wide">
                {t(`mosModules.${mod.id}.subtitle`)}
              </p>
              <p className="text-xs font-light text-text-secondary/80 italic leading-relaxed mt-5 mb-4">
                &ldquo;{t(`mosModules.${mod.id}.quote`)}&rdquo;
              </p>
              <p className="text-xs font-extralight text-text-secondary leading-relaxed">
                {t(`mosModules.${mod.id}.description`)}
              </p>
            </div>
          ))}
        </div>
      </Slide>

      {/* Slide 6: Dashboard Preview */}
      <Slide className="flex flex-col justify-center px-20">
        <p className="text-text-muted text-xs tracking-[0.4em] uppercase mb-4">{t("mosMockup.label")}</p>
        <p className="text-sm font-extralight text-text-secondary mb-8 max-w-[600px] leading-relaxed">
          {t("mosMockup.description")}
        </p>
        <div className="bg-white/[0.03] rounded-2xl border border-white/[0.08] overflow-hidden">
          <div className="flex items-center justify-between px-6 py-3 border-b border-white/[0.06]">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <div className="w-2 h-2 rounded-full bg-white/10" />
              </div>
              <span className="text-[10px] text-text-muted tracking-[0.2em] ml-3">TAO MOS — CAMPAIGN INTELLIGENCE</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span className="text-[10px] text-text-muted">LIVE</span>
            </div>
          </div>
          <div className="p-6 grid grid-cols-3 gap-4">
            <div className="space-y-3">
              <div className="bg-white/[0.03] rounded-lg p-4 border border-white/[0.04]">
                <p className="text-[9px] text-text-muted tracking-[0.15em] uppercase">Market Perception Score</p>
                <div className="flex items-end gap-2 mt-2">
                  <span className="text-2xl font-light text-purple-end">87.3</span>
                  <span className="text-[10px] text-emerald-400/70 mb-0.5">+12.4%</span>
                </div>
                <div className="mt-2 h-1 bg-white/[0.04] rounded-full overflow-hidden">
                  <div className="h-full rounded-full w-[87%]" style={{ background: "linear-gradient(90deg, #6366f1, #06b6d4)" }} />
                </div>
              </div>
              <div className="bg-white/[0.03] rounded-lg p-4 border border-white/[0.04]">
                <p className="text-[9px] text-text-muted tracking-[0.15em] uppercase">Content Performance</p>
                <div className="flex items-end gap-2 mt-2">
                  <span className="text-2xl font-light text-text-primary">2.4M</span>
                  <span className="text-[10px] text-text-muted mb-0.5">Impressions</span>
                </div>
              </div>
              <div className="bg-white/[0.03] rounded-lg p-4 border border-white/[0.04]">
                <p className="text-[9px] text-text-muted tracking-[0.15em] uppercase">KOL Match Accuracy</p>
                <div className="flex items-end gap-2 mt-2">
                  <span className="text-2xl font-light text-purple-end">94%</span>
                  <span className="text-[10px] text-emerald-400/70 mb-0.5">vs 68% avg</span>
                </div>
              </div>
            </div>
            <div className="col-span-2 bg-white/[0.03] rounded-lg p-4 border border-white/[0.04]">
              <div className="flex items-center justify-between mb-4">
                <p className="text-[9px] text-text-muted tracking-[0.15em] uppercase">Campaign Evolution Tracker</p>
                <div className="flex gap-3">
                  {[{ l: "Wave 1", c: "rgba(99,102,241,0.5)" }, { l: "Wave 2", c: "rgba(139,92,246,0.5)" }, { l: "Wave 3", c: "rgba(6,182,212,0.5)" }].map((w) => (
                    <div key={w.l} className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: w.c }} />
                      <span className="text-[9px] text-text-muted">{w.l}</span>
                    </div>
                  ))}
                </div>
              </div>
              <svg viewBox="0 0 400 140" className="w-full h-40" preserveAspectRatio="none">
                {[0, 35, 70, 105, 140].map((y) => (
                  <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                ))}
                <path d="M0,120 C40,115 80,105 120,100 C160,95 200,90 240,85 C280,82 320,78 360,75 L400,72" fill="none" stroke="rgba(99,102,241,0.4)" strokeWidth="1.5" />
                <path d="M0,110 C40,100 80,85 120,75 C160,68 200,60 240,50 C280,45 320,38 360,32 L400,28" fill="none" stroke="rgba(139,92,246,0.5)" strokeWidth="1.5" />
                <path d="M0,90 C40,75 80,55 120,40 C160,30 200,22 240,16 C280,12 320,10 360,8 L400,6" fill="none" stroke="rgba(6,182,212,0.6)" strokeWidth="2" />
              </svg>
              <div className="grid grid-cols-3 gap-3 mt-3 pt-3 border-t border-white/[0.04]">
                {[
                  { label: "ROI Improvement", value: "+47%", sub: "Wave over Wave" },
                  { label: "Strategy Accuracy", value: "3.2x", sub: "vs Initial Brief" },
                  { label: "Time to Insight", value: "-68%", sub: "vs Manual Process" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-[9px] text-text-muted tracking-wider">{s.label}</p>
                    <p className="text-base font-light text-purple-end mt-0.5">{s.value}</p>
                    <p className="text-[8px] text-text-muted mt-0.5">{s.sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 7: Service Pillars */}
      <Slide className="flex flex-col justify-center px-20">
        <p className="text-text-muted text-xs tracking-[0.4em] uppercase mb-4">{t("servicePillars.label")}</p>
        <h2 className="text-3xl font-extralight text-text-primary mb-3 tracking-wide">
          {t("servicePillars.heading_prefix")}
          <span className="font-light text-purple-end">{t("servicePillars.heading_highlight")}</span>
        </h2>
        <p className="text-sm font-extralight text-text-secondary mb-10 max-w-[600px] leading-relaxed">
          {t("servicePillars.description")}
        </p>
        <div className="grid grid-cols-3 gap-px bg-white/[0.06] rounded-t-xl overflow-hidden">
          {SERVICE_PILLARS.slice(0, 3).map((p) => (
            <div key={p.id} className="bg-bg-primary p-6">
              <p className="text-[10px] text-text-muted tracking-[0.2em] uppercase mb-2">{p.titleEN}</p>
              <h3 className="text-sm font-light text-text-primary mb-2 tracking-wide">
                {locale === "zh" ? p.title : p.titleEN}
              </h3>
              <p className="text-xs text-text-secondary font-extralight leading-relaxed">
                {t(`servicePillars.services.${p.id}`)}
              </p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-px bg-white/[0.06] rounded-b-xl overflow-hidden mt-px">
          {SERVICE_PILLARS.slice(3).map((p) => (
            <div key={p.id} className="bg-bg-primary p-6">
              <p className="text-[10px] text-text-muted tracking-[0.2em] uppercase mb-2">{p.titleEN}</p>
              <h3 className="text-sm font-light text-text-primary mb-2 tracking-wide">
                {locale === "zh" ? p.title : p.titleEN}
              </h3>
              <p className="text-xs text-text-secondary font-extralight leading-relaxed">
                {t(`servicePillars.services.${p.id}`)}
              </p>
            </div>
          ))}
        </div>
      </Slide>

      {/* Slides 8+: Case Studies */}
      {CASE_STUDIES.map((cs) => {
        const caseData = translations.caseStudies.cases[cs.id as keyof typeof translations.caseStudies.cases];
        const results = "results" in caseData
          ? (caseData as unknown as { results: { value: string; label: string }[] }).results
          : cs.results;

        return (
          <Slide key={cs.id} className="flex items-center px-20">
            <div className="flex flex-col justify-center w-full">
              <span className="text-[10px] text-text-muted tracking-[0.3em] uppercase mb-4">
                {cs.categoryEN}
              </span>
              <h3 className="text-xl font-light text-text-primary mb-3 tracking-wide">
                {caseData.client}
              </h3>
              <p className="text-sm text-text-secondary font-extralight leading-relaxed mb-6 max-w-[600px]">
                {caseData.description}
              </p>
              {results && results.length > 0 && (
                <div className="flex gap-8 mt-2">
                  {results.map((r) => (
                    <div key={r.label}>
                      <span className="text-xl font-light text-purple-end">{r.value}</span>
                      <p className="text-[10px] text-text-muted tracking-wider mt-1">{r.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Slide>
        );
      })}

      {/* Slide 13: Client Logos */}
      <Slide className="flex flex-col justify-center px-20">
        <p className="text-text-muted text-xs tracking-[0.4em] uppercase mb-4">{t("clientLogos.label")}</p>
        <h2 className="text-3xl font-extralight text-text-primary mb-3 tracking-wide">
          {t("clientLogos.heading_prefix")}
          <span className="font-light text-purple-end">{t("clientLogos.heading_highlight")}</span>
          {t("clientLogos.heading_suffix")}
        </h2>
        <p className="text-sm text-text-secondary font-extralight mb-12 max-w-[500px] leading-relaxed">
          {t("clientLogos.description")}
        </p>
        <div className="space-y-8">
          {CLIENT_GROUPS.map((group) => (
            <div key={group.categoryEN}>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] text-text-muted tracking-[0.3em] uppercase">{group.categoryEN}</span>
                <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(255,255,255,0.06), transparent)" }} />
              </div>
              <div className="flex flex-wrap gap-x-8 gap-y-2">
                {group.brands.map((name) => (
                  <span key={name} className="text-xs text-white/30 font-light tracking-wider">{name}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Slide>

      {/* Slide 14: Growth Timeline */}
      <Slide className="flex flex-col justify-center px-20">
        <p className="text-text-muted text-xs tracking-[0.4em] uppercase mb-6">{t("growthStory.label")}</p>
        <h2 className="text-4xl font-extralight text-text-primary mb-20 tracking-wide">
          {t("growthStory.heading_prefix")}
          <span className="font-normal text-purple-end">{t("growthStory.heading_highlight")}</span>
        </h2>
        <div className="relative">
          <div className="absolute top-[32px] left-0 right-0 h-px" style={{ background: "linear-gradient(90deg, rgba(99,102,241,0.3), rgba(6,182,212,0.3))" }} />
          <div className="grid grid-cols-3 gap-8 text-center">
            {TIMELINE.map((item) => {
              const timelineItem = translations.growthStory.timeline[item.year as keyof typeof translations.growthStory.timeline];
              return (
                <div key={item.year}>
                  <div className="flex justify-center mb-8">
                    <div className={`w-3 h-3 rounded-full ${item.isCurrent ? "bg-cyan shadow-[0_0_20px_rgba(6,182,212,0.5)]" : "bg-purple-start/50"}`} />
                  </div>
                  <div className={`text-5xl font-thin mb-3 tracking-tight ${item.isCurrent ? "text-cyan" : "text-text-primary"}`}>
                    {item.year}
                  </div>
                  <p className="text-base font-light text-text-primary mb-1 tracking-wide">{timelineItem.title}</p>
                  <p className="text-sm text-text-muted font-extralight">{timelineItem.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </Slide>

      {/* Slide 15: Contact */}
      <Slide className="flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }} />
        <div className="relative z-10">
          <h2 className="text-5xl font-extralight tracking-wide leading-tight">
            {t("contact.headline_1")}
            {t("contact.headline_1").match(/[\u4e00-\u9fff]/) ? "，" : ""}
            <br />
            <span className="font-normal text-purple-end">{t("contact.headline_2")}</span>
          </h2>
          <div className="mt-12">
            <span className="inline-block px-8 py-4 rounded-full text-sm font-light tracking-[0.15em] border border-white/10">
              {t("contact.cta")}
            </span>
          </div>
          <p className="mt-4 text-text-muted text-xs tracking-wider font-light">{CONTACT.email}</p>
          <div className="mt-20 pt-8 border-t border-white/[0.06]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset("/logo-tao.png")} alt="TAO" className="w-16 h-auto mx-auto opacity-20" style={{ filter: "invert(1)" }} />
            <p className="text-white/15 text-[10px] mt-3 tracking-[0.3em] font-light">{t("contact.footer")}</p>
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default function PDFPage() {
  return <PDFSlides />;
}
