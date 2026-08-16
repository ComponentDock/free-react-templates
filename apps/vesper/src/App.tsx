import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { CounterBand } from './components/CounterBand'
import { ServicesGrid } from './components/ServicesGrid'
import { SermonsSlider } from './components/SermonsSlider'
import { Events } from './components/Events'
import { Causes } from './components/Causes'
import { DailyVerse } from './components/DailyVerse'
import { Blog } from './components/Blog'
import { PastorGrid } from './components/PastorGrid'
import { Contact } from './components/Contact'
import { Gallery } from './components/Gallery'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Vesper — Church Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <CounterBand />
        <ServicesGrid />
        <SermonsSlider />
        <Events />
        <Causes />
        <DailyVerse />
        <Blog />
        <PastorGrid />
        <Contact />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}
