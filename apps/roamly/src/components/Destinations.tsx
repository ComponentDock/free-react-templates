import { ArrowRight, Star } from 'lucide-react'

const destinations = [
  {
    name: 'Bali, Indonesia',
    rating: '4.9',
    tours: 24,
    blurb: 'Tropical paradise with stunning temples and beaches.',
    seed: 'roamly-dest-1',
  },
  {
    name: 'Santorini, Greece',
    rating: '4.8',
    tours: 18,
    blurb: 'Iconic white buildings and breathtaking sunsets.',
    seed: 'roamly-dest-2',
  },
  {
    name: 'Machu Picchu, Peru',
    rating: '4.9',
    tours: 12,
    blurb: 'Ancient Incan citadel high in the Andes Mountains.',
    seed: 'roamly-dest-3',
  },
  {
    name: 'Tokyo, Japan',
    rating: '4.7',
    tours: 32,
    blurb: 'Where ancient tradition meets cutting-edge modernity.',
    seed: 'roamly-dest-4',
  },
  {
    name: 'Maldives',
    rating: '4.9',
    tours: 15,
    blurb: 'Crystal clear waters and luxury overwater villas.',
    seed: 'roamly-dest-5',
  },
  {
    name: 'Swiss Alps',
    rating: '4.8',
    tours: 20,
    blurb: 'Majestic peaks and world-class skiing adventures.',
    seed: 'roamly-dest-6',
  },
] as const

export function Destinations() {
  return (
    <section id="destinations" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Explore the World
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Handpicked destinations loved by our travelers — each tour is crafted to show you the
            very best.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((destination) => (
            <article
              key={destination.name}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-lg dark:bg-gray-800"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${destination.seed}/800/600`}
                  alt={destination.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <p className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  {destination.rating} • {destination.tours} tours
                </p>
                <h3 className="mt-2 text-lg font-bold text-gray-900 dark:text-white">
                  {destination.name}
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{destination.blurb}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 transition-colors hover:text-primary-700 dark:text-primary-400"
          >
            View all destinations
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
