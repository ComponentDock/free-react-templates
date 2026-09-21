import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Appointment } from './components/Appointment'
import { Services } from './components/Services'
import { Team } from './components/Team'
import { About } from './components/About'
import { Testimonials } from './components/Testimonials'
import { Gallery } from './components/Gallery'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'AlignWell — Chiropractic & Wellness Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Appointment />
        <Services />
        <Team />
        <About />
        <Testimonials />
        <Gallery />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
