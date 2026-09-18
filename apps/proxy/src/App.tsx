import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Properties } from './components/Properties'
import { Testimonials } from './components/Testimonials'
import { About } from './components/About'
import { Features } from './components/Features'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Proxy — Real Estate Agent Template'
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans text-gray-500">
      <Navbar />
      <main>
        <Hero />
        <Properties />
        <Testimonials />
        <About />
        <Features />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
