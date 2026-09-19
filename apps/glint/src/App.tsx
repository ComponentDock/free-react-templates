import { useEffect } from 'react'
import { HeaderInfoBar } from './components/HeaderInfoBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
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
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <HeaderInfoBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
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
