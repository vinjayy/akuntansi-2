import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Accelerate Indonesia - Solusi Akuntansi Profesional",
  description:
    "Layanan akuntansi profesional untuk pertumbuhan bisnis Anda. Jasa pembukuan, laporan keuangan, konsultasi, dan persiapan pajak.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
