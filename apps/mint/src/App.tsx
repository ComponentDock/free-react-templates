import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { WhyUs } from './components/WhyUs'
import { Testimonials } from './components/Testimonials'
import { Works } from './components/Works'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Mint — Architecture & Interior Design Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <WhyUs />
        <Testimonials />
        <Works />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
