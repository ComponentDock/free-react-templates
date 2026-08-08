import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Speakers } from './components/Speakers'
import { Tracks } from './components/Tracks'
import { Schedule } from './components/Schedule'
import { Tickets } from './components/Tickets'
import { Sponsors } from './components/Sponsors'
import { Venue } from './components/Venue'
import { Faq } from './components/Faq'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Keynote — AI Conference Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <Speakers />
        <Tracks />
        <Schedule />
        <Tickets />
        <Sponsors />
        <Venue />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}
