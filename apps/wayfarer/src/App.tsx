import { useEffect } from 'react'
import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { SearchStrip } from './components/SearchStrip'
import { Destinations } from './components/Destinations'
import { Newsletter } from './components/Newsletter'
import { Places } from './components/Places'
import { VideoSection } from './components/VideoSection'
import { Variation } from './components/Variation'
import { Testimonials } from './components/Testimonials'
import { Trips } from './components/Trips'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Wayfarer — Travel Template'
  }, [])

  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <SearchStrip />
        <Destinations />
        <Newsletter />
        <Places />
        <VideoSection />
        <Variation />
        <Testimonials />
        <Trips />
      </main>
      <Footer />
    </>
  )
}
