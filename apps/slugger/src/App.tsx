import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { MatchStrip } from './components/MatchStrip'
import { Scoreboard } from './components/Scoreboard'
import { GameSchedule } from './components/GameSchedule'
import { Highlights } from './components/Highlights'
import { About } from './components/About'
import { NextMatch } from './components/NextMatch'
import { TeamSquad } from './components/TeamSquad'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { News } from './components/News'
import { Counters } from './components/Counters'
import { Subscribe } from './components/Subscribe'
import { Footer } from './components/Footer'

export function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MatchStrip />
        <Scoreboard />
        <GameSchedule />
        <Highlights />
        <About />
        <NextMatch />
        <TeamSquad />
        <Services />
        <Testimonials />
        <News />
        <Counters />
        <Subscribe />
      </main>
      <Footer />
    </>
  )
}
