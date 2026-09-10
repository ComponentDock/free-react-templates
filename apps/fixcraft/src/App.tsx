import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { Services } from './components/Services'
import { Counter } from './components/Counter'
import { Appointment } from './components/Appointment'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Pricing } from './components/Pricing'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Fixcraft — Auto Repair Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Intro />
        <Services />
        <Counter />
        <Appointment />
        <Testimonials />
        <Blog />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}
