import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Countdown } from './components/Countdown'
import { Intro } from './components/Intro'
import { Topics } from './components/Topics'
import { Schedule } from './components/Schedule'
import { Speakers } from './components/Speakers'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Countdown />
      <Intro />
      <Topics />
      <Schedule />
      <Speakers />
      <CTA />
      <Footer />
    </div>
  )
}
