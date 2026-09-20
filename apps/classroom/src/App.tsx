import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Courses } from './components/Courses'
import { Programs } from './components/Programs'
import { Teachers } from './components/Teachers'
import { Testimonial } from './components/Testimonial'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Classroom — Education Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-600">
      <Navbar />
      <main>
        <Hero />
        <Courses />
        <Programs />
        <Teachers />
        <Testimonial />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
