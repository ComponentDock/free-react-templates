import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SearchBar } from './components/SearchBar'
import { Features } from './components/Features'
import { FeaturedProperties } from './components/FeaturedProperties'
import { Cities } from './components/Cities'
import { HowItWorks } from './components/HowItWorks'
import { Testimonials } from './components/Testimonials'
import { Agents } from './components/Agents'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Fern — Real Estate Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SearchBar />
        <Features />
        <FeaturedProperties />
        <Cities />
        <HowItWorks />
        <Testimonials />
        <Agents />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
