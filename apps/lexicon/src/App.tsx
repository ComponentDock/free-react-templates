import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Rooms } from './components/Rooms'
import { Services } from './components/Services'
import { Video } from './components/Video'
import { Guests } from './components/Guests'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Lexicon — Hotel Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Rooms />
        <Services />
        <Video />
        <Guests />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
