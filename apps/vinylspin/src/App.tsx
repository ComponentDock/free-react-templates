import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeaturedAlbum } from './components/FeaturedAlbum'
import { Shows } from './components/Shows'
import { Artist } from './components/Artist'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Vinylspin — Music Band Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-void text-white transition-colors">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedAlbum />
        <Shows />
        <Artist />
        <CtaBanner />
      </main>
      <Footer />
    </div>
  )
}
