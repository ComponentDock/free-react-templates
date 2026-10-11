import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SearchCard } from './components/SearchCard'
import { PopularDestinations } from './components/PopularDestinations'
import { SpecialOffers } from './components/SpecialOffers'
import { EscapeLife } from './components/EscapeLife'
import { Counters } from './components/Counters'
import { Services } from './components/Services'
import { CtaBand } from './components/CtaBand'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <SearchCard />
        <PopularDestinations />
        <SpecialOffers />
        <EscapeLife />
        <Counters />
        <Services />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
