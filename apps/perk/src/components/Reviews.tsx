import { Star } from 'lucide-react'

const reviewers = [
  {
    name: 'Florence Holmes',
    rating: 3,
    text: 'Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.',
    avatar: 'https://picsum.photos/seed/perk-r1/80/80',
  },
  {
    name: 'Elmer Luna',
    rating: 2,
    text: 'Accessories Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker. Here you can find the best computer accessory for your laptop, monitor, printer, scanner, speaker.',
    avatar: 'https://picsum.photos/seed/perk-r2/80/80',
  },
]

const stats = [
  { value: '2536', label: 'Happy Client' },
  { value: '7562', label: 'Total Projects' },
  { value: '2013', label: 'Cups Coffee' },
  { value: '10536', label: 'Total Submitted' },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'fill-brand text-brand' : 'text-gray-300'}
        />
      ))}
    </div>
  )
}

export function Reviews() {
  return (
    <section id="review" className="bg-paper py-20">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-semibold text-ink md:text-4xl">
            What kind of Coffee we serve for you
          </h2>
          <p className="text-mist">Who are in extremely love with eco friendly system.</p>
        </div>

        {/* Review cards */}
        <div className="mb-16 grid gap-8 md:grid-cols-2">
          {reviewers.map((reviewer) => (
            <div key={reviewer.name} className="flex gap-4">
              <img
                src={reviewer.avatar}
                alt={reviewer.name}
                className="h-16 w-16 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <div className="mb-2 flex items-center gap-3">
                  <h3 className="font-semibold text-ink">{reviewer.name}</h3>
                  <StarRating rating={reviewer.rating} />
                </div>
                <p className="text-sm leading-relaxed text-mist">{reviewer.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <h3 className="mb-1 text-3xl font-bold text-ink md:text-4xl">{stat.value}</h3>
              <p className="text-sm text-mist">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
