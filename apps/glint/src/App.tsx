import { useEffect } from 'react'
import { HeaderInfoBar } from './components/HeaderInfoBar'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { CtaBanner } from './components/CtaBanner'
import { About } from './components/About'
import { Stats } from './components/Stats'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { Testimonials } from './components/Testimonials'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Glint — Dental Clinic Template'
  }, [])

  return (
    <div className="min-h-screen bg-white text-ink transition-colors">
      <header role="banner">
        <HeaderInfoBar />
        <Navbar />
      </header>
      <main>
        <HeroSlider />
        <CtaBanner />
        <About />
        <Stats />
        <Services />
        <Gallery />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
