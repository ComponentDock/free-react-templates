import { Blog } from './components/Blog'
import { Footer } from './components/Footer'
import { HeroSlider } from './components/HeroSlider'
import { Intro } from './components/Intro'
import { Navbar } from './components/Navbar'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'

/* Paragon — single-page interior-design landing. Section order 1:1 with
   the reference: navbar → hero slider → intro/experience → featured
   services → latest projects → testimonials → blog → footer. DM Sans
   throughout; uppercase black headings with sage-green accents. */
export function App() {
  return (
    <div className="font-sans text-ink">
      <Navbar />
      <main>
        <HeroSlider />
        <Intro />
        <Services />
        <Projects />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
