import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Episodes } from './components/Episodes'
import { FeaturedGuests } from './components/FeaturedGuests'
import { SubscribeBand } from './components/SubscribeBand'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Wavecast — Podcast Template'
  }, [])

  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <Episodes />
      <FeaturedGuests />
      <SubscribeBand />
      <Footer />
    </main>
  )
}
