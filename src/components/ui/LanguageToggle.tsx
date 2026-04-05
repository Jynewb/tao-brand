"use client";

import { useLocale } from "@/lib/i18n";

export function LanguageToggle({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div className={`fixed top-6 right-6 z-50 ${className ?? ""}`}>
      <button
        onClick={() => setLocale(locale === "zh" ? "en" : "zh")}
        className="glass rounded-full px-4 py-2 text-xs tracking-wider font-light text-text-secondary hover:text-text-primary transition-colors duration-300 cursor-pointer"
      >
        <span className={locale === "zh" ? "text-text-primary" : "text-text-muted"}>
          中
        </span>
        <span className="text-text-muted mx-1.5">/</span>
        <span className={locale === "en" ? "text-text-primary" : "text-text-muted"}>
          EN
        </span>
      </button>
    </div>
  );
}
