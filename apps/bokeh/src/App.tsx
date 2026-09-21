import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Portfolio } from './components/Portfolio'
import { Services } from './components/Services'
import { Pricing } from './components/Pricing'
import { About } from './components/About'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <Pricing />
        <About />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
