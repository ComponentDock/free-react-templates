import { useEffect } from 'react'
import { Blog } from './components/Blog'
import { DomainBand } from './components/DomainBand'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Partners } from './components/Partners'
import { Pricing } from './components/Pricing'
import { Services } from './components/Services'
import { Stats } from './components/Stats'
import { Testimonials } from './components/Testimonials'

export function App() {
  useEffect(() => {
    document.title = 'Skyward — Web Hosting Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <DomainBand />
        <Partners />
        <Features />
        <Stats />
        <Services />
        <Pricing />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
