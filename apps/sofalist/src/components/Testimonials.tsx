import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { TESTIMONIALS } from '../data'

/* Testimonials — client-side carousel on the light band showing one quote
   at a time with rounding prev/next arrows. */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = TESTIMONIALS.length
  const slide = TESTIMONIALS[index]!

  const next = () => setIndex((value) => (value + 1) % count)
  const prev = () => setIndex((value) => (value - 1 + count) % count)

  return (
    <section aria-label="Testimonials" className="bg-light py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <p className="text-sm uppercase tracking-[0.2em] text-muted">Testimonial</p>
          <h2 className="mt-2 font-display text-[38px] font-medium text-ink">Happy Customers</h2>
        </div>
        <div className="relative">
          <div className="rounded-lg bg-paper px-8 py-12 text-center shadow-md" aria-live="polite">
            <Quote className="mx-auto mb-6 h-10 w-10 text-steel" aria-hidden="true" />
            <blockquote className="mx-auto max-w-2xl text-xl leading-relaxed text-ink">
              “{slide.quote}”
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-3">
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-paleblue font-display text-lg font-semibold text-steel"
              >
                {slide.author.charAt(0)}
              </span>
              <div className="text-left">
                <p className="font-display text-lg font-medium text-ink">{slide.author}</p>
                <span className="text-sm text-muted">{slide.position}</span>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-1" aria-label="Rating">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber text-amber" aria-hidden="true" />
              ))}
            </div>
          </div>
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={prev}
            className="absolute -left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-paper text-ink shadow-md transition-colors hover:bg-steel hover:text-white lg:-left-8"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="absolute -right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-paper text-ink shadow-md transition-colors hover:bg-steel hover:text-white lg:-right-8"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
