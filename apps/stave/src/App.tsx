import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeaturedTrack } from './components/FeaturedTrack'
import { About } from './components/About'
import { VideoGallery } from './components/VideoGallery'
import { LatestTracks } from './components/LatestTracks'
import { Gallery } from './components/Gallery'
import { ContactCTA } from './components/ContactCTA'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Stave — Music Artist Landing Page'
  }, [])

  return (
    <div className="flex min-h-screen flex-col font-body text-body">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedTrack />
        <About />
        <VideoGallery />
        <LatestTracks />
        <Gallery />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}
