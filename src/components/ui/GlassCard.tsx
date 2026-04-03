"use client";

import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <div
      className={`glass rounded-2xl p-6 md:p-8 transition-all duration-300 ${
        hover ? "glass-hover" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
