import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Portfolio } from './components/Portfolio'
import { Services } from './components/Services'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Stats } from './components/Stats'
import { Pricing } from './components/Pricing'
import { Testimonials } from './components/Testimonials'
import { Team } from './components/Team'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

/* Vivid — a creative agency landing page. Section order mirrors the
   source template 1:1: header → hero → about → portfolio → services →
   why choose us → stats → pricing → testimonials → team → blog →
   contact → footer. */

export function App() {
  useEffect(() => {
    document.title = 'Vivid — Creative Agency'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-body">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <WhyChooseUs />
        <Stats />
        <Pricing />
        <Testimonials />
        <Team />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
