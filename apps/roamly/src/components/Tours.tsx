import { Calendar, Star } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const tours = [
  {
    title: 'Bali Cultural Journey',
    country: 'Bali, Indonesia',
    days: '7 days',
    rating: '4.9',
    reviews: 128,
    tags: ['Temple visits', 'Rice terraces'],
    price: '$1299',
    original: '$1599',
    seed: 'roamly-tour-1',
  },
  {
    title: 'Greek Island Hopping',
    country: 'Greece',
    days: '10 days',
    rating: '4.8',
    reviews: 96,
    tags: ['Santorini sunset', 'Mykonos beaches'],
    price: '$2199',
    original: '$2499',
    seed: 'roamly-tour-2',
  },
  {
    title: 'Peru Discovery',
    country: 'Peru',
    days: '8 days',
    rating: '4.9',
    reviews: 74,
    tags: ['Machu Picchu', 'Sacred Valley'],
    price: '$1899',
    original: null,
    seed: 'roamly-tour-3',
  },
  {
    title: 'Japan Explorer',
    country: 'Japan',
    days: '12 days',
    rating: '4.7',
    reviews: 156,
    tags: ['Tokyo nightlife', 'Kyoto temples'],
    price: '$3499',
    original: '$3999',
    seed: 'roamly-tour-4',
  },
] as const

export function Tours() {
  return (
    <section id="tours" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Featured Tours
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Unforgettable Experiences
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Handpicked tours designed to immerse you in local cultures, cuisines, and unforgettable
            landscapes.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {tours.map((tour) => (
            <article
              key={tour.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-800"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${tour.seed}/800/600`}
                  alt={tour.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-900 backdrop-blur-sm">
                  {tour.country}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{tour.title}</h3>
                <p className="mt-1.5 flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  {tour.days}
                </p>
                <p className="mt-1.5 flex items-center gap-1 text-sm font-semibold text-gray-700 dark:text-gray-300">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />
                  {tour.rating}
                  <span className="font-normal text-gray-500 dark:text-gray-400">
                    ({tour.reviews})
                  </span>
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {tour.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-900/50 dark:text-primary-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="text-xs text-gray-500 dark:text-gray-400">From</span>
                  <span className="text-lg font-extrabold text-gray-900 dark:text-white">
                    {tour.price}
                  </span>
                  {tour.original && (
                    <span className="text-sm text-gray-400 line-through dark:text-gray-500">
                      {tour.original}
                    </span>
                  )}
                </div>
                <ButtonLink
                  href="#"
                  variant="outline"
                  size="sm"
                  className="mt-4 w-full border-primary-200 text-primary-700 hover:bg-primary-50 hover:text-primary-800 dark:border-gray-700 dark:text-primary-300 dark:hover:bg-gray-700"
                >
                  View
                </ButtonLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
