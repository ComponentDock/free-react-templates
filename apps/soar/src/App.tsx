import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { DomainSearch } from './components/DomainSearch'
import { Services } from './components/Services'
import { Pricing } from './components/Pricing'
import { FunFacts } from './components/FunFacts'
import { Testimonials } from './components/Testimonials'
import { HowItWorks } from './components/HowItWorks'
import { Newsletter } from './components/Newsletter'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Soar — Domain & Hosting Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <DomainSearch />
        <Services />
        <Pricing />
        <FunFacts />
        <Testimonials />
        <HowItWorks />
        <Newsletter />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
