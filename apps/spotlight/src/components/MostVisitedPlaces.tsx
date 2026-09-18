import { Heart } from 'lucide-react'

const listings = [
  {
    image: 'https://picsum.photos/seed/spotlight-listing-1/600/400',
    category: 'Stores',
    title: 'Westside Market',
    address: 'West Orange, New York',
  },
  {
    image: 'https://picsum.photos/seed/spotlight-listing-2/600/400',
    category: 'Restaurants',
    title: 'Blue Harbor Bistro',
    address: 'Brooklyn, New York',
  },
  {
    image: 'https://picsum.photos/seed/spotlight-listing-3/600/400',
    category: 'Events',
    title: 'Sunset Music Fest',
    address: 'Manhattan, New York',
  },
]

export function MostVisitedPlaces() {
  return (
    <section id="listings" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-light text-primary">Most Visited Places</h2>
          <p className="text-body">Discover trending spots near you</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {listings.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <button
                  type="button"
                  className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-body transition-colors hover:text-red-500"
                  aria-label={`Bookmark ${item.title}`}
                >
                  <Heart className="h-4 w-4" />
                </button>
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="mb-2 inline-block rounded bg-primary px-3 py-1 text-xs font-semibold text-white">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <span className="text-sm text-white/80">{item.address}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
