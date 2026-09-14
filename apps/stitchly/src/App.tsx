import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Offers } from './components/Offers'
import { About } from './components/About'
import { Services } from './components/Services'
import { Video } from './components/Video'
import { Testimonial } from './components/Testimonial'
import { Instagram } from './components/Instagram'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Stitchly — Tailor & Sewing Services'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Offers />
        <About />
        <Services />
        <Video />
        <Testimonial />
        <Instagram />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
