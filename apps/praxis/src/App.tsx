import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { WhyChooseUs } from './components/WhyChooseUs'
import { CtaBanner } from './components/CtaBanner'
import { Services } from './components/Services'
import { ParallaxDiscount } from './components/ParallaxDiscount'
import { Newsletter } from './components/Newsletter'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Praxis — Plastic Surgery Clinic'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <WhyChooseUs />
        <CtaBanner />
        <Services />
        <ParallaxDiscount />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}
