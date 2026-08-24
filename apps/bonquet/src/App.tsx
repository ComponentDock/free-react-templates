import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Menu } from './components/Menu'
import { Reservation } from './components/Reservation'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Menu />
      <Reservation />
      <Testimonials />
      <Footer />
    </div>
  )
}
