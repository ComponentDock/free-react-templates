import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import {
  nextTestimonialLabel,
  previousTestimonialLabel,
  testimonials,
  testimonialsSectionTitle,
} from '../data'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const active = testimonials[index]!

  const goTo = (next: number) => setIndex((next + testimonials.length) % testimonials.length)

  return (
    <section
      id="testimonials-section"
      className="relative px-6 py-24"
      aria-label={testimonialsSectionTitle}
    >
      <img
        src="https://picsum.photos/seed/peregrine-traveler/1600/800"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-panel/90" />
      <div className="relative mx-auto max-w-[1200px]">
        <div className="mb-12 text-center">
          <h2 className="text-[40px] font-bold text-white">{testimonialsSectionTitle}</h2>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <Quote className="mx-auto h-8 w-8 text-brand" aria-hidden="true" />
          <p className="mt-6 text-lg leading-[1.8] text-white">{active.quote}</p>
          <p className="mt-6 text-xl font-semibold text-white">{active.name}</p>
          <span className="mt-1 block text-base text-faint">{active.position}</span>
        </div>
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label={previousTestimonialLabel}
            onClick={() => goTo(index - 1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-brand hover:border-brand"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <span className="text-sm text-faint">
            {index + 1} / {testimonials.length}
          </span>
          <button
            type="button"
            aria-label={nextTestimonialLabel}
            onClick={() => goTo(index + 1)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-brand hover:border-brand"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
