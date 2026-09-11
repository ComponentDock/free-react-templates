import { useEffect } from 'react'
import { TopHeader } from './components/TopHeader'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { About } from './components/About'
import { CurrencyCalculator } from './components/CurrencyCalculator'
import { BlogAndPrices } from './components/BlogAndPrices'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Ledgerly — Cryptocurrency Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-body text-heading transition-colors dark:bg-navy-950 dark:text-white">
      <TopHeader />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <CurrencyCalculator />
        <BlogAndPrices />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
