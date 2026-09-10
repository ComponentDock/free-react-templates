import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Team } from './components/Team'
import { SecondaryServices } from './components/SecondaryServices'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Buzzer — Business Consulting'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-mist transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Team />
        <SecondaryServices />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
