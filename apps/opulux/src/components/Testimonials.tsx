import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    text: 'An absolutely wonderful experience. The staff went above and beyond to make our anniversary special.',
    name: 'Sarah Johnson',
    role: 'Guest, Suite Room',
  },
  {
    text: 'The spa and dining were world-class. We felt truly pampered from start to finish.',
    name: 'Michael Chen',
    role: 'Guest, Luxury Room',
  },
  {
    text: 'Perfect location, beautiful rooms, and impeccable service. We will definitely be back.',
    name: 'Emily Rodriguez',
    role: 'Guest, Deluxe Room',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1))

  const t = TESTIMONIALS[current]!

  return (
    <section className="bg-light-bg py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Quote className="mx-auto mb-6 h-10 w-10 text-gold/40" />

        <p className="mb-6 text-lg leading-relaxed text-gray-600 italic">&ldquo;{t.text}&rdquo;</p>
        <p className="font-heading text-lg font-bold">{t.name}</p>
        <p className="text-sm text-gray-400">{t.role}</p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-colors hover:border-gold hover:text-gold"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${i === current ? 'bg-gold' : 'bg-gray-300'}`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-colors hover:border-gold hover:text-gold"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
