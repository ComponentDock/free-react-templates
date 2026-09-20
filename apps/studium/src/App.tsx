import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Categories } from './components/Categories'
import { CourseCards } from './components/CourseCards'
import { Features } from './components/Features'
import { Testimonials } from './components/Testimonials'
import { About } from './components/About'
import { Services } from './components/Services'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Studium — Online Learning Platform'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-brand-text">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <CourseCards />
        <Features />
        <Testimonials />
        <About />
        <Services />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
