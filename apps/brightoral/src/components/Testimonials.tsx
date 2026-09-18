import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const REVIEWS = [
  {
    name: 'David Brown',
    text: 'The staff was incredibly friendly and professional. My dental anxiety is gone thanks to Brightoral!',
    rating: 5,
  },
  {
    name: 'Lisa Martinez',
    text: 'Outstanding service and state-of-the-art equipment. Highly recommend for families.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    text: 'Quick, painless, and thorough. The best dental clinic I have ever visited.',
    rating: 4,
  },
  {
    name: 'Rachel Kim',
    text: 'They explained every procedure clearly and made sure I was comfortable. Will return!',
    rating: 5,
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((c) => (c + 1) % REVIEWS.length)
  const prev = () => setCurrent((c) => (c - 1 + REVIEWS.length) % REVIEWS.length)

  const review = REVIEWS[current]!

  return (
    <section id="testimonial" className="bg-white py-16">
      <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
        <h2 className="mb-12 text-2xl font-light uppercase tracking-wider text-ink">
          People <span className="font-bold">Says</span>
        </h2>
        <div className="relative">
          <div className="rounded-lg bg-paper p-8">
            <div className="mb-4 flex justify-center gap-1">
              {Array.from({ length: review.rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-brand text-brand" />
              ))}
            </div>
            <p className="mb-6 text-base leading-relaxed text-mist">&ldquo;{review.text}&rdquo;</p>
            <p className="text-sm font-bold text-ink">{review.name}</p>
          </div>
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 p-2 text-mist transition-colors hover:text-brand"
            aria-label="Previous review"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 translate-x-full -translate-y-1/2 p-2 text-mist transition-colors hover:text-brand"
            aria-label="Next review"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === current ? 'bg-brand' : 'bg-gray-300'
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
