import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS, TESTIMONIAL_HEADING } from '../data'

/**
 * Testimonials — gold-overlay background section with a white
 * "Testimonial" heading and a carousel of four quotes (white Georgia
 * italic blockquote, circular avatar, white name) with prev/next.
 */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const testimonial = TESTIMONIALS[index]!

  const prev = () => {
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  }
  const next = () => {
    setIndex((i) => (i + 1) % TESTIMONIALS.length)
  }

  return (
    <section
      id="testimonials-section"
      aria-label="Testimonials"
      className="relative bg-cover bg-fixed bg-center"
      style={{
        backgroundImage: "url('https://picsum.photos/seed/benevol-testimonials-bg/1600/900')",
      }}
    >
      <div className="absolute inset-0 bg-gold/95" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 py-20 text-center md:py-24">
        <h2 className="font-display text-4xl uppercase tracking-[0.1rem] text-white md:text-6xl">
          {TESTIMONIAL_HEADING}
        </h2>

        <div key={index} className="mt-10 px-2">
          <blockquote className="rounded bg-white/10 px-8 py-8 font-serif text-lg italic text-white">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>
          <figure className="mt-6">
            <img
              src={testimonial.image}
              alt={`Portrait of ${testimonial.name}`}
              className="mx-auto h-[100px] w-[100px] rounded-full object-cover"
            />
            <figcaption className="mt-3 font-display text-xl uppercase tracking-[0.1rem] text-white">
              {testimonial.name}
            </figcaption>
          </figure>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="rounded-full border-2 border-white/50 p-2 text-white transition-colors hover:border-white hover:bg-white hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronLeft className="h-6 w-6" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="rounded-full border-2 border-white/50 p-2 text-white transition-colors hover:border-white hover:bg-white hover:text-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronRight className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
