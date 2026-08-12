import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Volunteer } from './components/Volunteer'
import { Services } from './components/Services'
import { Grants } from './components/Grants'
import { VolunteerBand } from './components/VolunteerBand'
import { Causes } from './components/Causes'
import { IntroRow } from './components/IntroRow'
import { Counter } from './components/Counter'
import { Blog } from './components/Blog'
import { Sponsorship } from './components/Sponsorship'
import { SuccessStories } from './components/SuccessStories'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Kindred — Charity Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <Volunteer />
        <Services />
        <Grants />
        <VolunteerBand />
        <Causes />
        <IntroRow />
        <Counter />
        <Blog />
        <Sponsorship />
        <SuccessStories />
      </main>
      <Footer />
    </div>
  )
}
