import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Welcome } from './components/Welcome'
import { About } from './components/About'
import { Trainers } from './components/Trainers'
import { Pricing } from './components/Pricing'
import { Faq } from './components/Faq'
import { Testimonials } from './components/Testimonials'
import { Gallery } from './components/Gallery'
import { Blog } from './components/Blog'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Dogger — Dog Care Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Welcome />
        <About />
        <Trainers />
        <Pricing />
        <Faq />
        <Testimonials />
        <Gallery />
        <Blog />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
