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
  description: 'Portfolio of Nouh Taha CHEBCHOUB — Applied AI / ML Engineer & Data Scientist from Marrakech, working across computer vision, NLP, LLMs and Document AI, from experimentation to production. Published in Sensors (MDPI) & Springer.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#EEE5D6',
}

// Desktop sections are 1440×1000 artboards scaled to fit the window (CSS `zoom`).
// --z: regular sections, --zc: the contact artboard (1440×886), which shares the screen with the footer.
const fitScript = `(function(){
  var FOOTER = 79;
  function fit() {
    var w = document.documentElement.clientWidth, h = window.innerHeight;
    var s = document.documentElement.style;
    s.setProperty('--z', Math.min(w / 1440, h / 1000, 1.5));
    s.setProperty('--zc', Math.min(w / 1440, (h - FOOTER) / 886, 1.5));
  }
  fit();
  window.addEventListener('resize', fit);
})();`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: the fit script sets --z/--zc on <html> before React hydrates
    <html lang="en" className={`${playfair.variable} ${sourceSerif.variable}`} suppressHydrationWarning>
      <body>
        <script dangerouslySetInnerHTML={{ __html: fitScript }} />
        {children}
      </body>
    </html>
  )
}
