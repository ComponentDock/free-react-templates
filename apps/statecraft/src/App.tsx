import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { WhyChoose } from './components/WhyChoose'
import { Cases } from './components/Cases'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'

export function App() {
  useEffect(() => {
    document.title = 'Statecraft — Consulting Firm'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-olive">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChoose />
        <Cases />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
