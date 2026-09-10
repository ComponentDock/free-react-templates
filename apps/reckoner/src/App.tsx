import { useEffect } from 'react'
import { ContactBar } from './components/ContactBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AboutUs } from './components/AboutUs'
import { Services } from './components/Services'
import { Counters } from './components/Counters'
import { Testimonials } from './components/Testimonials'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Reckoner — Bookkeeping Consulting Agency'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <ContactBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutUs />
        <Services />
        <Counters />
        <Testimonials />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
