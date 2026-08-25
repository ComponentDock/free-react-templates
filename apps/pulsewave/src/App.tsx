import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Team } from './components/Team'
import { Testimonials } from './components/Testimonials'
import { Features } from './components/Features'
import { Portfolio } from './components/Portfolio'
import { Pricing } from './components/Pricing'
import { Blog } from './components/Blog'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Team />
        <Testimonials />
        <Features />
        <Portfolio />
        <Pricing />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
