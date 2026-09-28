import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { AboutInfoBar } from './components/AboutInfoBar'
import { Services } from './components/Services'
import { Gallery } from './components/Gallery'
import { AboutMe } from './components/AboutMe'
import { BrandCarousel } from './components/BrandCarousel'
import { Testimonials } from './components/Testimonials'
import { Blog } from './components/Blog'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Calypso — Personal Portfolio'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AboutInfoBar />
        <Services />
        <Gallery />
        <AboutMe />
        <BrandCarousel />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}
