import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Rooms } from './components/Rooms'
import { ChooseUs } from './components/ChooseUs'
import { Testimonials } from './components/Testimonials'
import { Gallery } from './components/Gallery'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Hibiscus — Hotel Reservation Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Rooms />
        <ChooseUs />
        <Testimonials />
        <Gallery />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
