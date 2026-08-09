import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Offers } from './components/Offers'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { Team } from './components/Team'
import { Appointment } from './components/Appointment'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Stylely — Barber Shop Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Offers />
        <Pricing />
        <Testimonials />
        <Team />
        <Appointment />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
