import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { PromoSection } from './components/PromoSection'
import { PodcastSection } from './components/PodcastSection'
import { ChartsSection } from './components/ChartsSection'
import { Footer } from './components/Footer'

export function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.title = 'Fmbeat — DJ & Radio Station'
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div className="min-h-screen bg-brand-dark text-white font-body transition-colors dark:bg-black dark:text-white">
      <Navbar onToggleDark={() => setDark((d) => !d)} />
      <main>
        <HeroSlider />
        <PromoSection />
        <PodcastSection />
        <ChartsSection />
      </main>
      <Footer />
    </div>
  )
}
