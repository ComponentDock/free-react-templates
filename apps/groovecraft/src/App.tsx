import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { LatestAlbums } from './components/LatestAlbums'
import { BuyNow } from './components/BuyNow'
import { FeaturedArtist } from './components/FeaturedArtist'
import { MusicLists } from './components/MusicLists'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Groovecraft — Music Artist Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-groove-black">
      <Navbar />
      <main>
        <Hero />
        <LatestAlbums />
        <BuyNow />
        <FeaturedArtist />
        <MusicLists />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
