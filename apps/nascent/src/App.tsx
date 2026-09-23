import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Pricing } from './components/Pricing'
import { FeaturesAccordion } from './components/FeaturesAccordion'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Pricing />
        <FeaturesAccordion />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
