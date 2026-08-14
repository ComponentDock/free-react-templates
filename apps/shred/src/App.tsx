import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { PromoBand } from './components/PromoBand'
import { Programs } from './components/Programs'
import { Services } from './components/Services'
import { Schedule } from './components/Schedule'
import { CounterBand } from './components/CounterBand'
import { Testimonials } from './components/Testimonials'
import { Coaches } from './components/Coaches'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { MapSection } from './components/MapSection'
import { Gallery } from './components/Gallery'
import { Footer } from './components/Footer'

/* Shred — single-page fitness club landing: navbar → split hero →
   coral promo band → programs tabs → services → training schedule →
   counter band → testimonials → coaches → blog → contact → map →
   gallery → black footer. */
export function App() {
  useEffect(() => {
    document.title = 'Shred — Fitness Club'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-black">
      <Navbar />
      <main>
        <Hero />
        <PromoBand />
        <Programs />
        <Services />
        <Schedule />
        <CounterBand />
        <Testimonials />
        <Coaches />
        <Blog />
        <Contact />
        <MapSection />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}
