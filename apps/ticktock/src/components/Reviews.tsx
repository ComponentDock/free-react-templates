import { Star } from 'lucide-react'

interface ReviewProps {
  name: string
  text: string
  rating: number
}

function ReviewCard({ name, text, rating }: ReviewProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <h3 className="mb-2 text-lg font-semibold text-gray-900">{name}</h3>
      <p className="mb-3 text-sm text-gray-500">{text}</p>
      <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${
              i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

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
  {
    name: 'Jon Banks',
    text: 'Accessories here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.',
    rating: 3,
  },
  {
    name: 'Landon Houston',
    text: 'Accessories here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.',
    rating: 4,
  },
  {
    name: 'Nelle Wade',
    text: 'Accessories here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.',
    rating: 4,
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="bg-[#f9f9ff] py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gray-900">
            Some Features That Made Us Unique
          </h2>
          <p className="text-gray-500">Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </div>
      </div>
    </section>
  )
}
