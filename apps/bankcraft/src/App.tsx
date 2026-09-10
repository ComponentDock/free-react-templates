import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { MoneySavings } from './components/MoneySavings'
import { AboutUs } from './components/AboutUs'
import { Team } from './components/Team'
import { Gallery } from './components/Gallery'
import { HowItWorks } from './components/HowItWorks'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { FAQ } from './components/FAQ'
import { BankLoan } from './components/BankLoan'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Bankcraft — Banking Solutions Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <MoneySavings />
        <AboutUs />
        <Team />
        <Gallery />
        <HowItWorks />
        <Services />
        <Testimonials />
        <Pricing />
        <FAQ />
        <BankLoan />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
