import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { IntroBanner } from './components/IntroBanner'
import { DailyVerse } from './components/DailyVerse'
import { ChurchServices } from './components/ChurchServices'
import { Sermon } from './components/Sermon'
import { Counter } from './components/Counter'
import { Testimony } from './components/Testimony'
import { Events } from './components/Events'
import { RecentSermons } from './components/RecentSermons'
import { Blog } from './components/Blog'
import { Gallery } from './components/Gallery'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Sprout — Church & Community Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <Navbar />
      <main>
        <Hero />
        <IntroBanner />
        <DailyVerse />
        <ChurchServices />
        <Sermon />
        <Counter />
        <Testimony />
        <Events />
        <RecentSermons />
        <Blog />
        <Gallery />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
