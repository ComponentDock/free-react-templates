import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { WhyChooseUs } from './components/WhyChooseUs'
import { AppointmentCTA } from './components/AppointmentCTA'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'
import { skipLabel } from './data'

export function App() {
  useEffect(() => {
    document.title = 'Kinectwell — Physical Therapy Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-heading">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        {skipLabel}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <AppointmentCTA />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
