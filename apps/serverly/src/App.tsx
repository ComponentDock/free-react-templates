import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { DomainPricing } from './components/DomainPricing'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Pricing } from './components/Pricing'
import { SplitFeatures } from './components/SplitFeatures'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Serverly — Web Hosting'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-[#2c2c2c]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <DomainPricing />
        <WhyChooseUs />
        <Pricing />
        <SplitFeatures />
      </main>
      <Footer />
    </div>
  )
}
