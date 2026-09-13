import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { HeroSlider } from './components/HeroSlider'
import { Features } from './components/Features'
import { About } from './components/About'
import { Services } from './components/Services'
import { Portfolio } from './components/Portfolio'
import { PromoCTA } from './components/PromoCTA'
import { Team } from './components/Team'
import { Info } from './components/Info'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Zenflow - Business & Tech Agency Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <HeroSlider />
        <Features />
        <About />
        <Services />
        <Portfolio />
        <PromoCTA />
        <Team />
        <Info />
        <Testimonials />
        <Pricing />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
