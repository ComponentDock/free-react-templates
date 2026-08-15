import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '../data'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]!

  const previous = () => {
    setIndex((value) => (value === 0 ? testimonials.length - 1 : value - 1))
  }

  const next = () => {
    setIndex((value) => (value === testimonials.length - 1 ? 0 : value + 1))
  }

  return (
    <section className="relative overflow-hidden bg-ink py-[120px]" aria-label="Testimonials">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <Quote aria-hidden="true" className="mx-auto h-10 w-10 text-brand" />
        <blockquote className="mt-8 text-xl font-light leading-8 text-white">
          {current.quote}
        </blockquote>
        <p className="mt-8 text-lg font-medium text-white">{current.name}</p>
        <p className="mt-1 text-sm text-white/60">{current.role}</p>

        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous testimonial"
            onClick={previous}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next testimonial"
            onClick={next}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:border-brand hover:text-brand"
          >
            <ChevronRight aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
