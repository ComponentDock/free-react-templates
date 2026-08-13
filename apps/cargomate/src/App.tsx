import { useEffect } from 'react'
import { TopStrip } from './components/TopStrip'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { About } from './components/About'
import { Services } from './components/Services'
import { Quote } from './components/Quote'
import { Testimonial } from './components/Testimonial'
import { Blog } from './components/Blog'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Cargomate — Logistics Company Template'
  }, [])

  return (
    <>
      <TopStrip />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Services />
        <Quote />
        <Testimonial />
        <Blog />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
