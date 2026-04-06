"use client";

import { ScrollReveal } from "../ui/ScrollReveal";
import { asset } from "@/lib/prefix";
import { CONTACT } from "@/lib/constants";
import { useLocale } from "@/lib/i18n";

export function ContactCTA() {
  const { t } = useLocale();

  return (
    <section id="contact" className="relative py-40 md:py-56 px-6">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl lg:text-[72px] font-semibold tracking-tight leading-[1.08]">
            {t("contact.headline_1")}
            {t("contact.headline_1").match(/[\u4e00-\u9fff]/) ? "，" : ""}
            <br />
            <span className="gradient-text">{t("contact.headline_2")}</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-sm font-normal bg-text-primary text-bg-primary hover:bg-white/90 transition-colors duration-300"
            >
              {t("contact.cta")}
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            <a
              href={asset("/TAO_Brand_Handbook.pdf")}
              download
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-sm font-normal border border-border-subtle text-text-secondary hover:text-text-primary hover:border-white/20 transition-all duration-300"
            >
              {t("pdf.download")}
              <svg
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M8 3v8M4 8l4 4 4-4" />
                <path d="M3 13h10" />
              </svg>
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-6 text-text-muted text-xs tracking-wider">
            {CONTACT.email}
          </p>
        </ScrollReveal>

        {/* Footer */}
        <ScrollReveal delay={0.25}>
          <div className="mt-32 pt-8 border-t border-border-subtle">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/logo-tao.png")}
              alt="TAO"
              className="w-16 h-auto mx-auto opacity-20"
              style={{ filter: "invert(1)" }}
            />
            <p className="text-white/15 text-[10px] mt-4 tracking-[0.25em]">
              {t("contact.footer")}
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
