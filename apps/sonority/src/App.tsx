import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About1 } from './components/About1'
import { About2 } from './components/About2'
import { Features } from './components/Features'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'

export function App() {
  useEffect(() => {
    document.title = 'Sonority — Music Streaming Landing'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-brand-dark font-sans transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About1 />
        <About2 />
        <Features />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
