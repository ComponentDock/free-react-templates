import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { VideoBand } from './components/VideoBand'
import { Works } from './components/Works'
import { Services } from './components/Services'
import { Brands } from './components/Brands'
import { Build } from './components/Build'
import { Counters } from './components/Counters'
import { Instagram } from './components/Instagram'
import { Footer } from './components/Footer'

/* Axiom — a creative agency landing page. Section order mirrors the
   source template 1:1: header → hero → video → works → services → brands
   → build → counters → instagram → footer. */

export function App() {
  useEffect(() => {
    document.title = 'Axiom — Creative Agency'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-ink">
      <Header />
      <main className="flex-1">
        <Hero />
        <VideoBand />
        <Works />
        <Services />
        <Brands />
        <Build />
        <Counters />
        <Instagram />
      </main>
      <Footer />
    </div>
  )
}
