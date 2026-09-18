import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeatureBanners } from './components/FeatureBanners'
import { Products } from './components/Products'
import { Newsletter } from './components/Newsletter'
import { Testimonials } from './components/Testimonials'
import { WhyUs } from './components/WhyUs'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Remedy — Pharmacy & Supplement Store Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-page text-mist transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeatureBanners />
        <Products />
        <Newsletter />
        <Testimonials />
        <WhyUs />
      </main>
      <Footer />
    </div>
  )
}
