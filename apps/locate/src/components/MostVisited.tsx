import { Heart } from 'lucide-react'

interface Listing {
  image: string
  category: string
  name: string
  address: string
}

const listings: Listing[] = [
  {
    image: 'locate-listing-1',
    category: 'Hotels',
    name: 'Luxe Hotel',
    address: 'West Orange, New York',
  },
  {
    image: 'locate-listing-2',
    category: 'Restaurants',
    name: 'Grill & Dining',
    address: 'Brooklyn, New York',
  },
  {
    image: 'locate-listing-3',
    category: 'Events',
    name: 'Live Band',
    address: 'West Orange, New York',
  },
  {
    image: 'locate-listing-4',
    category: 'Food & Drink',
    name: 'Gourmet Coffees',
    address: 'New York City',
  },
  { image: 'locate-listing-5', category: 'Spa', name: 'La Italia Spa', address: 'Italy' },
  {
    image: 'locate-listing-6',
    category: 'Shopping',
    name: 'Super Market Mall',
    address: 'West Orange, New York',
  },
]

export function MostVisited() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-light text-primary-500">Most Visited Places</h2>
          <p className="mx-auto max-w-lg text-gray-500">
            Discover popular spots around you. From luxury hotels to local favorites, explore the
            best places in your area.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((item) => (
            <div key={item.name} className="group relative overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${item.image}/600/400`}
                alt={item.name}
                className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-4">
                <button
                  className="absolute right-3 top-3 rounded-full bg-white/80 p-2 text-gray-500 transition-colors hover:text-red-500"
                  aria-label={`Bookmark ${item.name}`}
                >
                  <Heart size={16} />
                </button>
                <span className="mb-2 inline-block w-fit rounded bg-primary-500 px-3 py-0.5 text-xs font-semibold text-white">
                  {item.category}
                </span>
                <h3 className="mb-1 text-lg font-semibold text-white">{item.name}</h3>
                <span className="text-sm text-gray-200">{item.address}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
