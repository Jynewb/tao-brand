"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";

export type Locale = "zh" | "en";

const translations = {
  zh: {
    hero: {
      title1: "Growth",
      titlePunctuation: ",",
      title2: "Engineered",
      tagline: "驱动增长",
      positioning: "AI-Native Integrated Marketing",
    },
    manifesto: {
      label: "Our Belief",
      p1: "营销行业正在经历底层逻辑的重构。",
      p2: "过去十年，我们深耕品牌整合营销，陪伴中国最具影响力的品牌实现增长。我们理解每一次传播背后的商业诉求，也深知每一分预算背后的决策压力。",
      p3: "今天，当AI从工具进化为基础设施，我们选择不做旁观者。",
      p4: "TAO不是一家在传统服务上叠加AI概念的营销公司。我们从AI原生的视角，重新构建了营销服务的底层逻辑——从洞察到策略，从内容到投放，从执行到进化，每一个环节都被重新思考。",
      p5_prefix: "我们构建了",
      p5_highlight: "TAO MOS",
      p5_suffix:
        "，一套让营销决策更精准、内容生产更高效、效果评估更科学的智能营销操作系统。它不替代人的判断力，而是让人的每一次判断都站在更完整的信息与更深层的洞察之上。",
      p6_line1: "我们相信营销的未来不属于最大的公司，",
      p6_line2: "而属于最聪明的系统。",
      p7: "这是TAO正在构建的未来。",
    },
    mosIntro: {
      label: "Methodology",
      subtitle: "Marketing Operating System",
      p1: "传统营销是项目制的——每一次campaign从零开始，经验留在人脑里，换一个团队就归零。TAO MOS是一套AI原生的营销操作系统。它把品牌的每一次市场动作都转化为系统的养分——数据回流、策略迭代、认知沉淀。不是做完一个项目就结束，而是每一次执行都在让下一次更精准。",
      p2: "这不是在旧流程上加AI工具，而是用AI重新定义营销服务的底层逻辑。",
    },
    mosModules: {
      perception: {
        subtitle: "市场情报与消费者洞察引擎",
        quote: "真正的洞察不来自报告，来自对市场信号的持续感知。",
        description:
          "TAO MOS的感知层构建了一个始终在线的市场情报网络——跨平台舆情、品类趋势、竞品动态、消费者真实表达，被AI持续抓取、结构化、转化为可决策的信号。策略团队在每一次项目启动时，面对的不是空白画布，而是一张已经被AI绘制好的市场全景图。",
      },
      strategy: {
        subtitle: "数据驱动的策略推演与决策",
        quote: "经验是直觉的起点，数据是判断的终点。",
        description:
          "我们相信最好的策略诞生于人的创造力与数据理性的交汇处。策略层将历史campaign效果、品类基准数据与实时市场信号整合，为每一次策略推演提供量化支撑。AI推演可能性，人做最终决策。让每一个建议背后，都站着可回溯的逻辑与依据。",
      },
      network: {
        subtitle: "智能达人匹配与资源调度",
        quote: "精准匹配是科学，资源获取是关系，两者缺一不可。",
        description:
          "网络层将AI的多维筛选能力与TAO深耕行业多年积累的达人合作网络结合——算法确保匹配精度，关系确保执行质量。内容调性、粉丝画像、历史转化表现、档期与预算的最优解，由系统计算；而最终能否以最优条件获取最优资源，靠的是信任与长期合作的厚度。",
      },
      creation: {
        subtitle: "AI增强的规模化内容生产",
        quote: "规模化从来不是质量的反义词，前提是有策略在前端把关。",
        description:
          "创造层的核心逻辑是策略前置、AI扩展、人控品质——AI在策略框架内快速生成多元内容方向与初稿，资深内容团队进行筛选、深化与品牌调性校准。结果是：更多可能性被探索，更少时间被消耗，而最终交付的每一条内容，都经过策略验证与人的审美判断。",
      },
      amplify: {
        subtitle: "精准投放与动态优化",
        quote: "好内容的价值上限，取决于它能否在对的时间被对的人看到。",
        description:
          "放大层通过数据驱动的投放策略与AI实时优化机制，确保每一份预算都被导向最高效的路径。跨平台的协同管理与动态资源调配，让内容的势能在发布后持续被放大，而非自然衰减。",
      },
      evolution: {
        subtitle: "智能复盘与系统自优化",
        quote:
          "一个不会进化的系统，再精密也只是工具。一个持续进化的系统，才是真正的竞争壁垒。",
        description:
          "每一次campaign的执行数据——什么有效、什么失效、什么超出预期——都被结构化沉淀，自动回流至感知层与策略层，更新系统的认知模型。这意味着品牌与TAO的合作不是一次次独立的项目，而是一个不断精进的过程。时间，站在我们这边。",
      },
    },
    mosMockup: {
      label: "System Preview",
      description:
        "TAO MOS将洞察、策略与执行整合在统一的智能界面中，让每一个决策都有据可循。",
    },
    servicePillars: {
      label: "Capabilities",
      heading_prefix: "服务",
      heading_highlight: "能力矩阵",
      description:
        "以TAO MOS为底层驱动，构建覆盖品牌增长全链路的AI原生服务体系。",
      powered: "Powered by TAO MOS — Marketing Operating System",
      services: {
        geo: "当消费者开始向AI提问，品牌需要在AI生成的答案中被看见。我们帮助品牌在AI搜索时代建立可见性与权威性。",
        content:
          "以策略为锚点，以AI为引擎，规模化生产具有平台原生感的优质内容，实现品牌声量与转化的双重目标。",
        seeding:
          "AI驱动的达人匹配、内容策略与投放优化全链路管理，让种草从经验驱动升级为数据驱动。",
        media:
          "智能出价、动态创意优化与实时效果追踪，让每一分预算的回报都可衡量、可优化。",
        consulting:
          "帮助品牌构建AI时代的营销能力体系，从工具选型到工作流重构，从团队赋能到效果评估。",
      },
    },
    caseStudies: {
      label: "Case Studies",
      heading_prefix: "实战",
      heading_highlight: "案例",
      description:
        "从 MOS 全栈驱动的品类扩张，到 GEO 重塑品牌在 AI 搜索中的存在感——每一个案例都是 TAO AI-Native 方法论的实战验证。",
      cases: {
        roborock: {
          client: "Roborock — MOS 全栈驱动品类扩张",
          description:
            "MOS 感知层捕获洗衣机品类市场信号 → 策略层推演「以新带老」路径 → 网络层 AI 精准匹配 KOL 矩阵 → 进化层 12 波次持续迭代，每一轮 campaign 让下一轮更精准。从种草到转化的全链路一体化合作，帮助石头科技撬动全新品类、实现市场份额登顶。",
          results: [
            { value: "IDC Q3 #1", label: "扫地机国内市场份额登顶" },
            { value: "+408%", label: "洗衣机销额同比增长" },
            { value: "12", label: "Campaign 波次跨越复盘" },
          ],
        },
        jnby: {
          client: "JNBY — AI 驱动的全平台内容运营体系",
          description:
            "为江南布衣集团旗下 JNBY 女装、jnbybyJNBY 童装、速写 CROQUIS 男装构建 AI-Native 全平台内容运营体系。MOS 创造层将 AI 内容生成与资深创意团队的审美判断结合——AI 基于品牌调性数据库批量生成内容方向与初稿，人控品质完成最终交付。感知层持续追踪各平台内容表现与用户反馈，自动生成优化建议回流至下一轮内容策略，实现从微信公众号、抖音、小红书到视频号的全域内容矩阵高效运转。",
          results: [
            { value: "6", label: "品牌账号全域覆盖" },
            { value: "+220%", label: "内容互动率同比提升" },
            { value: "-45%", label: "内容生产周期缩短" },
          ],
        },
        "geo-supplement": {
          client: "某国际保健品牌 — GEO 品牌归属纠偏",
          description:
            "该品牌在中国市场遭遇 AI 搜索引擎的品牌归属错误——主流 AI 平台将其错误标注为「美国品牌」，严重影响消费者信任。TAO 通过 GEO 体系化干预：AI 回答探究 → 引用源解析 → 内容创作发布 → 持续追踪迭代，2 个月内将品牌归属正确率从 27% 提升至 95%+，核心成分提及率从 15% 提升至 58%。",
          results: [
            { value: "27% → 95%+", label: "AI 品牌归属正确率" },
            { value: "15% → 58%", label: "成分提及率（2个月）" },
            { value: "6+", label: "覆盖主流 AI 搜索平台" },
          ],
        },
      },
    },
    clientLogos: {
      label: "Trusted By",
      heading_prefix: "跨行业",
      heading_highlight: "头部品牌",
      heading_suffix: "的信任之选",
      description:
        "从奢侈品到科技，从快消到运动，我们深谙每个行业的营销语言与增长逻辑。",
    },
    growthStory: {
      label: "Journey",
      heading_prefix: "从实战到 ",
      heading_highlight: "AI-Native",
      timeline: {
        "2022": { title: "创立", description: "整合营销起步" },
        "2024": { title: "规模化增长", description: "头部品牌深度合作" },
        "2026": { title: "AI-Native 转型", description: "TAO MOS 体系建立" },
      },
    },
    contact: {
      headline_1: "让我们一起",
      headline_2: "重新定义营销",
      cta: "开始对话",
      footer: "GROWTH, ENGINEERED.",
    },
    pdf: {
      download: "下载品牌手册",
    },
  },
  en: {
    hero: {
      title1: "Growth",
      titlePunctuation: ",",
      title2: "Engineered",
      tagline: "Engineered Growth",
      positioning: "AI-Native Integrated Marketing",
    },
    manifesto: {
      label: "Our Belief",
      p1: "The marketing industry is undergoing a fundamental restructuring of its core logic.",
      p2: "Over the past decade, we have been deeply embedded in integrated brand marketing, partnering with China's most influential brands to drive growth. We understand the business imperatives behind every campaign, and the decision-making pressure behind every budget.",
      p3: "Today, as AI evolves from tool to infrastructure, we choose not to be bystanders.",
      p4: "TAO is not a marketing company that layers AI concepts onto traditional services. We have rebuilt the foundational logic of marketing services from an AI-native perspective — from insights to strategy, content to media, execution to evolution, every link has been reimagined.",
      p5_prefix: "We built ",
      p5_highlight: "TAO MOS",
      p5_suffix:
        ", an intelligent marketing operating system that makes decisions more precise, content production more efficient, and performance evaluation more scientific. It doesn't replace human judgment — it ensures every judgment stands on more complete information and deeper insights.",
      p6_line1: "We believe the future of marketing belongs not to the largest companies,",
      p6_line2: "but to the smartest systems.",
      p7: "This is the future TAO is building.",
    },
    mosIntro: {
      label: "Methodology",
      subtitle: "Marketing Operating System",
      p1: "Traditional marketing is project-based — every campaign starts from scratch, experience stays in people's heads, and resets with every team change. TAO MOS is an AI-native marketing operating system. It transforms every market action into fuel for the system — data flows back, strategies iterate, knowledge compounds. It's not about finishing one project; every execution makes the next one more precise.",
      p2: "This isn't about adding AI tools to old workflows. It's about using AI to redefine the fundamental logic of marketing services.",
    },
    mosModules: {
      perception: {
        subtitle: "Market Intelligence & Consumer Insights Engine",
        quote:
          "True insights don't come from reports — they come from continuous perception of market signals.",
        description:
          "TAO MOS's Perception layer builds an always-on market intelligence network — cross-platform sentiment, category trends, competitor dynamics, and authentic consumer expressions are continuously captured, structured, and transformed into actionable signals by AI. When the strategy team kicks off a new project, they don't face a blank canvas, but a comprehensive market panorama already mapped by AI.",
      },
      strategy: {
        subtitle: "Data-Driven Strategy Development & Decision-Making",
        quote:
          "Experience is where intuition starts. Data is where judgment lands.",
        description:
          "We believe the best strategies are born where human creativity meets data-driven rationality. The Strategy layer integrates historical campaign performance, category benchmarks, and real-time market signals to provide quantitative support for every strategic decision. AI explores possibilities; humans make the final call. Every recommendation stands on traceable logic and evidence.",
      },
      network: {
        subtitle: "Smart Influencer Matching & Resource Allocation",
        quote:
          "Precision matching is science. Resource access is relationships. You need both.",
        description:
          "The Network layer combines AI's multi-dimensional filtering with TAO's influencer network built over years of deep industry engagement. Algorithms ensure matching accuracy; relationships ensure execution quality. Content tone, audience profiles, historical conversion data, scheduling, and budget optimization are calculated by the system — but securing the best resources at optimal terms comes from trust and long-term partnerships.",
      },
      creation: {
        subtitle: "AI-Enhanced Scalable Content Production",
        quote:
          "Scale was never the opposite of quality — as long as strategy leads the way.",
        description:
          "The Creation layer's core logic is strategy-first, AI-extended, human quality-controlled. AI rapidly generates diverse content directions and drafts within the strategic framework, while senior content teams curate, refine, and calibrate brand tone. The result: more possibilities explored, less time consumed, and every piece of content delivered has been strategy-validated and aesthetically judged by humans.",
      },
      amplify: {
        subtitle: "Precision Media Buying & Dynamic Optimization",
        quote:
          "The value ceiling of great content depends on whether the right people see it at the right time.",
        description:
          "The Amplify layer uses data-driven media strategy and AI real-time optimization to ensure every budget dollar flows to the most efficient path. Cross-platform coordination and dynamic resource allocation keep content momentum growing after launch, rather than naturally decaying.",
      },
      evolution: {
        subtitle: "Smart Retrospectives & System Self-Optimization",
        quote:
          "A system that doesn't evolve, no matter how precise, is just a tool. A system that continuously evolves is a true competitive moat.",
        description:
          "Every campaign's execution data — what worked, what didn't, what exceeded expectations — is structured, stored, and automatically fed back to the Perception and Strategy layers, updating the system's cognitive model. This means working with TAO isn't a series of isolated projects, but a continuously improving process. Time is on our side.",
      },
    },
    mosMockup: {
      label: "System Preview",
      description:
        "TAO MOS integrates insights, strategy, and execution into a unified intelligent interface, ensuring every decision is data-informed.",
    },
    servicePillars: {
      label: "Capabilities",
      heading_prefix: "Service ",
      heading_highlight: "Capabilities",
      description:
        "Powered by TAO MOS, building an AI-native service ecosystem that covers the full brand growth journey.",
      powered: "Powered by TAO MOS — Marketing Operating System",
      services: {
        geo: "As consumers start asking AI for answers, brands need to be visible in AI-generated responses. We help brands establish visibility and authority in the AI search era.",
        content:
          "Strategy-anchored, AI-powered, platform-native content production at scale — driving both brand awareness and conversion.",
        seeding:
          "End-to-end AI-driven influencer matching, content strategy, and media optimization — upgrading social seeding from experience-driven to data-driven.",
        media:
          "Smart bidding, dynamic creative optimization, and real-time performance tracking — making every budget dollar measurable and optimizable.",
        consulting:
          "Helping brands build marketing capabilities for the AI era — from tool selection to workflow redesign, team enablement to performance evaluation.",
      },
    },
    caseStudies: {
      label: "Case Studies",
      heading_prefix: "Case ",
      heading_highlight: "Studies",
      description:
        "From MOS full-stack category expansion to GEO brand attribution recovery — every case is a live validation of the TAO AI-Native methodology.",
      cases: {
        roborock: {
          client: "Roborock — MOS Full-Stack Category Expansion",
          description:
            "MOS Perception layer detected washing machine category signals → Strategy layer modeled the 'new lifts legacy' expansion path → Network layer AI-matched KOL matrices → Evolution layer iterated across 12 campaign waves, each smarter than the last. Full-funnel integration from seeding to conversion helped Roborock unlock a new category and claim the #1 market share.",
          results: [
            { value: "IDC Q3 #1", label: "China robot vacuum market share" },
            { value: "+408%", label: "Washing machine YoY sales growth" },
            { value: "12", label: "Campaign waves with cross-learning" },
          ],
        },
        jnby: {
          client: "JNBY — AI-Driven Full-Platform Content Operations",
          description:
            "Built an AI-Native content operations system for JNBY Group's three brands: JNBY Womenswear, jnbybyJNBY Kidswear, and CROQUIS Menswear. MOS Creation layer merges AI content generation with senior creative teams' aesthetic judgment — AI generates content directions and drafts from a brand tonality database, humans curate and finalize. Perception layer continuously tracks cross-platform content performance and audience feedback, auto-generating optimization insights that flow back into the next content cycle. The result: a high-efficiency content matrix spanning WeChat, Douyin, Xiaohongshu, and Channels.",
          results: [
            { value: "6", label: "Brand accounts, full-platform" },
            { value: "+220%", label: "Content engagement rate YoY" },
            { value: "-45%", label: "Content production cycle" },
          ],
        },
        "geo-supplement": {
          client: "Global Supplement Brand — GEO Attribution Recovery",
          description:
            "The brand faced AI search engines incorrectly attributing it as an 'American brand' in the China market, eroding consumer trust. TAO deployed systematic GEO intervention: AI answer analysis → citation source mapping → content creation & publishing → continuous tracking. Within 2 months, brand attribution accuracy rose from 27% to 95%+, and core ingredient mentions from 15% to 58%.",
          results: [
            { value: "27% → 95%+", label: "AI brand attribution accuracy" },
            { value: "15% → 58%", label: "Ingredient mention rate (2 months)" },
            { value: "6+", label: "AI search platforms covered" },
          ],
        },
      },
    },
    clientLogos: {
      label: "Trusted By",
      heading_prefix: "Trusted by ",
      heading_highlight: "Leading Brands",
      heading_suffix: " Across Industries",
      description:
        "From luxury to tech, FMCG to sportswear — we speak every industry's marketing language and understand its growth logic.",
    },
    growthStory: {
      label: "Journey",
      heading_prefix: "From Practice to ",
      heading_highlight: "AI-Native",
      timeline: {
        "2022": { title: "Founded", description: "Integrated marketing begins" },
        "2024": {
          title: "Scaled Growth",
          description: "Deep partnerships with leading brands",
        },
        "2026": {
          title: "AI-Native Transformation",
          description: "TAO MOS system established",
        },
      },
    },
    contact: {
      headline_1: "Let's Redefine",
      headline_2: "Marketing Together",
      cta: "Start a Conversation",
      footer: "GROWTH, ENGINEERED.",
    },
    pdf: {
      download: "Download Brand Handbook",
    },
  },
} as const;

type TranslationKeys = (typeof translations)["zh"] | (typeof translations)["en"];

function getNestedValue(obj: Record<string, unknown>, path: string): string {
  const keys = path.split(".");
  let current: unknown = obj;
  for (const key of keys) {
    if (current === null || current === undefined || typeof current !== "object") return path;
    current = (current as Record<string, unknown>)[key];
  }
  return typeof current === "string" ? current : path;
}

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  translations: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("zh");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("tao-locale") as Locale | null;
    if (saved === "en" || saved === "zh") {
      setLocaleState(saved);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("tao-locale", locale);
      document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
    }
  }, [locale, mounted]);

  const setLocale = (l: Locale) => setLocaleState(l);

  const t = (key: string) => {
    return getNestedValue(translations[locale] as unknown as Record<string, unknown>, key);
  };

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, t, translations: translations[locale] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLocale must be used within LanguageProvider");
  return ctx;
}
