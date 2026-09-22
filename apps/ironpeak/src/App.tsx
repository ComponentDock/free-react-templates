import { useEffect } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { FeaturedClasses } from './components/FeaturedClasses'
import { Schedule } from './components/Schedule'
import { Trainers } from './components/Trainers'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Ironpeak — Fitness & Gym Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <Header />
      <main className="flex-1">
        <Hero />
        <FeaturedClasses />
        <Schedule />
        <Trainers />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
