import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Gallery } from './components/Gallery'
import { VideoCta } from './components/VideoCta'
import { Schedule } from './components/Schedule'
import { Speakers } from './components/Speakers'
import { Sponsors } from './components/Sponsors'
import { CtaSection } from './components/CtaSection'
import { Contact } from './components/Contact'
import { MapPlaceholder } from './components/MapPlaceholder'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'GatherVenue — Event Landing Page Template'
  }, [])

  return (
    <div className="min-h-screen font-poppins text-body bg-white">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <VideoCta />
      <Schedule />
      <Speakers />
      <Sponsors />
      <CtaSection />
      <Contact />
      <MapPlaceholder />
      <Footer />
    </div>
  )
}
