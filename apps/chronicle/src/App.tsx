import { useEffect, useState } from 'react'
import { CategorySections } from './components/CategorySections'
import { Footer } from './components/Footer'
import { HeroSlider } from './components/HeroSlider'
import { HighlightSection } from './components/HighlightSection'
import { NavMenu } from './components/NavMenu'
import { TopBar } from './components/TopBar'

export function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.title = 'Chronicle — Blog Template'
  }, [])

  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <header className="relative z-40">
        <TopBar onMenuToggle={() => setMenuOpen((open) => !open)} />
        <NavMenu menuOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      </header>
      <main>
        <HeroSlider />
        <HighlightSection />
        <CategorySections />
      </main>
      <Footer />
    </div>
  )
}
