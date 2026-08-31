import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TestimonialCard } from './TestimonialCard'

interface Testimonial {
  id: number
  quote: string
  author: string
  position: string
  imageUrl: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: 'Incredible services and amazing customer support.',
    author: 'Joy Smith',
    position: 'Project Manager',
    imageUrl: 'https://picsum.photos/seed/swipe-1/600/600',
  },
  {
    id: 2,
    quote: 'A seamless experience from start to finish.',
    author: 'Rony Smith',
    position: 'Product Designer',
    imageUrl: 'https://picsum.photos/seed/swipe-2/600/600',
  },
  {
    id: 3,
    quote: 'Their team went above and beyond our expectations.',
    author: 'John Doe',
    position: 'Marketing Director',
    imageUrl: 'https://picsum.photos/seed/swipe-3/600/600',
  },
]

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }, [])

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }, [])

  useEffect(() => {
    const timer = setInterval(goToNext, 5000)
    return () => clearInterval(timer)
  }, [goToNext])

  const current = testimonials[currentIndex]!

  return (
    <section className="py-[7em] bg-[rgba(0,0,0,0.05)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-[28px] font-normal text-black">Testimonials</h2>
        </div>

        <div className="relative">
          {/* Arrow navigation */}
          <button
            onClick={goToPrev}
            aria-label="Previous slide"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-[rgba(0,0,0,0.2)] hover:text-brand transition-colors duration-700"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            onClick={goToNext}
            aria-label="Next slide"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-[rgba(0,0,0,0.2)] hover:text-brand transition-colors duration-700"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Card */}
          <div className="max-w-[calc(100%-80px)] mx-auto">
            <TestimonialCard
              key={current.id}
              quote={current.quote}
              author={current.author}
              position={current.position}
              imageUrl={current.imageUrl}
            />
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-5">
            {testimonials.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${t.id}`}
                aria-pressed={idx === currentIndex}
                className={`w-[10px] h-[10px] rounded-full border transition-colors ${
                  idx === currentIndex ? 'bg-brand border-brand' : 'bg-transparent border-black'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
