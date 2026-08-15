import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Services } from './components/Services'
import { Trainers } from './components/Trainers'
import { UpcomingEvents } from './components/UpcomingEvents'
import { Footer } from './components/Footer'
import { siteName, skipLabel } from './data'

export function App() {
  useEffect(() => {
    document.title = `${siteName} — Be Fit. Top Gym`
  }, [])

  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        {skipLabel}
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Features />
        <Services />
        <Trainers />
        <UpcomingEvents />
      </main>
      <Footer />
    </div>
  )
}
