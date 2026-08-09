import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TripForm } from './components/TripForm'
import { Offer } from './components/Offer'
import { Services } from './components/Services'
import { Steps } from './components/Steps'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Drively — Car Rental Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TripForm />
        <Offer />
        <Services />
        <Steps />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
