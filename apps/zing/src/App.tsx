import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { CtaBanner } from './components/CtaBanner'
import { Menu } from './components/Menu'
import { Testimonials } from './components/Testimonials'
import { Chefs } from './components/Chefs'
import { Ingredients } from './components/Ingredients'
import { Blog } from './components/Blog'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <CtaBanner />
      <Menu />
      <Testimonials />
      <Chefs />
      <Ingredients />
      <Blog />
      <Newsletter />
      <Footer />
    </div>
  )
}
