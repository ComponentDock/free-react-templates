import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { TESTIMONIALS } from '../data'

/** Testimonials — light section, heading column left, centered carousel of
    white quote cards (floating quote icon) with Prev/Next pills below. */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const count = TESTIMONIALS.length

  const next = () => setIndex((i) => (i + 1) % count)
  const prev = () => setIndex((i) => (i + count - 1) % count)

  return (
    <section id="testimonials" className="bg-light" aria-label="Testimonials">
      <div className="mx-auto max-w-7xl px-4 py-28">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <h2 className="font-display text-2xl font-bold uppercase text-brand">Testimonials</h2>
          </div>
          <div className="lg:col-span-7">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {TESTIMONIALS.map((testimonial, i) => (
                  <figure
                    key={testimonial.name}
                    aria-hidden={i === index ? undefined : 'true'}
                    className="w-full shrink-0 px-2"
                  >
                    <div className="relative bg-white p-10 shadow-[0_10px_20px_rgba(0,0,0,0.05)]">
                      <span className="absolute -top-5 left-8 flex h-10 w-10 items-center justify-center rounded-full bg-white text-brand shadow-[0_10px_20px_rgba(0,0,0,0.2)]">
                        <Quote className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <blockquote className="text-lg leading-relaxed text-black/70">
                        “{testimonial.quote}”
                      </blockquote>
                      <figcaption className="mt-6">
                        <h3 className="font-bold text-ink">{testimonial.name}</h3>
                        <p className="mt-0.5 text-sm text-black/50">{testimonial.role}</p>
                      </figcaption>
                    </div>
                  </figure>
                ))}
              </div>
            </div>
            <div className="mt-8 flex justify-center gap-2">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={prev}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 transition-colors hover:border-black"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={next}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 transition-colors hover:border-black"
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
