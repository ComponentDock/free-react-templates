import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { Welcome } from './components/Welcome'
import { Consultation } from './components/Consultation'
import { Services } from './components/Services'
import { QuoteIntro } from './components/QuoteIntro'
import { Doctors } from './components/Doctors'
import { Testimonials } from './components/Testimonials'
import { CtaBand } from './components/CtaBand'
import { Pricing } from './components/Pricing'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Enamel — Dental Clinic Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-mist">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <HeroSlider />
        <Welcome />
        <Consultation />
        <Services />
        <QuoteIntro />
        <Doctors />
        <Testimonials />
        <CtaBand />
        <Pricing />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
