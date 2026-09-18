import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { AboutStats } from './components/AboutStats'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Smilewell — Dental Clinic Template'
  }, [])

  return (
    <div className="min-h-screen bg-white text-ink transition-colors">
      <header role="banner">
        <Navbar />
      </header>
      <main>
        <Hero />
        <Services />
        <AboutStats />
        <Team />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
