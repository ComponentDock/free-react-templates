import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

interface Testimonial {
  quote: string
  author: string
  role: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      'Absolutely amazing service! My car looks brand new after every visit. The attention to detail is incredible.',
    author: 'Sarah Johnson',
    role: 'Regular Customer',
    avatar: 'https://picsum.photos/seed/sudsy-avatar1/100/100',
  },
  {
    quote:
      'Best car wash in town, hands down. They treat your vehicle with care and the results speak for themselves.',
    author: 'Michael Chen',
    role: 'Business Owner',
    avatar: 'https://picsum.photos/seed/sudsy-avatar2/100/100',
  },
  {
    quote:
      'I have been bringing my cars here for over two years. Consistent quality, friendly staff, and great prices.',
    author: 'Emily Rodriguez',
    role: 'Long-time Client',
    avatar: 'https://picsum.photos/seed/sudsy-avatar3/100/100',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]!

  return (
    <section className="bg-paper py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <span className="text-sm font-bold uppercase tracking-[0.2em] text-accent">
          Testimonials
        </span>
        <h2 className="mt-3 font-heading text-3xl font-bold text-ink">What Our Customers Say</h2>

        <div className="relative mt-12">
          <Quote className="mx-auto h-10 w-10 text-brand/30" aria-hidden="true" />
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-mist">
            &ldquo;{t.quote}&rdquo;
          </p>

          <div className="mt-6 flex items-center justify-center gap-4">
            <img src={t.avatar} alt={t.author} className="h-12 w-12 rounded-full object-cover" />
            <div className="text-left">
              <p className="font-heading font-bold text-ink">{t.author}</p>
              <p className="text-sm text-mist">{t.role}</p>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-mist transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    i === current ? 'bg-brand' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-mist transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
