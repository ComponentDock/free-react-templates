import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SearchBox } from './components/SearchBox'
import { FeaturedProperties } from './components/FeaturedProperties'
import { Testimonials } from './components/Testimonials'
import { Workflow } from './components/Workflow'
import { Cities } from './components/Cities'
import { CTA } from './components/CTA'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Manor — Real Estate Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <SearchBox />
        <FeaturedProperties />
        <Testimonials />
        <Workflow />
        <Cities />
        <CTA />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
