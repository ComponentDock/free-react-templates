import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { HowItWorks } from './components/HowItWorks'
import { FAQ } from './components/FAQ'
import { Testimonials } from './components/Testimonials'
import { Brands } from './components/Brands'
import { CTABanner } from './components/CTABanner'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Loanworks — Finance & Payday Loan Landing'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-text-dark">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <HowItWorks />
        <FAQ />
        <Testimonials />
        <Brands />
        <CTABanner />
      </main>
      <Footer />
    </div>
  )
}
