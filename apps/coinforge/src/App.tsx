import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeaturedLogos } from './components/FeaturedLogos'
import { About } from './components/About'
import { Features } from './components/Features'
import { ICOLive } from './components/ICOLive'
import { Whitepaper } from './components/Whitepaper'
import { TokenDistribution } from './components/TokenDistribution'
import { Roadmap } from './components/Roadmap'
import { Team } from './components/Team'
import { MobileApp } from './components/MobileApp'
import { FAQ } from './components/FAQ'
import { Community } from './components/Community'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Coinforge — ICO & Cryptocurrency Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-navy text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FeaturedLogos />
        <About />
        <Features />
        <ICOLive />
        <Whitepaper />
        <TokenDistribution />
        <Roadmap />
        <Team />
        <MobileApp />
        <FAQ />
        <Community />
      </main>
      <Footer />
    </div>
  )
}
