"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/lib/i18n";

const sections = [
  { id: "hero", zh: "首页", en: "Home" },
  { id: "manifesto", zh: "理念", en: "Belief" },
  { id: "mos", zh: "MOS", en: "MOS" },
  { id: "services", zh: "服务", en: "Services" },
  { id: "cases", zh: "案例", en: "Cases" },
  { id: "contact", zh: "联系", en: "Contact" },
];

export function StickyNav() {
  const { locale } = useLocale();
  const [active, setActive] = useState("hero");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.5);

      const sectionEls = sections
        .map((s) => ({ id: s.id, el: document.getElementById(s.id) }))
        .filter((s) => s.el);

      for (let i = sectionEls.length - 1; i >= 0; i--) {
        const rect = sectionEls[i].el!.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4) {
          setActive(sectionEls[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-full pointer-events-none"
      }`}
      style={{
        background: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "saturate(180%) blur(20px)",
        WebkitBackdropFilter: "saturate(180%) blur(20px)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-center h-12 gap-8">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`text-xs transition-colors duration-300 ${
              active === s.id
                ? "text-text-primary"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            {locale === "zh" ? s.zh : s.en}
          </a>
        ))}
      </div>
    </nav>
  );
}
