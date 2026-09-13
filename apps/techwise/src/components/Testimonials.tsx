import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Techwise transformed our digital presence completely. Their team delivered a stunning website that exceeded our expectations and drove real business results.',
    author: 'Roger Scott',
    role: 'Marketing Manager',
  },
  {
    quote:
      'Working with Techwise was an absolute pleasure. Their creative vision and technical expertise helped us launch our product ahead of schedule.',
    author: 'Michael Torres',
    role: 'CEO, StartupHub',
  },
  {
    quote:
      'The branding work Techwise did for us was phenomenal. They captured our vision perfectly and created an identity that truly represents who we are.',
    author: 'Jennifer Adams',
    role: 'Director of Marketing',
  },
] as const

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const testimonial = testimonials[current]!

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section className="bg-white py-20 transition-colors lg:py-[120px]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            Testimonials
          </span>
          <h2 className="mt-4 text-3xl font-bold text-dark-bg sm:text-4xl">
            What Are Clients Says
          </h2>
        </div>

        <div className="mt-14 text-center">
          <div className="mb-6 flex justify-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-5 w-5 fill-brand text-brand" aria-hidden="true" />
            ))}
          </div>

          <blockquote className="text-lg leading-relaxed text-mist">
            &ldquo;{testimonial.quote}&rdquo;
          </blockquote>

          <div className="mt-8">
            <p className="text-sm font-bold text-dark-bg">{testimonial.author}</p>
            <p className="mt-1 text-xs uppercase tracking-wider text-brand">{testimonial.role}</p>
          </div>

          <div className="mt-8 flex justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded border border-gray-200 text-mist transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded border border-gray-200 text-mist transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
