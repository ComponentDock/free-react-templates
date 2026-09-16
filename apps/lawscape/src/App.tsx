import { useEffect } from 'react'
import { HeaderTop } from './components/HeaderTop'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { StatsCounter } from './components/StatsCounter'
import { About } from './components/About'
import { PracticeAreas } from './components/PracticeAreas'
import { Testimonials } from './components/Testimonials'
import { Team } from './components/Team'
import { CTA } from './components/CTA'
import { Blog } from './components/Blog'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Lawscape — Lawyer & Legal Firm Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <HeaderTop />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <StatsCounter />
        <About />
        <PracticeAreas />
        <Testimonials />
        <Team />
        <CTA />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
