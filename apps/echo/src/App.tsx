import { useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { Counter } from './components/Counter'
import { Footer } from './components/Footer'

export function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-white text-ink">
      <Sidebar menuOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <div className="flex-1 lg:ml-64">
        <Header onMenuToggle={() => setMenuOpen(true)} />
        <main>
          <Hero />
          <About />
          <Services />
          <Portfolio />
          <Counter />
        </main>
        <Footer />
      </div>
    </div>
  )
}
