import { useEffect } from 'react'
import { Header } from './components/Header'
import { HamburgerToggle } from './components/HamburgerToggle'
import { NavOverlay } from './components/NavOverlay'
import { BlogGrid } from './components/BlogGrid'
import { LoadMore } from './components/LoadMore'
import { Footer } from './components/Footer'
import { useState } from 'react'

export function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.title = 'Redawn — Creative Portfolio Template'
  }, [])

  return (
    <div className="min-h-screen bg-white text-ink">
      <NavOverlay isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <Header>
        <HamburgerToggle isOpen={menuOpen} onToggle={() => setMenuOpen((prev) => !prev)} />
      </Header>
      <main>
        <BlogGrid />
        <LoadMore />
      </main>
      <Footer />
    </div>
  )
}
