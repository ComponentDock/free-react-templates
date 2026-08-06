import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { CtaBand } from './components/CtaBand'
import { Works } from './components/Works'
import { Testimonials } from './components/Testimonials'
import { Counter } from './components/Counter'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Verve — App Landing Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-gray-100">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <CtaBand />
        <Works />
        <Testimonials />
        <Counter />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
