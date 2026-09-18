import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { Team } from './components/Team'
import { DiscountCta } from './components/DiscountCta'
import { Pricing } from './components/Pricing'
import { BookNow } from './components/BookNow'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Inkvibe — Tattoo Studio Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-void text-white transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Team />
        <DiscountCta />
        <Pricing />
        <BookNow />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
