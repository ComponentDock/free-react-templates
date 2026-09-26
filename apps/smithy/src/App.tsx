import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Brands } from './components/Brands'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { Testimonials } from './components/Testimonials'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Brands />
      <Services />
      <Portfolio />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  )
}
