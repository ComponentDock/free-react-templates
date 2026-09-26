import { Star, StarHalf } from 'lucide-react'

const testimonials = [
  {
    text: 'As conscious traveling Paupers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face.',
    author: 'Fanny Spencer',
    rating: 4.5,
  },
  {
    text: 'As conscious traveling Paupers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face.',
    author: 'Fanny Spencer',
    rating: 4.5,
  },
  {
    text: 'As conscious traveling Paupers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face.',
    author: 'Fanny Spencer',
    rating: 4.5,
  },
]

function Stars({ rating }: { rating: number }) {
  const full = Math.floor(rating)
  const half = rating % 1 >= 0.5
  return (
    <div
      className="mt-3 flex items-center gap-1 text-periwinkle-400"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: full }).map((_, i) => (
        <Star key={`full-${i}`} className="h-4 w-4 fill-current" aria-hidden="true" />
      ))}
      {half && <StarHalf className="h-4 w-4 fill-current" aria-hidden="true" />}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold uppercase text-gray-900 font-[family-name:var(--font-heading)]">
            Testimonials
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-gray-500">
            If you are looking at blank cassettes on the web, you may be very confused at the
            difference in price. You may see some for as low as $.17 each.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-lg bg-white p-8 text-center shadow-sm">
              <p className="text-sm leading-relaxed text-gray-500">{t.text}</p>
              <h4 className="mt-4 text-sm font-bold text-gray-900">{t.author}</h4>
              <Stars rating={t.rating} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
