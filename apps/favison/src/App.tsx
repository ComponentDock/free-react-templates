import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { FeatureBand } from './components/FeatureBand'
import { Pricing } from './components/Pricing'
import { Stats } from './components/Stats'
import { Blog } from './components/Blog'
import { Brands } from './components/Brands'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Favison — App Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <FeatureBand />
        <Pricing />
        <Stats />
        <Blog />
        <Brands />
      </main>
      <Footer />
    </div>
  )
}
