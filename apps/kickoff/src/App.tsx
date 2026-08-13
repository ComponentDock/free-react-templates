import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { EventBar } from './components/EventBar'
import { GameReport } from './components/GameReport'
import { GameSchedule } from './components/GameSchedule'
import { Services } from './components/Services'
import { Team } from './components/Team'
import { About } from './components/About'
import { Testimonial } from './components/Testimonial'
import { Blog } from './components/Blog'
import { Subscribe } from './components/Subscribe'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Kickoff — Sports Club Template'
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <EventBar />
        <GameReport />
        <GameSchedule />
        <Services />
        <Team />
        <About />
        <Testimonial />
        <Blog />
        <Subscribe />
      </main>
      <Footer />
    </>
  )
}
