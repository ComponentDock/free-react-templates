import { useState, useEffect, useCallback } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TestimonialCard } from './TestimonialCard'

export interface Testimonial {
  name: string
  text: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Joshua Jones',
    text: 'Their attention to detail and commitment to quality exceeded our expectations. A truly professional team.',
  },
  {
    name: 'Kellie Kenney',
    text: 'Working with this team was an absolute pleasure. They delivered exactly what we needed, on time and on budget.',
  },
  {
    name: 'Will Reagan',
    text: 'The results speak for themselves. Our conversion rates improved dramatically after the redesign.',
  },
  {
    name: 'Alex Fought',
    text: 'Innovative solutions and exceptional support. They understood our vision and brought it to life perfectly.',
  },
  {
    name: 'Ben Stafford',
    text: 'A game-changer for our business. The attention to user experience made all the difference.',
  },
  {
    name: 'Devin Bridges',
    text: "Reliable, creative, and results-driven. We couldn't have asked for a better development partner.",
  },
]

function useItemsPerView() {
  const [itemsPerView, setItemsPerView] = useState(3)

  useEffect(() => {
    function update() {
      setItemsPerView(window.innerWidth >= 768 ? 3 : 1)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return itemsPerView
}

export interface TestimonialCarouselProps {
  initialItems?: Testimonial[]
}

export function TestimonialCarousel({ initialItems }: TestimonialCarouselProps) {
  const items = initialItems ?? testimonials
  const itemsPerView = useItemsPerView()
  const [currentIndex, setCurrentIndex] = useState(0)

  const total = items.length
  const maxIndex = Math.max(0, total - itemsPerView)

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  // Build the visible items, wrapping around the end of the array
  const visibleItems: Array<{ item: Testimonial; key: string }> = []
  for (let i = 0; i < itemsPerView && i < total; i++) {
    const idx = (currentIndex + i) % total
    const item = items[idx]!
    visibleItems.push({ item, key: `${item.name}-${idx}` })
  }

  return (
    <div>
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-300 ease-in-out">
          {visibleItems.map(({ item, key }) => (
            <div
              key={key}
              style={{ width: `${100 / itemsPerView}%` }}
              className="flex-shrink-0"
              data-testid="testimonial-card-wrapper"
            >
              <TestimonialCard name={item.name} text={item.text} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={goPrev}
          className="p-2 text-dark hover:text-muted transition-colors"
          aria-label="Previous testimonials"
          data-testid="prev-button"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={goNext}
          className="p-2 text-dark hover:text-muted transition-colors"
          aria-label="Next testimonials"
          data-testid="next-button"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}

export { testimonials }
