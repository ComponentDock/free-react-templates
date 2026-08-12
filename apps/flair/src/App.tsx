import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { TopFeatures } from './components/TopFeatures'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Cta } from './components/Cta'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

/* Flair — the single-page creative-agency template: fixed transparent
   header (search overlay + mobile menu), 900px photo hero, floating
   feature cards, about, animated skills bars, services on a dark overlay,
   testimonials carousel, CTA band, latest news and the dark footer. */
export function App() {
  useEffect(() => {
    document.title = 'Flair — Creative Agency Template'
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TopFeatures />
        <About />
        <Skills />
        <Services />
        <Testimonials />
        <Cta />
        <Blog />
      </main>
      <Footer />
    </>
  )
}
