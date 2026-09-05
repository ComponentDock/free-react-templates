import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { About } from './components/About'
import { Portfolio } from './components/Portfolio'
import { Testimonials } from './components/Testimonials'
import { Products } from './components/Products'
import { Blog } from './components/Blog'
import { Newsletter } from './components/Newsletter'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Verdant — Gardening & Landscaping Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Testimonials />
        <Products />
        <Blog />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
