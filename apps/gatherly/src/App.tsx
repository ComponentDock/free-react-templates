import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Gallery } from './components/Gallery'
import { Subscribe } from './components/Subscribe'
import { Speakers } from './components/Speakers'
import { Schedule } from './components/Schedule'
import { Pricing } from './components/Pricing'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { MapBlock } from './components/MapBlock'
import { Footer } from './components/Footer'

/* Gatherly — event conference one-pager.
   Section order matches the reference preview 1:1: transparent navbar →
   full-height hero (rotated edge text + yellow countdown bar + two-slide
   carousel) → about + counter box → 4-up gallery strip → subscribe band →
   dark-blue speakers band → schedule with day tabs → pricing cards → blog
   → contact info + form → static map placeholder → dark footer. */
export function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Subscribe />
        <Speakers />
        <Schedule />
        <Pricing />
        <Blog />
        <Contact />
        <MapBlock />
      </main>
      <Footer />
    </div>
  )
}
