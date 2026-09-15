import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Reasons } from './components/Reasons'
import { LatestActivities } from './components/LatestActivities'
import { Causes } from './components/Causes'
import { Counter } from './components/Counter'
import { Volunteers } from './components/Volunteers'
import { News } from './components/News'
import { DonationForm } from './components/DonationForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Kindfund — Charity Template'
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Reasons />
        <LatestActivities />
        <Causes />
        <Counter />
        <Volunteers />
        <News />
        <DonationForm />
      </main>
      <Footer />
    </div>
  )
}
