import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ClientLogos } from './components/ClientLogos'
import { About } from './components/About'
import { Features } from './components/Features'
import { Skills } from './components/Skills'
import { Cta } from './components/Cta'
import { Gallery } from './components/Gallery'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

/**
 * Ironvault — personal fitness trainer one-page template. Sections follow
 * the source demo order 1:1: hero, client logos, about, features, skills,
 * CTA, gallery, testimonials, footer.
 */
export function App() {
  useEffect(() => {
    document.title = 'Ironvault — Fitness Trainer Template'
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <About />
        <Features />
        <Skills />
        <Cta />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
