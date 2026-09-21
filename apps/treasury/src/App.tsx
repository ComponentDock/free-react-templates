import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Newsletter } from './components/Newsletter'
import { About } from './components/About'
import { Team } from './components/Team'
import { Gallery } from './components/Gallery'
import { HowItWorks } from './components/HowItWorks'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Pricing } from './components/Pricing'
import { FAQ } from './components/FAQ'
import { Blog } from './components/Blog'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Treasury — Banking & Finance Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Newsletter />
        <About />
        <Team />
        <Gallery />
        <HowItWorks />
        <Services />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
