import { useState } from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const reviews = [
  {
    name: 'Mitchel Jeferson',
    role: 'CEO of softking',
    quote:
      'With efficiency to unlock more opportunities. Saw shall light, us their to place had creepeth day night great wher appear to.',
  },
  {
    name: 'Olivia Bennett',
    role: 'Product Lead, Northwind',
    quote:
      'Ecobit paid for itself in the first month. Our network grew faster and our team finally has one place to manage it all.',
  },
  {
    name: 'Daniel Reyes',
    role: 'Founder, Vantage',
    quote:
      'The cleanest onboarding we have ever shipped. Customers understand the value within minutes of signing up.',
  },
] as const

export function Reviews() {
  const [index, setIndex] = useState(0)
  const count = reviews.length

  return (
    <section id="reviews" aria-label="Reviews" className="bg-white py-16 sm:py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Quote className="mx-auto h-10 w-10 text-primary-600" aria-hidden="true" />

        <div className="mt-8 min-h-44">
          {reviews.map((review, i) =>
            i === index ? (
              <figure key={review.name} aria-label={review.name}>
                <blockquote className="text-xl italic leading-relaxed text-gray-700 dark:text-gray-200 sm:text-2xl">
                  {review.quote}
                </blockquote>
                <figcaption className="mt-6">
                  <span className="font-semibold text-ink dark:text-white">{review.name}</span>
                  <span className="text-gray-500 dark:text-gray-400"> — {review.role}</span>
                </figcaption>
              </figure>
            ) : null,
          )}
        </div>

        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            type="button"
            onClick={() => setIndex((i) => (i - 1 + count) % count)}
            aria-label="Previous review"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:bg-primary-600 hover:text-white dark:border-gray-700 dark:text-gray-300"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="flex gap-2">
            {reviews.map((review, i) => (
              <button
                key={review.name}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Go to review ${i + 1}`}
                aria-current={i === index ? 'true' : undefined}
                className={cn(
                  'h-2.5 w-2.5 rounded-full transition-colors',
                  i === index ? 'bg-primary-600' : 'bg-gray-300 hover:bg-gray-400 dark:bg-gray-700',
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIndex((i) => (i + 1) % count)}
            aria-label="Next review"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-colors hover:bg-primary-600 hover:text-white dark:border-gray-700 dark:text-gray-300"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  )
}
