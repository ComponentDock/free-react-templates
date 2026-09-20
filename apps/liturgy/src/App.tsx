import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { UpcomingEvents } from './components/UpcomingEvents'
import { WorshipTime } from './components/WorshipTime'
import { RecentSermons } from './components/RecentSermons'
import { Ministries } from './components/Ministries'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Liturgy — Church Website Template'
  }, [])

  return (
    <div className="min-h-screen bg-charcoal-800 font-body text-charcoal-200">
      <Navbar />
      <main>
        <HeroSlider />
        <UpcomingEvents />
        <WorshipTime />
        <RecentSermons />
        <Ministries />
      </main>
      <Footer />
    </div>
  )
}
