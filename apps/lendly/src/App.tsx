import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { WhyUs } from './components/WhyUs'
import { CtaBand } from './components/CtaBand'
import { Features } from './components/Features'
import { Help } from './components/Help'
import { Info } from './components/Info'
import { Score } from './components/Score'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div id="top" className="bg-white font-sans text-ink">
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <CtaBand />
        <Features />
        <Help />
        <Info />
        <Score />
      </main>
      <Footer />
    </div>
  )
}
