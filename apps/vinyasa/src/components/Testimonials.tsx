import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../data'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const goTo = (next: number) => setIndex((next + testimonials.length) % testimonials.length)
  const active = testimonials[index]!

  return (
    <section id="testimonials" aria-label="Client feedback" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-thin text-ink md:text-5xl">Client's Feedback</h1>
        </div>
        <div className="mt-14 bg-mist p-10 text-center">
          <img
            src={active.avatar}
            alt={active.name}
            loading="lazy"
            className="mx-auto h-24 w-24 rounded-full object-cover"
          />
          <blockquote className="mt-6 text-lg leading-relaxed text-muted">
            “{active.quote}”
          </blockquote>
          <p className="mt-6 font-medium text-ink">{active.name}</p>
          <p className="mt-1 text-sm text-muted">{active.role}</p>
        </div>
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={() => goTo(index - 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-ink transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
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
                i === index ? 'w-8 bg-brand' : 'w-2.5 bg-black/20 hover:bg-brand'
              }`}
            />
          ))}
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={() => goTo(index + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-ink transition-colors hover:border-brand hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
