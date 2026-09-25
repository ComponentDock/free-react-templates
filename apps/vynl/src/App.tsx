import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeaturedEvents } from './components/FeaturedEvents'
import { UpcomingEvents } from './components/UpcomingEvents'
import { VideoAbout } from './components/VideoAbout'
import { Footer } from './components/Footer'

export function App() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    document.title = 'Vynl — DJ Music Website'
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div className="min-h-screen bg-brand-dark text-brand-body font-body transition-colors dark:bg-black dark:text-white">
      <Navbar onToggleDark={() => setDark((d) => !d)} />
      <main>
        <Hero />
        <FeaturedEvents />
        <UpcomingEvents />
        <VideoAbout />
      </main>
      <Footer />
    </div>
  )
}
