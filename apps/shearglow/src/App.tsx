import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Services } from './components/Services'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Portfolio } from './components/Portfolio'
import { Experts } from './components/Experts'
import { Blog } from './components/Blog'
import { CTA } from './components/CTA'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'ShearGlow — Hair Salon'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <Experts />
        <Blog />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
