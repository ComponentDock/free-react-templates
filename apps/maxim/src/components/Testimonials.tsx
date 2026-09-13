import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { TESTIMONIALS } from '../data'
import { cn } from '@free-react-templates/ui'

/* Testimonials — carousel showing one client testimonial at a time with
   prev/next navigation and dot indicators. */
export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const total = TESTIMONIALS.length

  function prev() {
    setCurrent((c) => (c - 1 + total) % total)
  }
  function next() {
    setCurrent((c) => (c + 1) % total)
  }

  const item = TESTIMONIALS[current]!

  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/maxim-testimonials/800/600"
              alt="Testimonials"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-brand">
              Testimonials
            </span>
            <h2 className="mt-2 text-3xl font-bold text-ink md:text-4xl">Our Testimonials</h2>
            <div className="mt-8">
              <Quote className="mb-4 h-8 w-8 text-brand/40" />
              <p className="text-lg leading-relaxed text-muted">{item.text}</p>
              <div className="mt-6 flex items-center gap-4">
                <img
                  src={item.photo}
                  alt={item.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-ink">{item.name}</p>
                  <p className="text-sm text-muted">{item.role}</p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <button
                type="button"
                aria-label="Previous testimonial"
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-edge text-muted transition-colors hover:border-brand hover:text-brand"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                aria-label="Next testimonial"
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-edge text-muted transition-colors hover:border-brand hover:text-brand"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <div className="ml-4 flex gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={String(i)}
                    type="button"
                    aria-label={`Go to testimonial ${i + 1}`}
                    onClick={() => setCurrent(i)}
                    className={cn(
                      'h-2.5 w-2.5 rounded-full transition-colors',
                      i === current ? 'bg-brand' : 'bg-edge',
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
