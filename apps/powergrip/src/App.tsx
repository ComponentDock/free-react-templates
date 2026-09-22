import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { IntroPrograms } from './components/IntroPrograms'
import { Services } from './components/Services'
import { Schedule } from './components/Schedule'
import { Testimonials } from './components/Testimonials'
import { Trainers } from './components/Trainers'
import { Classes } from './components/Classes'
import { Events } from './components/Events'
import { Blog } from './components/Blog'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'
import { skipLabel } from './data'

export function App() {
  useEffect(() => {
    document.title = 'PowerGrip — Gym & Fitness Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        {skipLabel}
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <IntroPrograms />
        <Services />
        <Schedule />
        <Testimonials />
        <Trainers />
        <Classes />
        <Events />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
