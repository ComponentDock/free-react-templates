import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Stats } from './components/Stats'
import { Features } from './components/Features'
import { AboutOne } from './components/AboutOne'
import { AboutTwo } from './components/AboutTwo'
import { Video } from './components/Video'
import { Testimonials } from './components/Testimonials'
import { Screenshots } from './components/Screenshots'
import { Pricing } from './components/Pricing'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Appru — App Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Features />
        <AboutOne />
        <AboutTwo />
        <Video />
        <Testimonials />
        <Screenshots />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
