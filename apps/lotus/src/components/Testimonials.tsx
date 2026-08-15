import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../data'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const goTo = (next: number) => setIndex((next + testimonials.length) % testimonials.length)
  const active = testimonials[index]!

  return (
    <section id="testimonials" aria-label="Testimonials" className="bg-white py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-3xl font-medium text-ink md:text-4xl">Testimonial</h2>
        <div className="mt-12">
          <blockquote key={active.name} className="text-xl leading-relaxed text-muted md:text-2xl">
            “{active.quote}”
          </blockquote>
          <p className="mt-8 font-semibold text-ink">{active.name}</p>
          <p className="mt-1 text-sm uppercase tracking-widest text-brand-dark">{active.role}</p>
        </div>
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => goTo(index - 1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-ink transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          {testimonials.map((item, i) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === index}
              onClick={() => goTo(i)}
              className={`h-2.5 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                i === index ? 'w-8 bg-brand' : 'w-2.5 bg-gray-300 hover:bg-brand'
              }`}
            />
          ))}
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => goTo(index + 1)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 text-ink transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
