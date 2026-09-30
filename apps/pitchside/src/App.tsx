import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { TrendingStrip } from './components/TrendingStrip'
import { MatchSection } from './components/MatchSection'
import { SoccerFeed } from './components/SoccerFeed'
import { LatestNewsSection } from './components/LatestNewsSection'
import { HotVideos } from './components/HotVideos'
import { PopularSection } from './components/PopularSection'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Pitchside — Sports News & Fixtures Template'
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrendingStrip />
        <MatchSection />
        <SoccerFeed />
        <LatestNewsSection />
        <HotVideos />
        <PopularSection />
      </main>
      <Footer />
    </>
  )
}
