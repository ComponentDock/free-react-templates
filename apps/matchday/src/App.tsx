import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { BreakingNews } from './components/BreakingNews'
import { LatestResults } from './components/LatestResults'
import { EventsGames } from './components/EventsGames'
import { Milestones } from './components/Milestones'
import { PlayerOfMonth } from './components/PlayerOfMonth'
import { LatestNews } from './components/LatestNews'
import { CtaStrip } from './components/CtaStrip'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Matchday — Football Club Template'
  }, [])

  return (
    <>
      <Header />
      <main>
        <Hero />
        <BreakingNews />
        <LatestResults />
        <EventsGames />
        <Milestones />
        <PlayerOfMonth />
        <LatestNews />
        <CtaStrip />
      </main>
      <Footer />
    </>
  )
}
