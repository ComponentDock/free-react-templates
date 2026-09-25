import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { LatestEpisodes } from './components/LatestEpisodes'
import { FeaturedGuests } from './components/FeaturedGuests'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Earworm — Podcast & Audio Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-body transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1 pt-[60px]">
        <Hero />
        <LatestEpisodes />
        <FeaturedGuests />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
