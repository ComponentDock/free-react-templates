import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ArtistBio } from './components/ArtistBio'
import { UpcomingShows } from './components/UpcomingShows'
import { MusicPlayer } from './components/MusicPlayer'
import { FeaturedAlbum } from './components/FeaturedAlbum'
import { MusicArtistsSearch } from './components/MusicArtistsSearch'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Cadence — Music Artist Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <ArtistBio />
        <UpcomingShows />
        <MusicPlayer />
        <FeaturedAlbum />
        <MusicArtistsSearch />
      </main>
      <Footer />
    </div>
  )
}
