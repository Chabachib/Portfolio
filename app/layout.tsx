import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Source_Serif_4 } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const sourceSerif = Source_Serif_4({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Nouh Taha CHEBCHOUB',
  description: 'Portfolio of Nouh Taha CHEBCHOUB — AI Engineer & Data Scientist from Marrakech, specialising in physics-informed ML, LLM automation, and end-to-end MLOps. Published in Sensors (MDPI) & Springer.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#EEE5D6',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSerif.variable}`}>
      <body>{children}</body>
    </html>
  )
}
