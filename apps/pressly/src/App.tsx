import { useEffect } from 'react'
import { Header } from './components/Header'
import { HeroCarousel } from './components/HeroCarousel'
import { TrendingNow } from './components/TrendingNow'
import { WhatsNew } from './components/WhatsNew'
import { Technology } from './components/Technology'
import { InstagramStrip } from './components/InstagramStrip'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'

export function App() {
  useEffect(() => {
    document.title = 'Pressly — Magazine Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <Header />
      <main>
        <HeroCarousel />
        <TrendingNow />
        <WhatsNew />
        <Technology />
        <InstagramStrip />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
