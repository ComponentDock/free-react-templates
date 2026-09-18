import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Courses } from './components/Courses'
import { Meditation } from './components/Meditation'
import { Timetable } from './components/Timetable'
import { Testimonial } from './components/Testimonial'
import { Contact } from './components/Contact'
import { Gallery } from './components/Gallery'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Zen — Yoga & Meditation Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <Meditation />
        <Timetable />
        <Testimonial />
        <Contact />
        <Gallery />
      </main>
      <Footer />
    </div>
  )
}
