import type { Metadata } from 'next'
import { Instrument_Serif, Inter_Tight, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const instrumentSerif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

const interTight = Inter_Tight({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetBrainsMono = JetBrains_Mono({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nouh Taha CHEBCHOUB — AI Engineer & Data Scientist',
  description: 'Portfolio of Nouh Taha CHEBCHOUB — AI Engineer & Data Scientist specialising in physics-informed ML, LLM automation, and end-to-end MLOps. Published in Sensors (MDPI) & Springer.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${interTight.variable} ${jetBrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
