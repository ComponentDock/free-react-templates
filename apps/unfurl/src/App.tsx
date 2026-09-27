import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Journal from './components/Journal'
import Contact from './components/Contact'
import Footer from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Unfurl — Portfolio & Personal Template'
  }, [])

  return (
    <div className="min-h-screen bg-dark-bg text-white transition-colors">
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Services />
      <Skills />
      <Testimonials />
      <Journal />
      <Contact />
      <Footer />
    </div>
  )
}
