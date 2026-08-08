import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Categories } from './components/Categories'
import { Courses } from './components/Courses'
import { Features } from './components/Features'
import { Instructors } from './components/Instructors'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { CtaBand } from './components/CtaBand'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Schola — Education Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Categories />
        <Courses />
        <Features />
        <Instructors />
        <Testimonials />
        <Pricing />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
