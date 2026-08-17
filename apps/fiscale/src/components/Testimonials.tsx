import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TESTIMONIALS } from '../data'

/* Testimonials — client-side slider showing one quote card at a time with
   round white prev/next arrows (hover green) that wrap around. */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = TESTIMONIALS.length
  const slide = TESTIMONIALS[index]!

  const next = () => setIndex((value) => (value + 1) % count)
  const prev = () => setIndex((value) => (value - 1 + count) % count)

  return (
    <section aria-label="Testimonials" className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-display text-[34px] font-bold text-accent">Testimonials</h2>
          <p className="mt-3 leading-relaxed text-body">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>
        <div className="relative mx-auto max-w-3xl">
          <article className="rounded bg-white p-[30px] shadow-sm">
            <blockquote>
              <p className="leading-relaxed text-body">{slide.quote}</p>
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <img
                src={slide.image}
                alt={`${slide.author} avatar`}
                width={80}
                height={80}
                className="h-20 w-20 rounded-full"
              />
              <div>
                <strong className="block font-display font-bold text-ink">{slide.author}</strong>
                <span className="text-sm text-muted">{slide.role}</span>
              </div>
            </div>
          </article>
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={prev}
            className="absolute -left-6 top-1/2 flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-[0_15px_30px_0_rgba(0,0,0,0.1)] transition-colors hover:bg-brand hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="absolute -right-6 top-1/2 flex h-[50px] w-[50px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-ink shadow-[0_15px_30px_0_rgba(0,0,0,0.1)] transition-colors hover:bg-brand hover:text-white"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
