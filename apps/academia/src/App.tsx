import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { PopularCourses } from './components/PopularCourses'
import { Testimonials } from './components/Testimonials'
import { Speciality } from './components/Speciality'
import { Newsletter } from './components/Newsletter'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

/* Section order 1:1 from the reference demo (index.html): header → hero →
   about → popular courses → testimonial → speciality → newsletter → blog →
   footer. */
export function App() {
  useEffect(() => {
    document.title = 'Academia — Online Education Template'
  }, [])

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <About />
        <PopularCourses />
        <Testimonials />
        <Speciality />
        <Newsletter />
        <Blog />
      </main>
      {/* Footer renders its own <footer> contentinfo landmark. */}
      <Footer />
    </>
  )
}
