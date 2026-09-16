import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../data'

export function Testimony() {
  const [active, setActive] = useState(0)
  const total = testimonials.length

  const prev = () => setActive((i) => (i - 1 + total) % total)
  const next = () => setActive((i) => (i + 1) % total)

  const current = testimonials[active]!

  return (
    <section className="bg-brand-dark py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-12 text-3xl font-bold text-white">Testimonials</h2>
        <div className="relative">
          <img
            src={current.avatar}
            alt={current.name}
            className="mx-auto mb-6 h-20 w-20 rounded-full object-cover"
          />
          <p className="mb-2 font-medium text-white">{current.name}</p>
          <p className="mb-4 text-sm text-gray-400">{current.role}</p>
          <blockquote className="mb-8 text-lg italic text-gray-300">
            &ldquo;{current.quote}&rdquo;
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="rounded-full p-2 text-white transition-colors hover:bg-white/10"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-3 w-3 rounded-full transition-colors ${
                    i === active ? 'bg-brand' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="rounded-full p-2 text-white transition-colors hover:bg-white/10"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
