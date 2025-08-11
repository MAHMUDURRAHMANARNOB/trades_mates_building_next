import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'Trades Mates Building - Construction Team - Expert Builders in Sydney',
  description: 'Trades Mates Building are professional new home builders in Sydney, NSW. We specialize in custom homes and knockdown rebuilds. Contact us for a quote.',
    keywords: 'Trades Mates Building Sydney, construction building company Sydney, builders Sydney NSW, new home builders Sydney, residential builders Sydney, Sydney construction services, custom home builders, knockdown rebuilds, residential construction, commercial construction, building renovations, expert builders Sydney, professional building company Sydney',

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
