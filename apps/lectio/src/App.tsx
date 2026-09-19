import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { CourseSearch } from './components/CourseSearch'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Courses } from './components/Courses'
import { FunFacts } from './components/FunFacts'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <CourseSearch />
        <Services />
        <Testimonials />
        <Courses />
        <FunFacts />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
