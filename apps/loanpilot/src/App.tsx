import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { LoanServices } from './components/LoanServices'
import { Choose } from './components/Choose'
import { Testimonial } from './components/Testimonial'
import { Counter } from './components/Counter'
import { CallToAction } from './components/CallToAction'
import { Blog } from './components/Blog'
import { ContactWidget } from './components/ContactWidget'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Loanpilot — Loan & Finance Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body-text">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <About />
        <LoanServices />
        <Choose />
        <Testimonial />
        <Counter />
        <CallToAction />
        <Blog />
        <ContactWidget />
      </main>
      <Footer />
    </div>
  )
}
