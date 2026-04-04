import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0f",
};

export const metadata: Metadata = {
  title: "TAO 隼思行 | Growth, Engineered.",
  description:
    "AI-Native Integrated Marketing. 以AI原生视角重构营销服务，驱动品牌增长。",
  openGraph: {
    title: "TAO 隼思行 | Growth, Engineered.",
    description:
      "AI-Native Integrated Marketing. 以AI原生视角重构营销服务，驱动品牌增长。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="antialiased">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
