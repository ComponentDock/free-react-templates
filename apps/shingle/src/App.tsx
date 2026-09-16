import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AppointmentSection } from './components/AppointmentSection'
import { Counter } from './components/Counter'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Shingle — Roofing Services Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <AppointmentSection />
        <Counter />
        <Services />
        <Gallery />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
