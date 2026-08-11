import { useEffect } from 'react'
import { documentTitle, skipLabel } from './data'
import { About } from './components/About'
import { Facilities } from './components/Facilities'
import { Footer } from './components/Footer'
import { Guestbook } from './components/Guestbook'
import { Hero } from './components/Hero'
import { InstagramStrip } from './components/InstagramStrip'
import { Navbar } from './components/Navbar'
import { Rooms } from './components/Rooms'

export function App() {
  useEffect(() => {
    document.title = documentTitle
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-heading">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-gold focus:px-4 focus:py-2 focus:text-white"
      >
        {skipLabel}
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <Rooms />
        <About />
        <Facilities />
        <Guestbook />
        <InstagramStrip />
      </main>
      <Footer />
    </div>
  )
}
