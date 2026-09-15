import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Cody Hines',
    text: 'Accessories here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.',
    rating: 3,
  },
  {
    name: 'Chad Herrera',
    text: 'Accessories here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.',
    rating: 2,
  },
  {
    name: 'Andre Gonzalez',
    text: 'Accessories here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.',
    rating: 2,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < count ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
        />
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section id="reviews" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gray-900">
            Some Features That Made Us Unique
          </h2>
          <p className="text-gray-500">Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-lg bg-white p-6 shadow-sm">
              <h4 className="mb-2 font-semibold text-gray-900">{r.name}</h4>
              <p className="mb-4 text-sm text-gray-500">{r.text}</p>
              <StarRating count={r.rating} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
