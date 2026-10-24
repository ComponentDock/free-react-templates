import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Counter } from './components/Counter'
import { Features } from './components/Features'
import { Fundraisers } from './components/Fundraisers'
import { Donations } from './components/Donations'
import { SuccessStory } from './components/SuccessStory'
import { News } from './components/News'
import { Volunteer } from './components/Volunteer'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Alms — Charity & Fundraising Template'
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Counter />
        <Features />
        <Fundraisers />
        <Donations />
        <SuccessStory />
        <News />
        <Volunteer />
      </main>
      <Footer />
    </div>
  )
}
