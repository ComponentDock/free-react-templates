import { useState, useCallback } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

interface Testimonial {
  quote: string
  name: string
  role: string
  photo: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Glint transformed my smile completely. The staff is incredibly professional and caring. I couldn't be happier with the results!",
    name: 'Sarah Johnson',
    role: 'Patient',
    photo: 'https://picsum.photos/seed/glint-testimonial1/100/100',
  },
  {
    quote:
      "The best dental experience I've ever had. From the warm welcome to the expert treatment, everything was perfect.",
    name: 'Michael Chen',
    role: 'Patient',
    photo: 'https://picsum.photos/seed/glint-testimonial2/100/100',
  },
  {
    quote:
      'I was terrified of dentists until I visited Glint. They made me feel comfortable and the procedure was painless.',
    name: 'Emily Rodriguez',
    role: 'Patient',
    photo: 'https://picsum.photos/seed/glint-testimonial3/100/100',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- array is non-empty
  const t = testimonials[current]!

  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="mb-12 font-display text-3xl font-bold text-ink">Testimonials</h2>

        <div className="relative">
          <Quote
            className="mx-auto mb-6 h-10 w-10 text-primary-400 opacity-40"
            aria-hidden="true"
          />
          <p className="mb-8 text-lg leading-relaxed text-smoke italic">&ldquo;{t.quote}&rdquo;</p>

          <div className="flex items-center justify-center gap-4">
            <img src={t.photo} alt={t.name} className="h-14 w-14 rounded-full object-cover" />
            <div className="text-left">
              <p className="font-semibold text-ink">{t.name}</p>
              <p className="text-sm text-smoke">{t.role}</p>
            </div>
          </div>

          {/* Arrows */}
          <button
            type="button"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-sm transition-colors hover:bg-gray-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-ink" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-sm transition-colors hover:bg-gray-100"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-ink" />
          </button>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrent(i)}
              className={`h-3 w-3 rounded-full transition-colors ${
                i === current ? 'bg-primary-400' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
