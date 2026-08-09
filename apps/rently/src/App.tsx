import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Steps } from './components/Steps'
import { Vehicles } from './components/Vehicles'
import { About } from './components/About'
import { Services } from './components/Services'
import { DriverCta } from './components/DriverCta'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Rently — Car Rental Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Steps />
        <Vehicles />
        <About />
        <Services />
        <DriverCta />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
