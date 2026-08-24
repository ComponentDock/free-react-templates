import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ArtsCulture } from './components/ArtsCulture'
import { ScienceUpdate } from './components/ScienceUpdate'
import { VideoGallery } from './components/VideoGallery'
import { Carousel } from './components/Carousel'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ArtsCulture />
        <ScienceUpdate />
        <VideoGallery />
        <Carousel />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
