import { Reveal } from './Reveal'
import { StarRow } from './Hero'
import { reviews } from '../content'

/** Tailwind `gray-50`, one step cooler than the ink ground of the hero. */
export function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-4 inline-flex items-center rounded-full bg-primary-100 px-3 py-1 text-sm font-medium text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
            {reviews.badge}
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            {reviews.title}
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">{reviews.lede}</p>
        </Reveal>

        <div className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 lg:overflow-visible lg:pb-0">
          {reviews.items.map((review, index) => (
            <Reveal
              key={review.name}
              delay={100 + index * 50}
              className="w-full flex-none snap-center md:w-[calc(50%-0.75rem)] lg:w-auto lg:flex-1"
            >
              <figure className="h-full rounded-2xl bg-white p-8 shadow-soft dark:bg-gray-950">
                <StarRow tone="brand" size="h-5 w-5" />
                <blockquote className="mt-6 text-lg font-medium text-gray-900 dark:text-gray-100">
                  {review.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-lg font-semibold text-primary-600 dark:bg-primary-900/50 dark:text-primary-300">
                    {review.name.slice(0, 1)}
                  </span>
                  <span>
                    <span className="block font-semibold text-gray-900 dark:text-white">
                      {review.name}
                    </span>
                    <span className="block text-sm text-gray-600 dark:text-gray-400">
                      {review.city}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
