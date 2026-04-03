import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a0a0f",
};

export const metadata: Metadata = {
  title: "TAO 隼思行 | AI-Native Marketing",
  description:
    "用AI重新定义营销的下一个十年。10年行业深耕，200+头部品牌信任，AI原生营销科技公司。",
  openGraph: {
    title: "TAO 隼思行 | AI-Native Marketing",
    description:
      "用AI重新定义营销的下一个十年。10年行业深耕，200+头部品牌信任，AI原生营销科技公司。",
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
