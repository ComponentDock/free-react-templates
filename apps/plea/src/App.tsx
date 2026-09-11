import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { IntroFeatures } from './components/IntroFeatures'
import { HowItWorks } from './components/HowItWorks'
import { About } from './components/About'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { Appointment } from './components/Appointment'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Plea — Counseling Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-dark">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <IntroFeatures />
        <HowItWorks />
        <About />
        <Services />
        <Testimonials />
        <Pricing />
        <Appointment />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
