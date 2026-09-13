import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AudioPlayer } from './components/AudioPlayer'
import { Podcast } from './components/Podcast'
import { CallToAction } from './components/CallToAction'
import { Episodes } from './components/Episodes'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Sonance — Podcast Website Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AudioPlayer />
        <Podcast />
        <CallToAction />
        <Episodes />
      </main>
      <Footer />
    </div>
  )
}
