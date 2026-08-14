import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonialBackdrop, testimonials } from '../data'

/** Background-image testimonials strip with a two-quote carousel
 *  (quotation, author, role) and prev/next controls. */
export function Testimonials() {
  const [active, setActive] = useState(0)
  const testimonial = testimonials[active]!

  const next = () => setActive((current) => (current + 1) % testimonials.length)
  const prev = () =>
    setActive((current) => (current - 1 + testimonials.length) % testimonials.length)

  return (
    <section
      id="testimonials"
      aria-label="Testimonials"
      className="relative py-24"
      style={{ backgroundImage: `url(${testimonialBackdrop})` }}
    >
      <div className="absolute inset-0 bg-branddark/90" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4 text-center text-white">
        <Quote aria-hidden="true" className="mx-auto h-10 w-10 text-cyan" />
        <h2 className="mt-4 font-display text-3xl font-bold">What Our Students Say</h2>

        <blockquote className="mt-8">
          <p className="text-xl leading-relaxed text-white/90">“{testimonial.quote}”</p>
          <div className="mt-6">
            <cite className="not-italic">
              <span className="block font-display text-lg font-semibold">{testimonial.author}</span>
              <span className="mt-1 block text-sm uppercase tracking-wider text-cyan">
                {testimonial.role}
              </span>
            </cite>
          </div>
        </blockquote>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand"
          >
            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
          </button>
          <span className="text-sm tracking-widest text-white/70">
            {active + 1} / {testimonials.length}
          </span>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-brand"
          >
            <ChevronRight aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
