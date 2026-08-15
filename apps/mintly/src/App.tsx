import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import { Hero } from './components/Hero'
import { InfoCards } from './components/InfoCards'
import { Departments } from './components/Departments'
import { About } from './components/About'
import { Faq } from './components/Faq'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.title = 'Mintly — Dental Care Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-charcoal">
      <Navbar menuOpen={menuOpen} onMenuToggle={() => setMenuOpen((open) => !open)} />
      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
      <main>
        <Hero />
        <InfoCards />
        <Departments />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
