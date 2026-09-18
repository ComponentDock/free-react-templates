import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Courses } from './components/Courses'
import { Features } from './components/Features'
import { Faculty } from './components/Faculty'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Features />
        <Faculty />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
