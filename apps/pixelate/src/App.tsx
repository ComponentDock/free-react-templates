import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AboutInfo } from './components/AboutInfo'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { AboutMe } from './components/AboutMe'
import { BrandCarousel } from './components/BrandCarousel'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-ink">
      <Navbar />
      <main>
        <Hero />
        <AboutInfo />
        <Services />
        <Gallery />
        <AboutMe />
        <BrandCarousel />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
