import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { About } from './components/About'
import { WhyUs } from './components/WhyUs'
import { Gallery } from './components/Gallery'
import { WhyChoose } from './components/WhyChoose'
import { Services } from './components/Services'
import { Footer } from './components/Footer'

/* Barrister — single-page law firm & attorney landing: navbar → hero →
   promise intro → about me → why us icons → gallery → why choose us →
   list of services → footer. */
export function App() {
  useEffect(() => {
    document.title = 'Barrister — Law Firm Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <About />
        <WhyUs />
        <Gallery />
        <WhyChoose />
        <Services />
      </main>
      <Footer />
    </div>
  )
}