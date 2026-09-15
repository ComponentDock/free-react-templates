import { Star } from 'lucide-react'

const destinations = [
  {
    title: 'Athens, Greece',
    city: 'Athens, Greece',
    price: 450,
    rating: 5,
    reviews: 545,
    seed: 'voyager-dest-1',
  },
  {
    title: 'Family Tour in Thailand',
    city: 'Bangkok, Thailand',
    price: 520,
    rating: 5,
    reviews: 432,
    seed: 'voyager-dest-2',
  },
  {
    title: 'Philippines Adventure',
    city: 'Lipa, Philippines',
    price: 380,
    rating: 5,
    reviews: 318,
    seed: 'voyager-dest-3',
  },
  {
    title: 'Santorini Escape',
    city: 'Santorini, Greece',
    price: 610,
    rating: 5,
    reviews: 671,
    seed: 'voyager-dest-4',
  },
  {
    title: 'Bali Retreat',
    city: 'Bali, Indonesia',
    price: 490,
    rating: 5,
    reviews: 524,
    seed: 'voyager-dest-5',
  },
  {
    title: 'Rome Discovery',
    city: 'Rome, Italy',
    price: 420,
    rating: 5,
    reviews: 489,
    seed: 'voyager-dest-6',
  },
]

export function PopularDestinations() {
  return (
    <section className="bg-gray-100 py-20" aria-label="Popular destinations">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black">Popular Destination</h2>
          <p className="mx-auto max-w-xl text-gray-500">
            We love to tell our successful far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest) => (
            <a
              key={dest.title}
              href="#"
              className="group block overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              <div
                className="h-56 bg-cover bg-center transition-transform group-hover:scale-105"
                style={{
                  backgroundImage: `url(https://picsum.photos/seed/${dest.seed}/600/400)`,
                }}
              />
              <div className="p-5">
                <div className="mb-2 flex items-center gap-1">
                  {Array.from({ length: dest.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-primary-500 text-primary-500" />
                  ))}
                  <span className="ml-1 text-xs text-gray-500">{dest.reviews} Reviews</span>
                </div>
                <h3 className="mb-1 text-lg font-bold text-black">{dest.title}</h3>
                <p className="mb-2 text-sm text-gray-500">{dest.city}</p>
                <span className="text-lg font-bold text-primary-600">${dest.price}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
