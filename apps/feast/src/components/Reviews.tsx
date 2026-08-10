import { imgUrl, reviews } from '../data'
import { StarRating } from './StarRating'

export function Reviews() {
  return (
    <section id="reviews" className="bg-secondary py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-2">
        {reviews.map((review, i) => (
          <article key={review.name} className="flex overflow-hidden bg-white dark:bg-gray-900">
            <div className="relative shrink-0">
              <img
                src={imgUrl(review.seed, 166, 160)}
                alt=""
                className="h-[160px] w-[166px] object-cover"
              />
              <span className="absolute left-0 top-0 bg-primary px-3 py-2 text-xs font-medium text-white">
                {review.badge}
              </span>
            </div>
            <div className="p-6">
              <p className="text-xs font-medium text-primary">{review.dateLine}</p>
              <h3 className="mt-1 text-lg font-medium text-ink dark:text-white">{review.name}</h3>
              <StarRating className="mt-2" />
              <p className="mt-4 flex items-center gap-2 text-xs text-meta">
                <img
                  src={imgUrl(`feast-avatar-${i + 1}`, 32, 32)}
                  alt=""
                  className="h-8 w-8 rounded-full object-cover"
                />
                {review.author}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
