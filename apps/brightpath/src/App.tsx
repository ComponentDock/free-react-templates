import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Departments } from './components/Departments'
import { PopularCourses } from './components/PopularCourses'
import { Facts } from './components/Facts'
import { Testimonials } from './components/Testimonials'
import { Registration } from './components/Registration'
import { Events } from './components/Events'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="font-[var(--font-montserrat)]">
      <Navbar />
      <Hero />
      <Features />
      <Departments />
      <PopularCourses />
      <Facts />
      <Testimonials />
      <Registration />
      <Events />
      <Footer />
    </div>
  )
}
