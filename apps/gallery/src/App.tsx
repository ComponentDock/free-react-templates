import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { PortfolioGrid } from './components/PortfolioGrid'
import { LoadMore } from './components/LoadMore'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Gallery — Creative Portfolio Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <PortfolioGrid />
        <LoadMore />
      </main>
      <Footer />
    </div>
  )
}
