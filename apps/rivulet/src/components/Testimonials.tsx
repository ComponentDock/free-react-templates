import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { testimonials, testimonialsLabel } from '../data'

/** Testimonials slider: giant quote glyph, rotating quotes, dot pagination. */
export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const count = testimonials.length
  const active = testimonials[current]!

  const next = () => setCurrent((i) => (i + 1) % count)
  const prev = () => setCurrent((i) => (i - 1 + count) % count)

  return (
    <section
      aria-label={testimonialsLabel}
      className="relative overflow-hidden bg-white px-4 py-24 text-center"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-2 left-1/2 -translate-x-1/2 font-serif text-[270px] leading-none font-bold text-quote"
      >
        “
      </span>
      <div className="relative mx-auto max-w-4xl">
        <div role="group" aria-roledescription="carousel" aria-label="Testimonial quotes">
          <blockquote className="mx-auto max-w-3xl font-serif text-2xl leading-relaxed text-navy md:text-[36px] md:leading-[50px]">
            {active.quote}
          </blockquote>
          <p className="mt-10 font-sans text-xl font-bold uppercase tracking-wider text-navy">
            {active.author}
          </p>
        </div>

        <div className="mt-14 flex items-center justify-center gap-6">
          <button
            type="button"
            aria-label="Previous quote"
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:border-accent hover:text-accent"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <div className="flex items-center gap-3">
            {testimonials.map((t, i) => (
              <button
                key={t.author}
                type="button"
                aria-label={`Go to quote ${i + 1}`}
                aria-current={i === current}
                onClick={() => setCurrent(i)}
                className={cn(
                  'h-3 w-3 rounded-full transition-colors',
                  i === current ? 'bg-accent' : 'bg-navy/20 hover:bg-navy/40',
                )}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next quote"
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-navy/20 text-navy transition-colors hover:border-accent hover:text-accent"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
