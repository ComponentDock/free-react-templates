import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { testimonials } from '../data'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const slide = testimonials[index]!

  const next = () => setIndex((current) => (current + 1) % testimonials.length)
  const prev = () =>
    setIndex((current) => (current - 1 + testimonials.length) % testimonials.length)

  return (
    <section aria-label="Testimonials" className="py-32">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <Quote className="mx-auto h-12 w-12 text-brand" aria-hidden="true" />
        <h4 className="mt-6 font-sans text-[21px] font-bold text-ink">{slide.name}</h4>
        <div className="mt-3 flex justify-center gap-1" aria-label="Rating">
          {Array.from({ length: 5 }, (_, starIndex) => (
            <Star
              key={starIndex}
              className="h-5 w-5 text-star"
              fill="currentColor"
              role="img"
              aria-label="Star"
            />
          ))}
        </div>
        <p className="mx-auto mt-6 max-w-[570px] font-body text-[15px] leading-[1.7] text-body">
          {slide.quote}
        </p>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="text-ink transition-colors hover:text-brand"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <div className="flex items-center gap-2">
            {testimonials.map((item, dotIndex) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setIndex(dotIndex)}
                aria-label={`Go to slide ${dotIndex + 1}`}
                className={cn('h-1 w-10 rounded', dotIndex === index ? 'bg-brand' : 'bg-[#eeeeee]')}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="text-ink transition-colors hover:text-brand"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
        </div>
      </div>
    </section>
  )
}
