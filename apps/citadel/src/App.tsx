import { useEffect } from 'react'
import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { BrandLogos } from './components/BrandLogos'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { Cta } from './components/Cta'
import { LocationInfo } from './components/LocationInfo'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Citadel — Industrial Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Header />
      <main className="flex-1">
        <HeroSlider />
        <BrandLogos />
        <Services />
        <Projects />
        <Cta />
        <LocationInfo />
      </main>
      <Footer />
    </div>
  )
}
