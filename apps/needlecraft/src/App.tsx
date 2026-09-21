import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { ServiceCards } from './components/ServiceCards'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Needlecraft — Health & Wellness Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <ServiceCards />
        <Testimonials />
        <Blog />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
