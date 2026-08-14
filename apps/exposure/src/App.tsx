import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { Awards } from './components/Awards'
import { Testimonial } from './components/Testimonial'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

/** Exposure — one-page photography-portfolio landing.
 *  Section order matches the live preview DOM 1:1:
 *  header → hero → about → services → gallery → awards → testimonial →
 *  blog → footer. */
export function App() {
  return (
    <div className="min-h-screen bg-coal font-sans text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Awards />
        <Testimonial />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
