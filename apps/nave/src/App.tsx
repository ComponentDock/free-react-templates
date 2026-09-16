import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { UpcomingEvents } from './components/UpcomingEvents'
import { WorshipTime } from './components/WorshipTime'
import { Sermons } from './components/Sermons'
import { EventsMinistries } from './components/EventsMinistries'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Nave — Church Ministry Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-dark text-text-muted transition-colors">
      <Navbar />
      <main className="flex-1">
        <HeroSlider />
        <UpcomingEvents />
        <WorshipTime />
        <Sermons />
        <EventsMinistries />
      </main>
      <Footer />
    </div>
  )
}
