import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Courses } from './components/Courses'
import { Schedule } from './components/Schedule'
import { Features } from './components/Features'
import { About } from './components/About'
import { Testimonials } from './components/Testimonials'
import { MemberCta } from './components/MemberCta'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Swole — Fitness Studio Template'
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <Schedule />
        <Features />
        <About />
        <Testimonials />
        <MemberCta />
      </main>
      <Footer />
    </div>
  )
}
