import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { SearchPanel } from './components/SearchPanel'
import { BestTours } from './components/BestTours'
import { CtaSlider } from './components/CtaSlider'
import { BestOffers } from './components/BestOffers'
import { Testimonials } from './components/Testimonials'
import { TrendingDestinations } from './components/TrendingDestinations'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { CopyrightBar } from './components/CopyrightBar'

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-trek-text">
      <TopBar />
      <Navbar />
      <main>
        <HeroSlider />
        <SearchPanel />
        <BestTours />
        <CtaSlider />
        <BestOffers />
        <Testimonials />
        <TrendingDestinations />
        <Contact />
      </main>
      <Footer />
      <CopyrightBar />
    </div>
  )
}
