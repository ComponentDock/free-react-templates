import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { SearchBar } from './components/SearchBar'
import { Services } from './components/Services'
import { PopularCourses } from './components/PopularCourses'
import { About } from './components/About'
import { Testimonials } from './components/Testimonials'
import { Instructors } from './components/Instructors'
import { OurCourses } from './components/OurCourses'
import { EventsBlog } from './components/EventsBlog'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Erudit — Online Learning Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <HeroSlider />
        <SearchBar />
        <Services />
        <PopularCourses />
        <About />
        <Testimonials />
        <Instructors />
        <OurCourses />
        <EventsBlog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
