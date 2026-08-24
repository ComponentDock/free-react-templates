import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Brands } from './components/Brands'
import { FAQ } from './components/FAQ'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { Gallery } from './components/Gallery'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Spruce — Business Web Development Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink font-body">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Brands />
        <FAQ />
        <Pricing />
        <Testimonials />
        <Gallery />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
