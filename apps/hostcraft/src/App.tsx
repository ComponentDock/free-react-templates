import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { DomainSearch } from './components/DomainSearch'
import { Features } from './components/Features'
import { CounterStats } from './components/CounterStats'
import { MainServices } from './components/MainServices'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { TabbedServices } from './components/TabbedServices'
import { Blog } from './components/Blog'
import { Partners } from './components/Partners'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Hostcraft — Web Hosting Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-bg-main font-body text-text-primary transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <DomainSearch />
        <Features />
        <CounterStats />
        <MainServices />
        <Pricing />
        <Testimonials />
        <TabbedServices />
        <Blog />
        <Partners />
      </main>
      <Footer />
    </div>
  )
}
