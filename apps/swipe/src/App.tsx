import { useEffect } from 'react'
import { TestimonialCarousel } from './components/TestimonialCarousel'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Swipe — Testimonials Carousel'
  }, [])

  return (
    <div className="min-h-screen bg-[rgba(0,0,0,0.05)] text-gray font-sans">
      <main>
        <TestimonialCarousel />
      </main>
      <Footer />
    </div>
  )
}
