import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Speakers } from './components/Speakers'
import { Programs } from './components/Programs'
import { Sponsors } from './components/Sponsors'
import { News } from './components/News'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Seminar — Conference 2024'
  }, [])

  return (
    <div className="min-h-screen bg-ink font-sans text-text">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Speakers />
        <Programs />
        <Sponsors />
        <News />
      </main>
      <Footer />
    </div>
  )
}
