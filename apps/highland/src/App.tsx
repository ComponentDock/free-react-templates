import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { AboutSection } from './components/AboutSection'
import { OffersSection } from './components/OffersSection'
import { VideoSection } from './components/VideoSection'
import { DiningSection } from './components/DiningSection'
import { FeaturedRooms } from './components/FeaturedRooms'
import { ReservationBar } from './components/ReservationBar'
import { InstagramFeed } from './components/InstagramFeed'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <AboutSection />
      <OffersSection />
      <VideoSection />
      <DiningSection />
      <FeaturedRooms />
      <ReservationBar />
      <InstagramFeed />
      <Footer />
    </div>
  )
}
