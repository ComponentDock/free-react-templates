import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { AboutEmail } from './components/AboutEmail'
import { AboutUs } from './components/AboutUs'
import { Team } from './components/Team'
import { Gallery } from './components/Gallery'
import { HowItWorks } from './components/HowItWorks'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { FAQ } from './components/FAQ'
import { AboutFeatures } from './components/AboutFeatures'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Banknote — Banking Solutions Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <AboutEmail />
        <AboutUs />
        <Team />
        <Gallery />
        <HowItWorks />
        <Services />
        <Testimonials />
        <Pricing />
        <FAQ />
        <AboutFeatures />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
