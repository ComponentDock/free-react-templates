import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AboutVideo } from './components/AboutVideo'
import { Features } from './components/Features'
import { HomeAbout } from './components/HomeAbout'
import { Pricing } from './components/Pricing'
import { Booking } from './components/Booking'
import { Blog } from './components/Blog'
import { Gallery } from './components/Gallery'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Horse Club — Equestrian Club Website Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutVideo />
        <Features />
        <HomeAbout />
        <Pricing />
        <Booking />
        <Blog />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}
