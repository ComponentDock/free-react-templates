import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { PopularCourses } from './components/PopularCourses'
import { CtaSection } from './components/CtaSection'
import { Reviews } from './components/Reviews'
import { SearchCourse } from './components/SearchCourse'
import { UpcomingEvents } from './components/UpcomingEvents'
import { Blog } from './components/Blog'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="font-[var(--font-poppins)]">
      <Navbar />
      <Hero />
      <Features />
      <PopularCourses />
      <CtaSection />
      <Reviews />
      <SearchCourse />
      <UpcomingEvents />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  )
}
