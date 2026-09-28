import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Specialties } from './components/Specialties'
import { Testimonials } from './components/Testimonials'
import { FeatureMenu } from './components/FeatureMenu'
import { Chef } from './components/Chef'
import { MenuPricing } from './components/MenuPricing'
import { Events } from './components/Events'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Seared — Restaurant & Fine Dining Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-body">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Specialties />
        <Testimonials />
        <FeatureMenu />
        <Chef />
        <MenuPricing />
        <Events />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  )
}
