import { Star } from 'lucide-react'
import { reviews, reviewsFootnote } from '../data'

const STARS = [0, 1, 2, 3, 4]

/** Three review cards: a labelled five-star rating, the quote, an initial and a name · town. */
export function Reviews() {
  return (
    <section id="reviews" className="section-band scroll-mt-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700">
            Reviews
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-ink-800 sm:text-4xl">
            What people say afterwards
          </h2>
          <p className="mt-4 text-lg text-ink-500">{reviewsFootnote}</p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="rounded-2xl bg-white p-8 shadow-soft">
              <div className="mb-6 flex gap-1" role="img" aria-label="Rated 5 out of 5">
                {STARS.map((star) => (
                  <Star
                    key={star}
                    aria-hidden="true"
                    className="h-4 w-4 text-primary-400"
                    fill="currentColor"
                  />
                ))}
              </div>
              <blockquote className="text-lg font-medium text-ink-800">
                &ldquo;{review.quote}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-4">
                <div
                  aria-hidden="true"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-lg font-semibold text-primary-600"
                >
                  {review.initial}
                </div>
                <div>
                  <div className="font-semibold text-ink-800">{review.name}</div>
                  <div className="text-sm text-ink-500">{review.town}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
