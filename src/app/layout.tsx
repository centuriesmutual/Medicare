import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Medicare Reviews - Anonymous Reviews',
  description: 'Anonymous review platform powered by zero-knowledge proofs',
  keywords: 'anonymous reviews, zero-knowledge proofs, privacy, healthcare reviews',
  authors: [{ name: 'Medicare Reviews Team' }],
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="magazine-body">
        <div className="min-h-screen">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}