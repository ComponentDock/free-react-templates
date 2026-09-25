import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Discography } from './components/Discography'
import { Player } from './components/Player'
import { Video } from './components/Video'
import { Shows } from './components/Shows'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Groove — Music Artist Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-void text-white transition-colors">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Discography />
        <Player />
        <Video />
        <Shows />
      </main>
      <Footer />
    </div>
  )
}
