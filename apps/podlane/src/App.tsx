import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Shows } from './components/Shows'
import { BiWeekly } from './components/BiWeekly'
import { CategoryShows } from './components/CategoryShows'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Podlane — Podcast Website Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-muted transition-colors">
      <Header />
      <main className="flex-1">
        <Hero />
        <Shows />
        <BiWeekly />
        <CategoryShows />
      </main>
      <Footer />
    </div>
  )
}
