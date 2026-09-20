import { useState } from 'react'
import { cn } from '@free-react-templates/ui'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote:
      'An outstanding conference that brought together the brightest minds in business. Truly inspiring!',
    name: 'Alice Morgan',
    role: 'CEO, TechCorp',
    imageSeed: 'tribune-testimonial-1',
  },
  {
    quote:
      'The networking opportunities were invaluable. I made connections that will last a lifetime.',
    name: 'Robert Chen',
    role: 'Director, Innovation Lab',
    imageSeed: 'tribune-testimonial-2',
  },
  {
    quote:
      'Well-organized, insightful speakers, and a fantastic venue. Highly recommended for any business leader.',
    name: 'Sarah Williams',
    role: 'VP Marketing, GlobalBrand',
    imageSeed: 'tribune-testimonial-3',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]!

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">Happy Clients</h2>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 flex justify-center">
            <img
              src={`https://picsum.photos/seed/${t.imageSeed}/80/80`}
              alt={t.name}
              className="h-16 w-16 rounded-full object-cover"
            />
          </div>
          <blockquote className="mb-4 text-lg italic text-muted">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <p className="font-bold text-gray-900">{t.name}</p>
          <p className="text-sm text-muted">{t.role}</p>
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="rounded-full border border-border p-2 text-muted hover:bg-light-bg transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={cn(
                    'h-2.5 w-2.5 rounded-full transition-colors',
                    i === current ? 'bg-primary' : 'bg-border',
                  )}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="rounded-full border border-border p-2 text-muted hover:bg-light-bg transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
