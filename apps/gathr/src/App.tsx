import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { EventInfo } from './components/EventInfo'
import { Countdown } from './components/Countdown'
import { About } from './components/About'
import { Features } from './components/Features'
import { Speakers } from './components/Speakers'
import { Pricing } from './components/Pricing'
import { Calendar } from './components/Calendar'
import { Partners } from './components/Partners'
import { CtaBanner } from './components/CtaBanner'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <EventInfo />
      <Countdown />
      <About />
      <Features />
      <Speakers />
      <Pricing />
      <Calendar />
      <Partners />
      <CtaBanner />
      <Footer />
    </div>
  )
}
