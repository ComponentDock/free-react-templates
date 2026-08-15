import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { HoursBar } from './components/HoursBar'
import { Features } from './components/Features'
import { CtaBand } from './components/CtaBand'
import { Classes } from './components/Classes'
import { Schedule } from './components/Schedule'
import { Trainers } from './components/Trainers'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ctaBands, skipLabel } from './data'

export function App() {
  useEffect(() => {
    document.title = 'Grit — Gym & Fitness Template'
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
        <HoursBar variant="top" />
        <Features />
        <CtaBand band={ctaBands[0]!} />
        <Classes />
        <CtaBand band={ctaBands[1]!} />
        <Schedule />
        <CtaBand band={ctaBands[2]!} />
        <Trainers />
        <Services />
        <Contact />
      </main>
      <HoursBar variant="bottom" />
      <Footer />
    </div>
  )
}
