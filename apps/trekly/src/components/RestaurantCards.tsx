import { Star, Expand } from 'lucide-react'

const restaurants = [
  {
    image: 'https://picsum.photos/seed/trekly-resto-1/400/300',
    name: 'Resto Bar, Switzerland',
    location: 'Bern, Switzerland',
    menuPrice: '$4.00',
    reviews: 120,
  },
  {
    image: 'https://picsum.photos/seed/trekly-resto-2/400/300',
    name: 'Alpine Kitchen, Austria',
    location: 'Vienna, Austria',
    menuPrice: '$4.00',
    reviews: 120,
  },
  {
    image: 'https://picsum.photos/seed/trekly-resto-3/400/300',
    name: 'Coastal Bistro, Italy',
    location: 'Amalfi, Italy',
    menuPrice: '$4.00',
    reviews: 120,
  },
]

function StarRating() {
  return (
    <div className="flex items-center gap-0.5 text-ocean-500">
      {[1, 2, 3, 4, 5].map((s) => (
        <Star key={s} className="h-3.5 w-3.5 fill-current" />
      ))}
    </div>
  )
}

export function RestaurantCards() {
  return (
    <section id="restaurant" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-ocean-600">
            Restaurant
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">Near Restaurant</h2>
          <p className="mt-3 text-gray-500">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((resto) => (
            <div
              key={resto.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:shadow-md"
            >
              <div className="relative overflow-hidden">
                <img
                  src={resto.image}
                  alt={resto.name}
                  className="h-56 w-full object-cover transition group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-ocean-900/0 transition group-hover:bg-ocean-900/40">
                  <Expand className="h-8 w-8 text-white opacity-0 transition group-hover:opacity-100" />
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-gray-400">menu start at</span>
                  <span className="text-lg font-bold text-ocean-600">{resto.menuPrice}</span>
                </div>
                <span className="mt-1 block text-xs text-gray-400">{resto.location}</span>
                <h4 className="mt-1 text-base font-semibold text-gray-900">{resto.name}</h4>
                <div className="mt-3 flex items-center justify-between">
                  <StarRating />
                  <span className="text-xs text-gray-400">({resto.reviews})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
