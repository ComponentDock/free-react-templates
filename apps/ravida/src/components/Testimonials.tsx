import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

interface Review {
  name: string
  quote: string
  image: string
}

const REVIEWS: Review[] = [
  {
    name: 'Mosan Cameron',
    quote:
      'Good lights it very to above. Days image to sea over there seasons and spirit beast in greater bearing tool creepeth very behold.',
    image: 'https://picsum.photos/seed/ravida-client-1/80/80',
  },
  {
    name: 'Sarah Mitchell',
    quote:
      'Absolutely wonderful dining experience. The atmosphere and food were both exceptional. Highly recommend to anyone looking for fine dining.',
    image: 'https://picsum.photos/seed/ravida-client-2/80/80',
  },
  {
    name: 'David Parker',
    quote:
      'From start to finish, everything was perfect. The staff were attentive and the menu selections were outstanding. Will return again.',
    image: 'https://picsum.photos/seed/ravida-client-3/80/80',
  },
]

function Stars() {
  return (
    <div className="flex justify-center gap-1 text-brand">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={14} fill="currentColor" />
      ))}
    </div>
  )
}

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const total = REVIEWS.length

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  const review = REVIEWS[current] as Review

  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">
            Testimonials
          </p>
          <h2 className="font-display text-4xl font-bold text-ink">What they said</h2>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-6 text-lg leading-relaxed text-mist">&ldquo;{review.quote}&rdquo;</p>
          <img
            src={review.image}
            alt={review.name}
            className="mx-auto mb-4 h-16 w-16 rounded-full object-cover"
            loading="lazy"
          />
          <h4 className="mb-2 text-sm font-bold text-ink">{review.name}</h4>
          <Stars />
          <div className="mt-8 flex justify-center gap-4">
            <button
              type="button"
              aria-label="Previous review"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-mist transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Next review"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-mist transition-colors hover:border-brand hover:text-brand"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
