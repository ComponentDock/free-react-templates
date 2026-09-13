import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { GetQuote } from './components/GetQuote'
import { Services } from './components/Services'
import { WhyChooseUs } from './components/WhyChooseUs'
import { Counter } from './components/Counter'
import { Products } from './components/Products'
import { Testimonial } from './components/Testimonial'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Keycraft — Locksmith Services Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <GetQuote />
        <Services />
        <WhyChooseUs />
        <Counter />
        <Products />
        <Testimonial />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
