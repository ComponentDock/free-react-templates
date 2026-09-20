import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SearchCourse } from './components/SearchCourse'
import { Services } from './components/Services'
import { Stats } from './components/Stats'
import { Testimonials } from './components/Testimonials'
import { Teachers } from './components/Teachers'
import { FreeTrial } from './components/FreeTrial'
import { Courses } from './components/Courses'
import { Blog } from './components/Blog'
import { Events } from './components/Events'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Brightmind — Education Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <SearchCourse />
        <Services />
        <Stats />
        <Testimonials />
        <Teachers />
        <FreeTrial />
        <Courses />
        <Blog />
        <Events />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
