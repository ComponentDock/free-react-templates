import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AboutUs } from './components/AboutUs'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { Counter } from './components/Counter'
import { Testimonials } from './components/Testimonials'
import { CTASection } from './components/CTASection'
import { Team } from './components/Team'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Smokeshade — Fashion Agency Template'
  }, [])

  return (
    <div className="min-h-screen bg-[#191919] font-sans text-white">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Portfolio />
        <Counter />
        <Testimonials />
        <CTASection />
        <Team />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
