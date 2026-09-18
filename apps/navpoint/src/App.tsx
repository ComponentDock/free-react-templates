import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Categories } from './components/Categories'
import { Locations } from './components/Locations'
import { FoodGrid } from './components/FoodGrid'
import { HowItWorks } from './components/HowItWorks'
import { CTA } from './components/CTA'
import { CTAApp } from './components/CTAApp'
import { Clients } from './components/Clients'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Navbar />
      <Hero />
      <Categories />
      <Locations />
      <FoodGrid />
      <HowItWorks />
      <CTA />
      <CTAApp />
      <Clients />
      <Footer />
    </div>
  )
}
