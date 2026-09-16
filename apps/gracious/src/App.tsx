import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { CounterStrip } from './components/CounterStrip'
import { Services } from './components/Services'
import { Causes } from './components/Causes'
import { LatestDonations } from './components/LatestDonations'
import { Gallery } from './components/Gallery'
import { Blog } from './components/Blog'
import { Events } from './components/Events'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Gracious — Charity & Nonprofit Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CounterStrip />
        <Services />
        <Causes />
        <LatestDonations />
        <Gallery />
        <Blog />
        <Events />
      </main>
      <Footer />
    </div>
  )
}
