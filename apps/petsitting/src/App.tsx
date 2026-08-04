import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Counters } from './components/Counters'
import { Faq } from './components/Faq'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { Gallery } from './components/Gallery'
import { Blog } from './components/Blog'
import { Appointment } from './components/Appointment'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Petsitting — Pet Sitting Services Website Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Intro />
        <WhyChooseUs />
        <Counters />
        <Faq />
        <Testimonials />
        <Pricing />
        <Gallery />
        <Blog />
        <Appointment />
      </main>
      <Footer />
    </div>
  )
}
