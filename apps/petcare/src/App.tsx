import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Counters } from './components/Counters'
import { Commitment } from './components/Commitment'
import { Gallery } from './components/Gallery'
import { CallCta } from './components/CallCta'
import { Team } from './components/Team'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Petcare — Pet Care Services Website Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Counters />
        <Commitment />
        <Gallery />
        <CallCta />
        <Team />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
