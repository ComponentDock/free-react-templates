import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { WorshipTime } from './components/WorshipTime'
import { AudioSermons } from './components/AudioSermons'
import { LatestEvents } from './components/LatestEvents'
import { PersonalTestimony } from './components/PersonalTestimony'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Compassion — Church Website Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-opensans text-body-text">
      <Navbar />
      <main>
        <Hero />
        <WorshipTime />
        <AudioSermons />
        <LatestEvents />
        <PersonalTestimony />
      </main>
      <Footer />
    </div>
  )
}
