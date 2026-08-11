import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { About } from './components/About'
import { Gallery } from './components/Gallery'
import { AboutSecond } from './components/AboutSecond'
import { BookingForm } from './components/BookingForm'
import { Services } from './components/Services'
import { Subscribe } from './components/Subscribe'
import { BlogSection } from './components/BlogSection'
import { Footer } from './components/Footer'

/**
 * Bistro — recreation of ColorLib "Allfood"
 * (https://colorlib.com/wp/template/allfood/). Section order 1:1 with the
 * source: sticky header → hero slider → about → gallery mosaic → about 2 →
 * booking form → services → subscribe band → blog cards → footer.
 */
export function App() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <HeroSlider />
        <About />
        <Gallery />
        <AboutSecond />
        <BookingForm />
        <Services />
        <Subscribe />
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}
