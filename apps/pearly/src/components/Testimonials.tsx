import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../data'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const last = testimonials.length - 1

  return (
    <section className="mx-auto max-w-5xl px-4 py-[120px] sm:px-6 lg:px-8">
      <div className="relative">
        <div className="overflow-hidden">
          {testimonials.map((testimonial, i) => (
            <figure
              key={testimonial.name}
              aria-hidden={i === index ? undefined : 'true'}
              className={
                i === index
                  ? 'border border-navy px-8 py-10 text-center sm:px-16 sm:py-12'
                  : 'hidden'
              }
            >
              <Quote className="mx-auto mb-5 h-10 w-10 text-mint" aria-hidden="true" />
              <blockquote className="mx-auto max-w-2xl text-lg leading-relaxed text-body">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-6 text-base font-semibold text-navy">
                - {testimonial.name}
              </figcaption>
            </figure>
          ))}
        </div>
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => setIndex((current) => (current === 0 ? last : current - 1))}
          className="absolute left-0 top-1/2 -translate-y-1/2 border border-navy bg-white p-3 text-navy transition-colors hover:bg-mint hover:text-white"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => setIndex((current) => (current === last ? 0 : current + 1))}
          className="absolute right-0 top-1/2 -translate-y-1/2 border border-navy bg-white p-3 text-navy transition-colors hover:bg-mint hover:text-white"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  )
}
