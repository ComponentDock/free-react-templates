import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { FeatureBar } from './components/FeatureBar'
import { Admission } from './components/Admission'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Scholarly — Education Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <header>
        <TopBar />
        <Navbar />
      </header>
      <main className="flex-1">
        <Hero />
        <FeatureBar />
        <Admission />
      </main>
      <Footer />
    </div>
  )
}
