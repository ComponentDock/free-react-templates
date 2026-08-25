import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { InfoCards } from './components/InfoCards'
import { Services } from './components/Services'
import { About } from './components/About'
import { Appointment } from './components/Appointment'
import { Counter } from './components/Counter'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { CTABanner } from './components/CTABanner'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Odonto — Dental Clinic Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <InfoCards />
        <Services />
        <About />
        <Appointment />
        <Counter />
        <Team />
        <Testimonials />
        <Blog />
        <CTABanner />
      </main>
      <Footer />
    </div>
  )
}
