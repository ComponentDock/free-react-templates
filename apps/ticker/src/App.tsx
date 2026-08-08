import { useEffect } from 'react'
import { TickerBar } from './components/TickerBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { StatsStrip } from './components/StatsStrip'
import { Markets } from './components/Markets'
import { Courses } from './components/Courses'
import { Mentors } from './components/Mentors'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { Faq } from './components/Faq'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Ticker — Trading Education Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-gray-100">
      <header className="sticky top-0 z-50">
        <TickerBar />
        <Navbar />
      </header>
      <main className="flex-1">
        <Hero />
        <StatsStrip />
        <Markets />
        <Courses />
        <Mentors />
        <Testimonials />
        <Pricing />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
