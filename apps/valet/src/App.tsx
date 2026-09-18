import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Services } from './components/Services'
import { Comparison } from './components/Comparison'
import { Testimonials } from './components/Testimonials'
import { HowItWorks } from './components/HowItWorks'
import { Pricing } from './components/Pricing'
import { Blog } from './components/Blog'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Valet — Virtual Assistant Landing Page'
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <Comparison />
        <Testimonials />
        <HowItWorks />
        <Pricing />
        <Blog />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
