import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const testimonials = [
  {
    name: 'Cloe Marena',
    role: 'Homeowner',
    quote:
      'Archcraft transformed our house into a dream home. Their attention to detail and creative vision exceeded our expectations.',
    image: 'https://picsum.photos/seed/testi1/200/200',
  },
  {
    name: 'Nathalie Channie',
    role: 'Business Owner',
    quote:
      'The team at Archcraft delivered a stunning office space that perfectly reflects our brand. Highly recommended!',
    image: 'https://picsum.photos/seed/testi2/200/200',
  },
  {
    name: 'Will Turner',
    role: 'Real Estate Developer',
    quote:
      'Professional, creative, and reliable. Archcraft has been our go-to firm for all architectural needs.',
    image: 'https://picsum.photos/seed/testi3/200/200',
  },
  {
    name: 'Nicolas Stainer',
    role: 'Interior Designer',
    quote:
      'Working with Archcraft is always a pleasure. Their designs are innovative and their execution is flawless.',
    image: 'https://picsum.photos/seed/testi4/200/200',
  },
] as const

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]!

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-1 text-center text-sm font-semibold uppercase tracking-wider text-brand">
          Happy Clients
        </p>
        <h2 className="mb-10 text-center text-3xl font-bold text-ink">Testimonials</h2>
        <div className="relative mx-auto max-w-2xl text-center">
          <Quote className="mx-auto mb-4 h-8 w-8 text-brand/30" aria-hidden="true" />
          <img
            src={t.image}
            alt={t.name}
            className="mx-auto mb-4 h-20 w-20 rounded-full object-cover"
          />
          <p className="mb-4 italic leading-relaxed text-mist-dark">&ldquo;{t.quote}&rdquo;</p>
          <h4 className="font-bold text-ink">{t.name}</h4>
          <p className="text-sm text-brand">{t.role}</p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={prev}
              className="rounded border border-line p-2 text-ink transition-colors hover:bg-paper"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setCurrent(i)}
                  className={cn(
                    'h-2 w-2 rounded-full transition-colors',
                    i === current ? 'bg-brand' : 'bg-line',
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={next}
              className="rounded border border-line p-2 text-ink transition-colors hover:bg-paper"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
