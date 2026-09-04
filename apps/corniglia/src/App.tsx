import { useEffect } from 'react'
import { CarouselSection } from './components/CarouselSection'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Corniglia — Testimonials Carousel'
  }, [])

  return (
    <div className="min-h-screen bg-slate-dark font-sans text-white">
      <main>
        <CarouselSection />
      </main>
      <Footer />
    </div>
  )
}
