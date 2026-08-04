import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Video } from './components/Video'
import { Quote } from './components/Quote'
import { Emergency } from './components/Emergency'
import { Volunteer } from './components/Volunteer'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Thepetcare — Animal Care & Donation Website Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Video />
        <Quote />
        <Emergency />
        <Volunteer />
      </main>
      <Footer />
    </div>
  )
}
