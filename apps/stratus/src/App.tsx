import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Services } from './components/Services'
import { Trust } from './components/Trust'
import { Milestones } from './components/Milestones'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'

/* Stratus — single-page web hosting & cloud services landing (recreation of
   the ColorLib "Cloud83" demo): header → hero → features → services →
   trust → milestones → CTA → footer. */

export function App() {
  useEffect(() => {
    document.title = 'Stratus — Hosting & Cloud Services'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-body">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Services />
        <Trust />
        <Milestones />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
