import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { LatestNews } from './components/LatestNews'
import { GameTypes } from './components/GameTypes'
import { RecentGames } from './components/RecentGames'
import { Tournaments } from './components/Tournaments'
import { RecentReviews } from './components/RecentReviews'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <LatestNews />
        <GameTypes />
        <RecentGames />
        <Tournaments />
        <RecentReviews />
      </main>
      <Footer />
    </div>
  )
}
