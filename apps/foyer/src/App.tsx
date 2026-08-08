import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { Features } from './components/Features'
import { Testimonials } from './components/Testimonials'
import { Cta } from './components/Cta'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Foyer — Interior Design Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <Gallery />
        <Features />
        <Testimonials />
        <Cta />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
