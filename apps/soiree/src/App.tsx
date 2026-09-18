import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { EventInfo } from './components/EventInfo'
import { Countdown } from './components/Countdown'
import { About } from './components/About'
import { Speakers } from './components/Speakers'
import { Pricing } from './components/Pricing'
import { Calendar } from './components/Calendar'
import { Partners } from './components/Partners'
import { GetTickets } from './components/GetTickets'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-montserrat)]">
      <Header />
      <main>
        <Hero />
        <EventInfo />
        <Countdown />
        <About />
        <Speakers />
        <Pricing />
        <Calendar />
        <Partners />
        <GetTickets />
      </main>
      <Footer />
    </div>
  )
}
