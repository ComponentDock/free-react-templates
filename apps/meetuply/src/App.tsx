import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Venue } from './components/Venue'
import { FunFacts } from './components/FunFacts'
import { Counters } from './components/Counters'
import { Speakers } from './components/Speakers'
import { Schedule } from './components/Schedule'
import { Testimony } from './components/Testimony'
import { Pricing } from './components/Pricing'
import { Blog } from './components/Blog'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Meetuply — Event Conference Landing Page Template'
  }, [])

  return (
    <div className="min-h-screen font-worksans text-body bg-white">
      <Navbar />
      <Hero />
      <Venue />
      <FunFacts />
      <Counters />
      <Speakers />
      <Schedule />
      <Testimony />
      <Pricing />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  )
}
