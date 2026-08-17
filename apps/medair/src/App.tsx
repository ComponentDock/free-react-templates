import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { WhatWeDo } from './components/WhatWeDo'
import { IntroCta } from './components/IntroCta'
import { HowItWorks } from './components/HowItWorks'
import { VideoCta } from './components/VideoCta'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Appointment } from './components/Appointment'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Medair — Health & Wellness Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-dark">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <WhatWeDo />
        <IntroCta />
        <HowItWorks />
        <VideoCta />
        <Testimonials />
        <Blog />
        <Appointment />
      </main>
      <Footer />
    </div>
  )
}
