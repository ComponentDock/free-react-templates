import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../data'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const slide = testimonials.slides[index]!

  function goTo(next: number) {
    setIndex((next + testimonials.slides.length) % testimonials.slides.length)
  }

  return (
    <section className="bg-mist py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          {testimonials.kicker}
        </span>
        <h2 className="mt-2 text-4xl font-medium text-ink md:text-5xl">{testimonials.heading}</h2>
        <figure className="mt-12">
          <blockquote className="text-lg leading-relaxed text-gray-600">{slide.quote}</blockquote>
          <figcaption className="mt-8 flex flex-col items-center">
            <img
              src={`https://picsum.photos/seed/mortar-client-${index + 1}/96/96`}
              alt={slide.name}
              className="h-16 w-16 rounded-full object-cover"
              loading="lazy"
            />
            <span className="mt-3 font-semibold text-charcoal">{slide.name}</span>
            <span className="mt-1 text-sm text-gray-500">{testimonials.role}</span>
          </figcaption>
        </figure>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => goTo(index - 1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-charcoal transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => goTo(index + 1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-charcoal transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
