import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Categories } from './components/Categories'
import { Courses } from './components/Courses'
import { WhyUs } from './components/WhyUs'
import { Instructors } from './components/Instructors'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { CtaBand } from './components/CtaBand'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Coursely — Learning Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Courses />
        <WhyUs />
        <Instructors />
        <Testimonials />
        <Pricing />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
