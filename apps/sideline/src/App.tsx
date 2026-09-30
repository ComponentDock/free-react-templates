import { useEffect } from 'react'
import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { FeatureCards } from './components/FeatureCards'
import { NextMatch } from './components/NextMatch'
import { LatestMatches } from './components/LatestMatches'
import { PromoBanner } from './components/PromoBanner'
import { HighlightsBand } from './components/HighlightsBand'
import { NewsGrid } from './components/NewsGrid'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Sideline — Sports Club Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <HeroSlider />
        <FeatureCards />
        <section id="matches" className="bg-mist py-20" aria-label="Matches">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 lg:grid-cols-2 lg:px-8">
            <NextMatch />
            <LatestMatches />
          </div>
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <PromoBanner />
          </div>
        </section>
        <HighlightsBand />
        <NewsGrid />
      </main>
      <Footer />
    </div>
  )
}
