import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Categories } from './components/Categories'
import { ProductGrid } from './components/ProductGrid'
import { ClassSection } from './components/ClassSection'
import { TeamGrid } from './components/TeamGrid'
import { TestimonialCarousel } from './components/TestimonialCarousel'
import { InstagramGrid } from './components/InstagramGrid'
import { MapContact } from './components/MapContact'
import { Footer } from './components/Footer'

/**
 * Batterly — built from the reference design.
 *
 * Section order 1:1 with the: navbar → hero slider → about → categories → product grid →
 * class registration → team grid → testimonial carousel → instagram grid →
 * map contact → footer.
 */
export function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Categories />
        <ProductGrid />
        <ClassSection />
        <TeamGrid />
        <TestimonialCarousel />
        <InstagramGrid />
        <MapContact />
      </main>
      <Footer />
    </div>
  )
}
