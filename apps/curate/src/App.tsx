import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { PortfolioGrid } from './components/PortfolioGrid'
import { ServicesBanner } from './components/ServicesBanner'
import { ServicesCards } from './components/ServicesCards'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Curate — Portfolio Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PortfolioGrid />
        <ServicesBanner />
        <ServicesCards />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
