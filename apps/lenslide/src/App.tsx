import { useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { TestimonialCarousel } from './components/TestimonialCarousel'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Lenslide — Testimonial Carousel Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-ink transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <TestimonialCarousel />
      </main>
      <Footer />
    </div>
  )
}
