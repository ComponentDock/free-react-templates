import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { HeroBoxes } from './components/HeroBoxes'
import { PopularCourses } from './components/PopularCourses'
import { Register } from './components/Register'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Events } from './components/Events'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-body transition-colors">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <HeroBoxes />
        <PopularCourses />
        <Register />
        <Services />
        <Testimonials />
        <Events />
      </main>
      <Footer />
    </div>
  )
}
