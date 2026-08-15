import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Featured } from './components/Featured'
import { ChooseCourse } from './components/ChooseCourse'
import { Tutorials } from './components/Tutorials'
import { Reviews } from './components/Reviews'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-body antialiased">
      <div data-section="navbar">
        <Navbar />
      </div>
      <main>
        <div data-section="hero">
          <Hero />
        </div>
        <div data-section="featured">
          <Featured />
        </div>
        <div data-section="choose-course">
          <ChooseCourse />
        </div>
        <div data-section="tutorials">
          <Tutorials />
        </div>
        <div data-section="reviews">
          <Reviews />
        </div>
      </main>
      <div data-section="footer">
        <Footer />
      </div>
    </div>
  )
}
