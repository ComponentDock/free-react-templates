import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { Video } from './components/Video'
import { Team } from './components/Team'
import { FindUs } from './components/FindUs'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Amber — Barber Shop Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Video />
        <Team />
        <FindUs />
      </main>
      <Footer />
    </div>
  )
}
