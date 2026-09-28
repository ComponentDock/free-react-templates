import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Menu } from './components/Menu'
import { Reservation } from './components/Reservation'
import { Events } from './components/Events'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Polenta — Restaurant Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-mist transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Menu />
        <Reservation />
        <Events />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
