import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { DomainSearch } from './components/DomainSearch'
import { BrandLogos } from './components/BrandLogos'
import { Features } from './components/Features'
import { Pricing } from './components/Pricing'
import { Services } from './components/Services'
import { Newsletter } from './components/Newsletter'
import { DedicatedServer } from './components/DedicatedServer'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Hostpeak — Web Hosting Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <DomainSearch />
        <BrandLogos />
        <Features />
        <Pricing />
        <Services />
        <Newsletter />
        <DedicatedServer />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
