import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { IntroStrip } from './components/IntroStrip'
import { Services } from './components/Services'
import { About } from './components/About'
import { Stats } from './components/Stats'
import { Appointment } from './components/Appointment'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Pricing } from './components/Pricing'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Torquely — Car Repair Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <IntroStrip />
        <Services />
        <About />
        <Stats />
        <Appointment />
        <Testimonials />
        <Blog />
        <Pricing />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
