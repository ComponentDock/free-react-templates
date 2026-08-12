import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroText } from './components/HeroText'
import { PhotoBand } from './components/PhotoBand'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Gallery } from './components/Gallery'
import { Footer } from './components/Footer'

/* Meridian — a business consulting landing page. Section order mirrors the
   source template 1:1: navbar → hero text → photo band → services →
   testimonials → office gallery → footer. */

export function App() {
  useEffect(() => {
    document.title = 'Meridian — Business Consulting'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-black">
      <Navbar />
      <main className="flex-1">
        <HeroText />
        <PhotoBand />
        <Services />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}
