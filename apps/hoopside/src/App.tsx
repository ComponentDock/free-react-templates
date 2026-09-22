import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LatestResults } from './components/LatestResults'
import { TeamRoster } from './components/TeamRoster'
import { PlayerStatistics } from './components/PlayerStatistics'
import { LatestVideos } from './components/LatestVideos'
import { ProductShop } from './components/ProductShop'
import { FanClubCTA } from './components/FanClubCTA'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Hoopside — Basketball Sports Landing'
  }, [])

  return (
    <div className="min-h-screen bg-white font-body text-body-text">
      <Header />
      <main>
        <Hero />
        <LatestResults />
        <TeamRoster />
        <PlayerStatistics />
        <LatestVideos />
        <ProductShop />
        <FanClubCTA />
      </main>
      <Footer />
    </div>
  )
}
