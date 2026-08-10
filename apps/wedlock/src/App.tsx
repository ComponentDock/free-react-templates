import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { GetReady } from './components/GetReady'
import { Testimonials } from './components/Testimonials'
import { Stories } from './components/Stories'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Wedlock — Wedding & Event Planner'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <GetReady />
        <Testimonials />
        <Stories />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
