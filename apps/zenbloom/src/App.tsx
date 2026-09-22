import { useEffect } from 'react'
import { TopBar } from './components/TopBar'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Features } from './components/Features'
import { Counter } from './components/Counter'
import { Classes } from './components/Classes'
import { Testimonials } from './components/Testimonials'
import { Schedule } from './components/Schedule'
import { Trainers } from './components/Trainers'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Zenbloom — Yoga Studio Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Features />
        <Counter />
        <Classes />
        <Testimonials />
        <Schedule />
        <Trainers />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
