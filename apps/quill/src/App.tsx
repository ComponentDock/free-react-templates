import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { CategorySection } from './components/CategorySection'
import { TravelSection } from './components/TravelSection'
import { FashionSection } from './components/FashionSection'
import { TeamSection } from './components/TeamSection'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Quill — Blog Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-muted dark:bg-gray-950 dark:text-gray-300">
      <Navbar />
      <main>
        <Hero />
        <CategorySection />
        <TravelSection />
        <FashionSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  )
}
