import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { AboutCounter } from './components/AboutCounter'
import { CTABanner } from './components/CTABanner'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Squadly — Heavy Equipment Rental Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <AboutCounter />
        <CTABanner />
        <Services />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
