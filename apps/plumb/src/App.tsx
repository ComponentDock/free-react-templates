import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { LatestProduct } from './components/LatestProduct'
import { Features } from './components/Features'
import { WebResources } from './components/WebResources'
import { News } from './components/News'
import { Subscribe } from './components/Subscribe'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Plumb — Creative Agency Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <LatestProduct />
        <Features />
        <WebResources />
        <News />
        <Subscribe />
        <Services />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
