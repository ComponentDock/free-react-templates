import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Shows } from './components/Shows'
import { Podcasts } from './components/Podcasts'
import { Listeners } from './components/Listeners'
import { DJs } from './components/DJs'
import { News } from './components/News'
import { SocialStrip } from './components/SocialStrip'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Decibel — DJ & Radio Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-night font-sans text-white/50">
      <Header />
      <main className="flex-1">
        <Hero />
        <Shows />
        <Podcasts />
        <Listeners />
        <DJs />
        <News />
        <SocialStrip />
      </main>
      <Footer />
    </div>
  )
}
