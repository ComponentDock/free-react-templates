import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Countdown } from './components/Countdown'
import { Services } from './components/Services'
import { About } from './components/About'
import { Gallery } from './components/Gallery'
import { Counter } from './components/Counter'
import { Feedback } from './components/Feedback'
import { Brands } from './components/Brands'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'CivicPulse — Political Party Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <TopBar />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Countdown />
        <Services />
        <About />
        <Gallery />
        <Counter />
        <Feedback />
        <Brands />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
