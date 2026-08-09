import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Team } from './components/Team'
import { Pricing } from './components/Pricing'
import { Gallery } from './components/Gallery'
import { Testimonials } from './components/Testimonials'
import { BlogSection } from './components/BlogSection'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Taper — Barber Shop Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Team />
        <Pricing />
        <Gallery />
        <Testimonials />
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}
