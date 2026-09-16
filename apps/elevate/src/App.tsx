import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { About } from './components/About'
import { Services } from './components/Services'
import { StatsCounter } from './components/StatsCounter'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { Cta } from './components/Cta'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Elevate — Coaching Landing Page'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <HeroSlider />
        <About />
        <Services />
        <StatsCounter />
        <Pricing />
        <Testimonials />
        <Cta />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
