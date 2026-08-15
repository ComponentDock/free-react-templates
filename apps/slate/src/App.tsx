import { useEffect, useState } from 'react'
import { Hero } from './components/Hero'
import { MobileMenu } from './components/MobileMenu'
import { Features } from './components/Features'
import { Stats } from './components/Stats'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.title = 'Slate — Business Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Hero menuOpen={menuOpen} onMenuToggle={() => setMenuOpen((open) => !open)} />
      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      <main>
        <Features />
        <Stats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
