import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Countdown } from './components/Countdown'
import { About } from './components/About'
import { Gallery } from './components/Gallery'
import { Pricing } from './components/Pricing'
import { Sponsors } from './components/Sponsors'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export default function App() {
  useEffect(() => {
    document.title = 'Confetti — Digital Conference Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Countdown />
        <About />
        <Gallery />
        <Pricing />
        <Sponsors />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
