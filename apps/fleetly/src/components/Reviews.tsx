import { Star } from 'lucide-react'
import { reviews } from '../data'

export function Reviews() {
  return (
    <section aria-label="Reviews" className="bg-bg-alt py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-center text-sm tracking-wider text-text-light uppercase">
          {reviews.heading}
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.items.map(({ name, text, rating }) => (
            <article key={name} className="rounded-[3px] bg-white p-8 shadow-sm">
              <h3 className="text-lg font-semibold text-text">{name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text-light">{text}</p>
              <div className="mt-4 flex gap-1" aria-label={`${rating} out of 5 stars`}>
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < rating ? 'fill-brand text-brand' : 'text-gray-300'}`}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
