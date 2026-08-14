import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { PortfolioGrid } from './components/PortfolioGrid'
import { UtilityRail } from './components/UtilityRail'
import { Footer } from './components/Footer'
import type { Filter } from './data'

export function App() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')

  useEffect(() => {
    document.title = 'Gallery — Portfolio Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        <PortfolioGrid activeFilter={activeFilter} />
        <UtilityRail />
      </main>
      <Footer />
    </div>
  )
}
