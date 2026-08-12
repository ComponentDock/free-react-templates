import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { IntroCards } from './components/IntroCards'
import { Services } from './components/Services'
import { Schedule } from './components/Schedule'
import { Shop } from './components/Shop'
import { Counters } from './components/Counters'
import { Trainers } from './components/Trainers'
import { Testimonials } from './components/Testimonials'
import { Classes } from './components/Classes'
import { RequestForm } from './components/RequestForm'
import { Events } from './components/Events'
import { Blog } from './components/Blog'
import { Gallery } from './components/Gallery'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Sculpt — Fitness Template'
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <IntroCards />
        <Services />
        <Schedule />
        <Shop />
        <Counters />
        <Trainers />
        <Testimonials />
        <Classes />
        <RequestForm />
        <Events />
        <Blog />
        <Gallery />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
