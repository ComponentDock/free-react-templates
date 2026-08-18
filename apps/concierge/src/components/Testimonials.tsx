import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../data'
import { pillOutline } from './buttonClasses'

const TOTAL = testimonials.length
const MAX_INDEX = TOTAL - 1

/**
 * Testimonials slider on the light background (reference: .sec-testimonial).
 * One white quote card per slide, centered Prev/Next pills below.
 */
export function Testimonials() {
  const [index, setIndex] = useState(0)

  const next = () => setIndex((i) => (i >= MAX_INDEX ? 0 : i + 1))
  const prev = () => setIndex((i) => (i <= 0 ? MAX_INDEX : i - 1))

  return (
    <section aria-label="Testimonials" className="bg-light-bg py-[7rem]">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <h2 className="font-heading text-2xl font-bold uppercase tracking-wide text-brand">
              Testimonials
            </h2>
          </div>
          <div className="lg:col-span-7">
            <div className="overflow-hidden">
              <div
                data-testimonial-track
                className="flex transition-transform duration-500"
                style={{
                  width: `${TOTAL * 100}%`,
                  transform: `translateX(${-(index / TOTAL) * 100}%)`,
                }}
              >
                {testimonials.map((testimonial) => (
                  <article
                    key={testimonial.name}
                    aria-label={`Testimonial: ${testimonial.name}`}
                    className="shrink-0 px-1"
                    style={{ width: `${100 / TOTAL}%` }}
                  >
                    <div className="relative bg-white p-10 shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
                      <span className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                        <Quote className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <p className="mb-5 text-[15px] leading-relaxed text-black/70">
                        {testimonial.quote}
                      </p>
                      <h3 className="text-base font-bold text-ink">{testimonial.name}</h3>
                      <p className="text-sm text-black/50">{testimonial.role}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="mt-8 flex justify-center gap-2">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={prev}
                className={pillOutline}
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={next}
                className={pillOutline}
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
