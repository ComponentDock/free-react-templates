import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const reviews = [
  {
    text: 'Bitcoin is exciting because it shows how cheap it can be. Bitcoin is better than currency in that you don\u2019t have to be physically in the same place and, of course, for large transactions, currency can get pretty inconvenient.',
    author: 'Jackson Nash',
    avatar: 'https://picsum.photos/seed/coinly-avatar-1/120/120',
  },
  {
    text: 'The team behind this platform understands exactly what modern investors need: fast settlement, transparent fees and a wallet that just works.',
    author: 'Satoshi Nakamoto',
    avatar: 'https://picsum.photos/seed/coinly-avatar-2/120/120',
  },
  {
    text: 'Buying bitcoin has never felt this approachable. The guided setup and instant exchange make it perfect for both beginners and pros.',
    author: 'Melissa Barth',
    avatar: 'https://picsum.photos/seed/coinly-avatar-3/120/120',
  },
] as const

export function Review() {
  const [index, setIndex] = useState(0)
  const review = reviews[index]!

  const prev = () => setIndex((current) => (current - 1 + reviews.length) % reviews.length)
  const next = () => setIndex((current) => (current + 1) % reviews.length)

  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Quote className="mx-auto h-12 w-12 fill-accent text-accent" aria-hidden="true" />
        <blockquote>
          <p className="mt-6 font-display text-xl font-medium leading-relaxed text-brand md:text-2xl">
            &ldquo;{review.text}&rdquo;
          </p>
        </blockquote>
        <img
          src={review.avatar}
          alt={`Avatar of ${review.author}`}
          className="mx-auto mt-8 h-16 w-16 rounded-full object-cover"
        />
        <h4 className="mt-4 font-display text-xl font-medium text-brand">{review.author}</h4>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous review"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-muted text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next review"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-muted text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
