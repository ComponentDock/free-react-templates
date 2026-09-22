import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Gallery } from './components/Gallery'
import { About } from './components/About'
import { Testimonials } from './components/Testimonials'
import { Booking } from './components/Booking'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-charcoal transition-colors">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Gallery />
        <About />
        <Testimonials />
        <Booking />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
