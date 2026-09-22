import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { CtaBanner } from './components/CtaBanner'
import { Classes } from './components/Classes'
import { TrainerSchedule } from './components/TrainerSchedule'
import { Team } from './components/Team'
import { LatestNews } from './components/LatestNews'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'IronShed — Fitness & Gym Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-body-text transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <CtaBanner />
        <Classes />
        <TrainerSchedule />
        <Team />
        <LatestNews />
      </main>
      <Footer />
    </div>
  )
}
