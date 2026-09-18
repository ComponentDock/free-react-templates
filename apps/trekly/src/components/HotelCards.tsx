import { Star } from 'lucide-react'

const hotels = [
  {
    image: 'https://picsum.photos/seed/trekly-hotel-1/400/300',
    price: '$400',
    name: 'Luxury Resort & Spa',
    location: 'Bali, Indonesia',
  },
  {
    image: 'https://picsum.photos/seed/trekly-hotel-2/400/300',
    price: '$400',
    name: 'Mountain View Lodge',
    location: 'Swiss Alps',
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

export function HotelCards() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-ocean-600">
            Accommodation
          </span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">Find Nearest Hotel</h2>
          <p className="mt-3 text-gray-500">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {hotels.map((hotel) => (
            <div
              key={hotel.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 transition hover:shadow-md"
            >
              <div className="relative overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="h-56 w-full object-cover transition group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 rounded-full bg-ocean-600 px-3 py-1 text-xs font-semibold text-white">
                  {hotel.price}
                </span>
              </div>
              <div className="p-4">
                <span className="text-xs text-gray-400">{hotel.location}</span>
                <h4 className="mt-1 text-sm font-semibold text-gray-900">{hotel.name}</h4>
                <div className="mt-2 flex items-center justify-between">
                  <StarRating />
                  <span className="text-xs text-gray-400">(89)</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
