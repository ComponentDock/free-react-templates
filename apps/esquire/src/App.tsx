import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { PracticeArea } from './components/PracticeArea'
import { Lawyers } from './components/Lawyers'
import { Testimonials } from './components/Testimonials'
import { Appointment } from './components/Appointment'
import { Footer } from './components/Footer'

/**
 * Esquire — single-page law firm template. Section order mirrors the
 * reference design 1:1: black navbar → dark hero → cream about → practice
 * area grid → lawyer cards → testimonial carousel → appointment form →
 * dark footer.
 */
export function App() {
  useEffect(() => {
    document.title = 'Esquire — Law Firm Template'
  }, [])
  return (
    <div className="font-body text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <PracticeArea />
        <Lawyers />
        <Testimonials />
        <Appointment />
      </main>
      <Footer />
    </div>
  )
}
