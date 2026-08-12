import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

interface Testimonial {
  quote: string
  author: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Consilio reworked our go-to-market strategy in eight weeks. Revenue from the new segments grew 38% within the first two quarters.',
    author: 'Sarah Mitchell',
    role: 'CEO, Meridian Trust Bank',
  },
  {
    quote:
      'Their consultants rolled up their sleeves alongside our team. We finally have an operating model that scales without chaos.',
    author: 'David Chen',
    role: 'COO, Northgate Industries',
  },
  {
    quote:
      'The audit was rigorous and the follow-through even better. They found savings our own finance team had missed for years.',
    author: 'Elena Rodriguez',
    role: 'CFO, Carewell Health',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const current = testimonials[index]!

  const previous = () =>
    setIndex((value) => (value - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((value) => (value + 1) % testimonials.length)

  return (
    <section aria-labelledby="testimonials-heading" className="bg-navy-dark py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="mb-3 flex items-center justify-center gap-3 text-sm font-medium uppercase tracking-widest text-eyebrow">
          <span className="h-0.5 w-14 bg-eyebrow" aria-hidden="true" />
          Client Feedback
          <span className="h-0.5 w-14 bg-eyebrow" aria-hidden="true" />
        </p>
        <h2 id="testimonials-heading" className="mb-10 font-display text-3xl font-bold text-white">
          What Our Clients Say
        </h2>
        <Quote className="mx-auto mb-6 h-10 w-10 rotate-180 text-accent" aria-hidden="true" />
        <blockquote className="mb-8 text-lg leading-relaxed text-gray-200">
          {current.quote}
        </blockquote>
        <p className="font-display text-base font-bold text-white">{current.author}</p>
        <p className="mt-1 text-sm text-gray-400">{current.role}</p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <span className="text-sm text-gray-400" aria-live="polite">
            {index + 1} / {testimonials.length}
          </span>
          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
