import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { IntroFeatures } from './components/IntroFeatures'
import { About } from './components/About'
import { CounterStats } from './components/CounterStats'
import { PracticeAreas } from './components/PracticeAreas'
import { Cases } from './components/Cases'
import { Attorneys } from './components/Attorneys'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Chambers — Law Firm Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-[#212529]">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <IntroFeatures />
        <About />
        <CounterStats />
        <PracticeAreas />
        <Cases />
        <Attorneys />
      </main>
      <Footer />
    </div>
  )
}
