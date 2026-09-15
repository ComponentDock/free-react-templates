import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { InfoHighlights } from './components/InfoHighlights'
import { ProfessionalServices } from './components/ProfessionalServices'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'
import { BrandLogos } from './components/BrandLogos'
import { CtaBanner } from './components/CtaBanner'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Cosyhaus — Interior Design Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <InfoHighlights />
        <ProfessionalServices />
        <Services />
        <Gallery />
        <Team />
        <Testimonials />
        <BrandLogos />
        <CtaBanner />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
