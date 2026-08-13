import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { DomainSearch } from './components/DomainSearch'
import { Features } from './components/Features'
import { Pricing } from './components/Pricing'
import { DiscountCta } from './components/DiscountCta'
import { SupportBand } from './components/SupportBand'
import { StatsCta } from './components/StatsCta'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Upnode — Web Hosting Template'
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <header>
        <TopBar />
        <Navbar />
      </header>
      <main id="main-content">
        <Hero />
        <DomainSearch />
        <Features />
        <Pricing />
        <DiscountCta />
        <SupportBand />
        <StatsCta />
      </main>
      <Footer />
    </div>
  )
}
