import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { TrustBand } from './components/TrustBand'
import { About } from './components/About'
import { Testimonials } from './components/Testimonials'
import { Gallery } from './components/Gallery'
import { Team } from './components/Team'
import { CallToAction } from './components/CallToAction'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Pristine — Cleaning Services'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Services />
        <TrustBand />
        <About />
        <Testimonials />
        <Gallery />
        <Team />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}
