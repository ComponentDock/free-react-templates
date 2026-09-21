import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Games } from './components/Games'
import { MonthlyPicks } from './components/MonthlyPicks'
import { VideoReviews } from './components/VideoReviews'
import { LatestArticles } from './components/LatestArticles'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Joystick — Gaming Magazine Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Games />
        <MonthlyPicks />
        <VideoReviews />
        <LatestArticles />
      </main>
      <Footer />
    </div>
  )
}
