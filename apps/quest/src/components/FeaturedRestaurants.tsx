import { Heart, MapPin } from 'lucide-react'

const RESTAURANTS = [
  {
    name: "Martha's Bar",
    location: 'Manhattan',
    rating: 8.5,
    image: 'https://picsum.photos/seed/quest-martha/600/400',
  },
  {
    name: 'Delux Restaurant',
    location: 'Paris',
    rating: 9.5,
    image: 'https://picsum.photos/seed/quest-delux/600/400',
  },
  {
    name: "Jim's Corner Pub",
    location: 'Madrid',
    rating: 8.2,
    image: 'https://picsum.photos/seed/quest-jims/600/400',
  },
  {
    name: 'Tower Risto Bar',
    location: 'Sydney',
    rating: 8.7,
    image: 'https://picsum.photos/seed/quest-tower/600/400',
  },
  {
    name: 'Pizzeria Venezia',
    location: 'Hong Kong',
    rating: 9.8,
    image: 'https://picsum.photos/seed/quest-pizza/600/400',
  },
] as const

export function FeaturedRestaurants() {
  return (
    <section className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="w-12 h-0.5 bg-brand mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-text-primary">Featured Restaurants</h3>
          <p className="text-text-secondary text-sm mt-2">Editor&apos;s pick</p>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 snap-x">
          {RESTAURANTS.map((r) => (
            <div
              key={r.name}
              className="min-w-[260px] flex-shrink-0 snap-start bg-white shadow-md overflow-hidden group"
            >
              <div className="relative">
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="bg-brand text-white text-xs font-bold px-3 py-1 rounded-full">
                    {r.rating}
                  </span>
                  <span className="bg-white/90 text-brand text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    Map
                  </span>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-text-primary">{r.name}</h4>
                  <p className="text-text-secondary text-sm">{r.location}</p>
                </div>
                <button
                  aria-label={`Save ${r.name}`}
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
