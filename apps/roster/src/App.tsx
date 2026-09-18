import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { PopularLocations } from './components/PopularLocations'
import { PopularDirectory } from './components/PopularDirectory'
import { HowItWorks } from './components/HowItWorks'
import { NewDirectory } from './components/NewDirectory'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Roster — Directory Listing Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-[family-name:var(--font-family-rubik)] text-text-dark transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <PopularLocations />
        <PopularDirectory />
        <HowItWorks />
        <NewDirectory />
      </main>
      <Footer />
    </div>
  )
}
