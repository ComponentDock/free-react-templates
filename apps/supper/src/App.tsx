import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { About } from './components/About'
import { Chefs } from './components/Chefs'
import { Menu } from './components/Menu'
import { Reservation } from './components/Reservation'
import { Testimonials } from './components/Testimonials'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Chefs />
      <Menu />
      <Reservation />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
