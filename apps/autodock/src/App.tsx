import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { PartnerStrip } from './components/PartnerStrip'
import { Services } from './components/Services'
import { FunFacts } from './components/FunFacts'
import { ChooseCar } from './components/ChooseCar'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { MobileApp } from './components/MobileApp'
import { Articles } from './components/Articles'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-opensans">
      <Header />
      <main>
        <Hero />
        <About />
        <PartnerStrip />
        <Services />
        <FunFacts />
        <ChooseCar />
        <Pricing />
        <Testimonials />
        <MobileApp />
        <Articles />
      </main>
      <Footer />
    </div>
  )
}
