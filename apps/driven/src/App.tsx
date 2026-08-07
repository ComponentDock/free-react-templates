import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { AboutSplit } from './components/AboutSplit'
import { WhoCanUse } from './components/WhoCanUse'
import { MobileSplit } from './components/MobileSplit'
import { Pricing } from './components/Pricing'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Driven — App Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <AboutSplit />
        <WhoCanUse />
        <MobileSplit />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
