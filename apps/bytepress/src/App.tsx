import { useEffect } from 'react'
import { HeaderBar } from './components/HeaderBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { IntroCards } from './components/IntroCards'
import { FeaturedSection } from './components/FeaturedSection'
import { TechnologySection } from './components/TechnologySection'
import { WorldSection } from './components/WorldSection'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'BytePress — Tech Magazine Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-body-bg font-sans text-ink">
      <HeaderBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <IntroCards />
        <FeaturedSection />
        <TechnologySection />
        <WorldSection />
      </main>
      <Footer />
    </div>
  )
}
