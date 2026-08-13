import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Welcome } from './components/Welcome'
import { Experience } from './components/Experience'
import { Slider } from './components/Slider'
import { Blog } from './components/Blog'
import { Testimonials } from './components/Testimonials'
import { Destinations } from './components/Destinations'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Wander — Travel & Tours Template'
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:bg-brand focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <Welcome />
        <Experience />
        <Slider />
        <Blog />
        <Testimonials />
        <Destinations />
      </main>
      <Footer />
    </div>
  )
}
