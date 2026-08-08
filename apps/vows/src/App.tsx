import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { StatsBand } from './components/StatsBand'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { Transformations } from './components/Transformations'
import { Planner } from './components/Planner'
import { Packages } from './components/Packages'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/Faq'
import { ContactCta } from './components/ContactCta'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Vows — Wedding Planner Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-gray-900 transition-colors dark:bg-gray-950 dark:text-gray-100">
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>
      <main className="flex-1">
        <Hero />
        <StatsBand />
        <Services />
        <Portfolio />
        <Transformations />
        <Planner />
        <Packages />
        <Testimonials />
        <Faq />
        <ContactCta />
      </main>
      <Footer />
    </div>
  )
}
