import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { PopularCategories } from './components/PopularCategories'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Dirly — Find Nearby Attractions'
  }, [])

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-family-body)] text-text-dark transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <PopularCategories />
      </main>
      <Footer />
    </div>
  )
}
