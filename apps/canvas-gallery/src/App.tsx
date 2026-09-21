import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { About } from './components/About'
import { Gallery } from './components/Gallery'
import { Testimonials } from './components/Testimonials'
import { CtaBanner } from './components/CtaBanner'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-text-dark">
      <Navbar />
      <main>
        <HeroSlider />
        <About />
        <Gallery />
        <Testimonials />
        <CtaBanner />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
