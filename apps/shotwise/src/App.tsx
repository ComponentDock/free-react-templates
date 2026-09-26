import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Featured } from './components/Featured'
import { Parallax } from './components/Parallax'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Shotwise — Photographer Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Featured />
        <Parallax />
        <Services />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
