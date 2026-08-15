import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { Pricing } from './components/Pricing'
import { CalendarSection } from './components/CalendarSection'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'
import { siteName, skipLabel } from './data'

export function App() {
  useEffect(() => {
    document.title = `${siteName} — 2018 Public Policy Conference`
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        {skipLabel}
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Intro />
        <Pricing />
        <CalendarSection />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
