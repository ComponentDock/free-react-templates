import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { Services } from './components/Services'
import { Properties } from './components/Properties'
import { Features } from './components/Features'
import { WhyUs } from './components/WhyUs'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Nestled — Real Estate Template'
  }, [])
  return (
    <div className="min-h-screen bg-white font-sans text-body">
      <Navbar />
      <main>
        <HeroSlider />
        <Services />
        <Properties />
        <Features />
        <WhyUs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
