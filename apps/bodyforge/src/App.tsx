import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { FeaturedClasses } from './components/FeaturedClasses'
import { Service } from './components/Service'
import { Coaches } from './components/Coaches'
import { Discount } from './components/Discount'
import { BmiCalculator } from './components/BmiCalculator'
import { Testimonials } from './components/Testimonials'
import { Cta } from './components/Cta'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <FeaturedClasses />
      <Service />
      <Coaches />
      <Discount />
      <BmiCalculator />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  )
}
