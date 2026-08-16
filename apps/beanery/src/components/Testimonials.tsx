import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../data'

/* Testimonial carousel: quote icon, quote, founder portrait with a
   copper name and role, and circular prev/next arrow controls. */
export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const previous = () => {
    setCurrent((value) => (value - 1 + testimonials.length) % testimonials.length)
  }
  const next = () => {
    setCurrent((value) => (value + 1) % testimonials.length)
  }

  const testimonial = testimonials[current]!

  return (
    <section aria-label="Testimonials" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-4xl font-semibold text-navy lg:text-[44px]">
            Love from Customers
          </h2>
        </div>

        <div className="relative mx-auto mt-12 max-w-3xl px-10 text-center">
          <figure>
            <Quote className="mx-auto h-9 w-9 text-copper" aria-hidden="true" />
            <blockquote className="mt-6 text-xl font-light leading-relaxed">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-8">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="mx-auto h-14 w-14 rounded-full object-cover"
              />
              <span className="mt-3 block text-sm font-semibold text-copper">
                {testimonial.name}
              </span>
              <span className="mt-1 block text-sm font-medium text-[#74706B]">
                {testimonial.role}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={previous}
            className="absolute left-0 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-copper/40 text-copper transition-colors hover:bg-copper hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="absolute right-0 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-copper/40 text-copper transition-colors hover:bg-copper hover:text-white"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
