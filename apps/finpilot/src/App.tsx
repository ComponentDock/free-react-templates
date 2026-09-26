import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Counters from './components/Counters'
import Gallery from './components/Gallery'
import Features from './components/Features'
import FinancialSolution from './components/FinancialSolution'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'FinPilot — Business Consulting Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Counters />
      <Gallery />
      <Features />
      <FinancialSolution />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  )
}
