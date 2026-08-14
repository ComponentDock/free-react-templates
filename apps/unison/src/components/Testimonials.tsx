import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../data'
import { SectionTitle } from './SectionTitle'

/** Testimonial slider (`.slide-one-item` owl-carousel recreated with React
 *  state): one quote + author at a time with prev/next wrap-around. */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]!

  const previous = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)

  return (
    <section id="testimonials-section" className="py-[2.5em] md:py-[5em]">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <SectionTitle>Testimonials</SectionTitle>
        <blockquote className="mx-auto mt-10 max-w-2xl text-lg font-light leading-relaxed text-gray-600">
          “{current.quote}”
        </blockquote>
        <figure className="mt-8 flex items-center justify-center gap-4">
          <img
            src={current.photo}
            alt={`Portrait of ${current.name}`}
            className="h-16 w-16 rounded-full object-cover"
          />
          <figcaption className="text-left">
            <p className="font-bold text-heading">{current.name}</p>
            <p className="text-sm text-gray-500">Unison Client</p>
          </figcaption>
        </figure>

        <div className="mt-10 flex items-center justify-center gap-3">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={previous}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronRight aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
