import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { MenuGrid } from './components/MenuGrid'
import { About } from './components/About'
import { VideoSection } from './components/VideoSection'
import { Testimonials } from './components/Testimonials'
import { InstagramGrid } from './components/InstagramGrid'
import { Footer } from './components/Footer'

/**
 * Griddle — recreation of ColorLib "Burger"
 * (https://colorlib.com/wp/template/burger/). Section order 1:1 with the
 * source: sticky header → hero slider → menu grid → about → video section →
 * testimonials → instagram grid → footer.
 */
export function App() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <HeroSlider />
        <MenuGrid />
        <About />
        <VideoSection />
        <Testimonials />
        <InstagramGrid />
      </main>
      <Footer />
    </div>
  )
}
