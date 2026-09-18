import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Gallery } from './components/Gallery'
import { PhotoGrid } from './components/PhotoGrid'
import { MobileMenu } from './components/MobileMenu'
import { Footer } from './components/Footer'

export function App() {
  const [activePage, setActivePage] = useState<'home' | 'photos'>('home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.title = 'Shuttervibe — Photography Portfolio'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header
        activePage={activePage}
        onNavigate={setActivePage}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((o) => !o)}
      />
      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        activePage={activePage}
        onNavigate={setActivePage}
      />
      <main className="flex-1 pt-[70px]">
        {activePage === 'home' ? <Gallery /> : <PhotoGrid />}
      </main>
      <Footer />
    </div>
  )
}
