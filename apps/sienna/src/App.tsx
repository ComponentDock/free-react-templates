import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Features } from './components/Features'
import { Video } from './components/Video'
import { Services } from './components/Services'
import { Team } from './components/Team'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Sienna — Barber Shop Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Features />
        <Video />
        <Services />
        <Team />
        <Pricing />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
