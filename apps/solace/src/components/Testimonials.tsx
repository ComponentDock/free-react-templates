import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'John Smith',
    role: 'Business Traveler',
    text: 'Absolutely stunning hotel! The rooms are luxurious and the staff is incredibly attentive. Best stay I have ever experienced.',
    rating: 5,
    image: 'https://picsum.photos/seed/solace-guest1/100/100',
  },
  {
    name: 'Sarah Johnson',
    role: 'Family Vacation',
    text: 'We had a wonderful family holiday here. The kids loved the pool and the restaurant served amazing food. Will definitely return!',
    rating: 5,
    image: 'https://picsum.photos/seed/solace-guest2/100/100',
  },
  {
    name: 'Michael Brown',
    role: 'Honeymoon',
    text: 'Perfect romantic getaway. The suite room with ocean view was breathtaking. The spa treatments were heavenly.',
    rating: 5,
    image: 'https://picsum.photos/seed/solace-guest3/100/100',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]!

  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand">
          Testimonials
        </p>
        <h2 className="font-heading text-3xl font-bold text-ink md:text-4xl">Happy Guests</h2>

        <div className="mt-12 rounded-lg bg-white p-8 shadow-sm">
          <img
            src={t.image}
            alt={t.name}
            className="mx-auto h-16 w-16 rounded-full object-cover"
            loading="lazy"
          />
          <p className="mt-6 leading-relaxed text-muted italic">"{t.text}"</p>
          <div className="mt-4 flex items-center justify-center gap-1 text-brand">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} size={14} className="fill-brand" />
            ))}
          </div>
          <p className="mt-3 font-heading text-lg font-bold text-ink">{t.name}</p>
          <p className="text-sm text-muted">{t.role}</p>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-ink transition-colors hover:bg-brand hover:text-white"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-ink transition-colors hover:bg-brand hover:text-white"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
