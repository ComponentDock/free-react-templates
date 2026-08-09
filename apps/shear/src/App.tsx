import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Welcome } from './components/Welcome'
import { Pricing } from './components/Pricing'
import { HairStyles } from './components/HairStyles'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Shear — Barber Shop Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Welcome />
        <Pricing />
        <HairStyles />
        <Services />
        <Testimonials />
        <Blog />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
