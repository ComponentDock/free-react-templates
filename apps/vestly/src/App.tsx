import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { Intro } from './components/Intro'
import { Services } from './components/Services'
import { Converter } from './components/Converter'
import { Info } from './components/Info'
import { News } from './components/News'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Vestly — Cryptocurrency Landing Page'
  }, [])

  return (
    <div className="min-h-screen bg-white text-body-text transition-colors">
      <Navbar />
      <main>
        <HeroSlider />
        <Intro />
        <Services />
        <Converter />
        <Info />
        <News />
      </main>
      <Footer />
    </div>
  )
}
