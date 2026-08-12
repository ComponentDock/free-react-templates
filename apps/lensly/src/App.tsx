import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Works } from './components/Works'
import { About } from './components/About'
import { Video } from './components/Video'
import { Testimonials } from './components/Testimonials'
import { Events } from './components/Events'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Lensly — Wedding & Event Photographer'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-ink">
      <main className="flex-1">
        <Navbar />
        <Hero />
        <Works />
        <About />
        <Video />
        <Testimonials />
        <Events />
        <Footer />
      </main>
    </div>
  )
}
