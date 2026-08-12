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
    <div className="flex min-h-screen flex-col bg-white font-sans text-navy-900">
      <Header />
      <main className="flex-1">
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
