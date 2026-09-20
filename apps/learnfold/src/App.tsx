import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { CourseCategories } from './components/CourseCategories'
import { SearchSection } from './components/SearchSection'
import { FeaturedCourses } from './components/FeaturedCourses'
import { SignupSection } from './components/SignupSection'
import { BannerCTA } from './components/BannerCTA'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="font-sans text-ink">
      <Navbar />
      <Hero />
      <CourseCategories />
      <SearchSection />
      <FeaturedCourses />
      <SignupSection />
      <BannerCTA />
      <Footer />
    </div>
  )
}
