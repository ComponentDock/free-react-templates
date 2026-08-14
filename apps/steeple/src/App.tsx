import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { LatestSermon } from './components/LatestSermon'
import { About } from './components/About'
import { FeatureGrid } from './components/FeatureGrid'
import { RecentEvents } from './components/RecentEvents'
import { QuickContact } from './components/QuickContact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Steeple — Church & Religious'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <Navbar />
      <main>
        <Hero />
        <LatestSermon />
        <About />
        <FeatureGrid />
        <RecentEvents />
        <QuickContact />
      </main>
      <Footer />
    </div>
  )
}
