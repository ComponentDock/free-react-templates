import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Portfolio } from './components/Portfolio'
import { Testimonials } from './components/Testimonials'
import { CtaBanner } from './components/CtaBanner'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Testimonials />
      <CtaBanner />
      <Blog />
      <Footer />
    </div>
  )
}
