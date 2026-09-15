import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { EventsBanner } from './components/EventsBanner'
import { ChurchServices } from './components/ChurchServices'
import { LatestSermon } from './components/LatestSermon'
import { Features } from './components/Features'
import { UpcomingEvents } from './components/UpcomingEvents'
import { ContactInfo } from './components/ContactInfo'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Devotion — Church Website Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-worksans text-gray-900">
      <Navbar />
      <main>
        <HeroSlider />
        <EventsBanner />
        <ChurchServices />
        <LatestSermon />
        <Features />
        <UpcomingEvents />
        <ContactInfo />
      </main>
      <Footer />
    </div>
  )
}
