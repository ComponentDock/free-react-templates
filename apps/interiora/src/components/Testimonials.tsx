import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { TESTIMONIALS } from '../data'

/* Testimonials — client-side slider on the peach band showing one quote at
   a time with round prev/next arrows that wrap around. */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = TESTIMONIALS.length
  const slide = TESTIMONIALS[index]!

  const next = () => setIndex((value) => (value + 1) % count)
  const prev = () => setIndex((value) => (value - 1 + count) % count)

  return (
    <section aria-label="Testimonials" className="bg-peach py-24 lg:py-[120px]">
      <div className="mx-auto max-w-4xl px-6">
        <p className="mb-4 text-center text-sm font-medium uppercase tracking-[0.3em] text-brand">
          Client Love
        </p>
        <h2 className="text-center font-display text-[34px] font-medium leading-tight text-ink">
          Customer testimonial
        </h2>
        <div className="relative mt-14">
          <div className="bg-paper px-8 py-12 text-center shadow-md" aria-live="polite">
            <div className="mb-6 flex items-center justify-center gap-1" aria-label="Rating">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  aria-label="Star rating"
                  className="h-5 w-5 fill-harvest text-harvest"
                />
              ))}
            </div>
            <blockquote className="mx-auto max-w-2xl text-xl leading-relaxed text-body">
              {slide.quote}
            </blockquote>
            <p className="mt-6 font-display text-lg font-medium text-ink">{slide.author}</p>
          </div>
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={prev}
            className="absolute -left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-paper text-ink shadow-md transition-colors hover:bg-brand hover:text-white lg:-left-8"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="absolute -right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-paper text-ink shadow-md transition-colors hover:bg-brand hover:text-white lg:-right-8"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
