import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { DailyOffice } from './components/DailyOffice'
import { About } from './components/About'
import { Practices } from './components/Practices'
import { Retreats } from './components/Retreats'
import { SacredSpaces } from './components/SacredSpaces'
import { Directors } from './components/Directors'
import { Testimonials } from './components/Testimonials'
import { ClosingCta } from './components/ClosingCta'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Hush — Retreat Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-stone-900 antialiased dark:bg-stone-950 dark:text-stone-100">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <DailyOffice />
        <About />
        <Practices />
        <Retreats />
        <SacredSpaces />
        <Directors />
        <Testimonials />
        <ClosingCta />
      </main>
      <Footer />
    </div>
  )
}
