import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Journey from '@/components/Journey'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ClientEffects from '@/components/ClientEffects'
import { ArchDefs } from '@/components/Ornaments'

export default function Home() {
  return (
    <>
      <ArchDefs />
      <Hero />
      <main>
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
      <ClientEffects />
    </>
  )
}
