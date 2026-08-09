import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { NavOverlay } from './components/NavOverlay'
import { Hero } from './components/Hero'
import { EditorialList } from './components/EditorialList'
import { Footer } from './components/Footer'

export function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.title = 'Pulp — Magazine'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-primary-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Header onOpenMenu={() => setMenuOpen(true)} />
      <NavOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main id="main" className="flex-1">
        <Hero />
        <EditorialList />
      </main>
      <Footer />
    </div>
  )
}
