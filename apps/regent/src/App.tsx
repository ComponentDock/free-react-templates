import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Rooms } from './components/Rooms'
import { About } from './components/About'
import { Features } from './components/Features'
import { Promo } from './components/Promo'
import { Gallery } from './components/Gallery'
import { Events } from './components/Events'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Regent — Hotel & Resort Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-ink">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Rooms />
        <About />
        <Features />
        <Promo />
        <Gallery />
        <Events />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
