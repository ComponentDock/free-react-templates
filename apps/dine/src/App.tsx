import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Gallery } from './components/Gallery'
import { SpecialMenu } from './components/SpecialMenu'
import { OurMenu } from './components/OurMenu'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <SpecialMenu />
      <OurMenu />
      <Testimonials />
      <Blog />
      <Footer />
    </div>
  )
}
