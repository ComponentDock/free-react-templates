import { Heart } from 'lucide-react'

const DESTINATIONS = [
  {
    name: 'Ibiza',
    type: 'Party',
    price: 59,
    image: 'https://picsum.photos/seed/quest-ibiza/600/400',
  },
  {
    name: 'Paris',
    type: 'Luxury',
    price: 59,
    image: 'https://picsum.photos/seed/quest-paris-d/600/400',
  },
  {
    name: 'Lake Como',
    type: 'Spectacular',
    price: 59,
    image: 'https://picsum.photos/seed/quest-como/600/400',
  },
  {
    name: 'Greece',
    type: 'Sunny',
    price: 59,
    image: 'https://picsum.photos/seed/quest-greece/600/400',
  },
  {
    name: 'Norway',
    type: 'All Year Round',
    price: 59,
    image: 'https://picsum.photos/seed/quest-norway/600/400',
  },
] as const

export function FeaturedDestinations() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="w-12 h-0.5 bg-brand mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-text-primary">Featured destinations</h3>
          <p className="text-text-secondary text-sm mt-2">Editor&apos;s pick</p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x">
          {DESTINATIONS.map((dest) => (
            <div
              key={dest.name}
              className="min-w-[260px] flex-shrink-0 snap-start bg-white shadow-md overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-brand text-white text-xs font-bold px-3 py-1">
                  FROM ${dest.price}/night
                </span>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-text-primary">{dest.name}</h4>
                  <p className="text-text-secondary text-sm">{dest.type}</p>
                </div>
                <button
                  aria-label={`Save ${dest.name}`}
                  className="text-text-secondary hover:text-brand transition-colors"
                >
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
