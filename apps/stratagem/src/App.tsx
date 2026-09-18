import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Counters } from './components/Counters'
import { CaseStudy } from './components/CaseStudy'
import { FAQ } from './components/FAQ'
import { Testimonials } from './components/Testimonials'
import { Team } from './components/Team'
import { Contact } from './components/Contact'
import { InfoCTA } from './components/InfoCTA'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Stratagem — Business Consulting Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-mist transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Counters />
        <CaseStudy />
        <FAQ />
        <Testimonials />
        <Team />
        <Contact />
        <InfoCTA />
      </main>
      <Footer />
    </div>
  )
}
