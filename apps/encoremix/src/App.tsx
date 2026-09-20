import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { LineupHeadliners } from './components/LineupHeadliners'
import { CompleteLineup } from './components/CompleteLineup'
import { NextEvents } from './components/NextEvents'
import { LastNews } from './components/LastNews'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <LineupHeadliners />
      <CompleteLineup />
      <NextEvents />
      <LastNews />
      <Footer />
    </div>
  )
}
