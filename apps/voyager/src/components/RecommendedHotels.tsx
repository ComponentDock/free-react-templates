import { Star } from 'lucide-react'

const hotels = [
  {
    name: 'Hotel Edison',
    location: 'New York, USA',
    price: 120,
    rating: 5,
    reviews: 545,
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    seed: 'voyager-hotel-1',
  },
  {
    name: 'Grand Pacific',
    location: 'Sydney, Australia',
    price: 180,
    rating: 5,
    reviews: 412,
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    seed: 'voyager-hotel-2',
  },
  {
    name: 'Hotel Zephyr',
    location: 'San Francisco, USA',
    price: 145,
    rating: 5,
    reviews: 389,
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    seed: 'voyager-hotel-3',
  },
  {
    name: 'Da Vinci Villa',
    location: 'Florence, Italy',
    price: 210,
    rating: 5,
    reviews: 621,
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    seed: 'voyager-hotel-4',
  },
]

export function RecommendedHotels() {
  return (
    <section id="hotels" className="py-20" aria-label="Recommended hotels">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black">Recommended Hotels</h2>
          <p className="mx-auto max-w-xl text-gray-500">
            We love to tell our successful far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {hotels.map((hotel) => (
            <div
              key={hotel.name}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform group-hover:scale-105"
                  style={{
                    backgroundImage: `url(https://picsum.photos/seed/${hotel.seed}/400/300)`,
                  }}
                />
                <span className="absolute bottom-3 right-3 rounded bg-primary-500 px-3 py-1 text-sm font-bold text-black">
                  ${hotel.price}
                  <small className="font-normal"> /night</small>
                </span>
              </div>
              <div className="p-4">
                <div className="mb-2 flex items-center gap-1">
                  {Array.from({ length: hotel.rating }).map((_, i) => (
                    <Star key={i} size={12} className="fill-primary-500 text-primary-500" />
                  ))}
                  <span className="ml-1 text-xs text-gray-400">{hotel.reviews} Reviews</span>
                </div>
                <h3 className="mb-1 text-base font-bold text-black">{hotel.name}</h3>
                <p className="mb-2 text-xs text-gray-400">{hotel.location}</p>
                <p className="text-sm text-gray-500">{hotel.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
