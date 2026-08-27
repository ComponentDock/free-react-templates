import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { StatsCounter } from './components/StatsCounter'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { Blog } from './components/Blog'
import { Newsletter } from './components/Newsletter'
import { Pricing } from './components/Pricing'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Tally — Accounting & Business Consulting Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <StatsCounter />
        <Testimonials />
        <FAQ />
        <Blog />
        <Newsletter />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
