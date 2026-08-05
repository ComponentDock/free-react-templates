import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { About } from './components/About'
import { Pricing } from './components/Pricing'
import { Screenshots } from './components/Screenshots'
import { Testimonials } from './components/Testimonials'
import { DownloadCta } from './components/DownloadCta'
import { News } from './components/News'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'BulkApp — App Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <About />
        <Pricing />
        <Screenshots />
        <Testimonials />
        <DownloadCta />
        <News />
      </main>
      <Footer />
    </div>
  )
}
