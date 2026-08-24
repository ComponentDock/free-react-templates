import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { PopularCourses } from './components/PopularCourses'
import { AboutSplit } from './components/AboutSplit'
import { StudentsViewing } from './components/StudentsViewing'
import { Testimonial } from './components/Testimonial'
import { Categories } from './components/Categories'
import { BecomeInstructor } from './components/BecomeInstructor'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'

export function App() {
  useEffect(() => {
    document.title = 'Scholar — Online Courses Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <PopularCourses />
        <AboutSplit />
        <StudentsViewing />
        <Testimonial />
        <Categories />
        <BecomeInstructor />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
