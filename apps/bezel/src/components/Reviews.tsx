import { Star } from 'lucide-react'
import { reviews } from '../data'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? 'fill-brand text-brand' : 'text-gray-300'}`}
          aria-hidden="true"
        />
      ))}
      <span className="sr-only">{rating} out of 5 stars</span>
    </div>
  )
}

export function Reviews() {
  return (
    <section id="reviews" className="py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-body">What Our Customers Say</h2>
          <p className="text-muted">Trusted by thousands of happy customers</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="rounded-xl bg-white p-6 shadow-sm">
              <h3 className="mb-2 text-lg font-semibold text-body">{review.name}</h3>
              <p className="mb-4 text-sm text-muted">{review.text}</p>
              <StarRating rating={review.rating} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
