import type { Metadata } from "next"
import "./globals.css"
import { Navbar } from "@/components/layout/Navbar"
import { FooterSignature } from "@/components/layout/FooterSignature"

export const metadata: Metadata = {
  title: "EMO · 当下状态共鸣流",
  description:
    "不是让你学习答案，而是让你发现：原来很多人也停在过同一个问题里。",
  keywords: ["状态", "共鸣", "陪伴", "被看见", "自我确认"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body className="min-h-screen bg-background font-sans antialiased text-foreground">
        <Navbar />
        {children}
        <FooterSignature />
      </body>
    </html>
  )
}
