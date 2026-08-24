import { useState } from 'react'
import { MapPin, ChevronLeft, ChevronRight } from 'lucide-react'

interface Destination {
  id: number
  name: string
  location: string
  image: string
  price: string
}

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Enjoy the beauty of Maldives',
    location: 'Maldives, Republic Maldives',
    image: 'https://picsum.photos/seed/voyage-maldives/600/400',
    price: '$1,200',
  },
  {
    id: 2,
    name: 'Explore the Swiss Alps',
    location: 'Switzerland, Europe',
    image: 'https://picsum.photos/seed/voyage-swiss/600/400',
    price: '$2,400',
  },
  {
    id: 3,
    name: 'Safari in Kenya',
    location: 'Kenya, East Africa',
    image: 'https://picsum.photos/seed/voyage-kenya/600/400',
    price: '$1,800',
  },
  {
    id: 4,
    name: 'Visit the Santorini Islands',
    location: 'Greece, Mediterranean',
    image: 'https://picsum.photos/seed/voyage-santorini/600/400',
    price: '$1,500',
  },
  {
    id: 5,
    name: 'Discover Tokyo',
    location: 'Japan, East Asia',
    image: 'https://picsum.photos/seed/voyage-tokyo/600/400',
    price: '$2,100',
  },
  {
    id: 6,
    name: 'Trek the Andes',
    location: 'Peru, South America',
    image: 'https://picsum.photos/seed/voyage-andes/600/400',
    price: '$1,900',
  },
]

const ITEMS_PER_PAGE = 3

export function Destinations() {
  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(destinations.length / ITEMS_PER_PAGE)
  const visible = destinations.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE)

  return (
    <section id="destinations" className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="font-heading text-3xl font-bold text-ink sm:text-4xl">
            We Provide Top Destinations
          </h2>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              aria-label="Previous destinations"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-colors hover:border-brand hover:text-brand disabled:opacity-40"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page >= totalPages - 1}
              aria-label="Next destinations"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 text-gray-500 transition-colors hover:border-brand hover:text-brand disabled:opacity-40"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((dest) => (
            <div
              key={dest.id}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 rounded-full bg-brand px-4 py-1 text-xs font-bold text-white">
                  {dest.price}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-bold text-ink">{dest.name}</h3>
                <div className="mt-2 flex items-center gap-1 text-sm text-gray-500">
                  <MapPin className="h-4 w-4 text-brand" aria-hidden="true" />
                  {dest.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setPage(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`h-3 w-3 rounded-full transition-colors ${
                i === page ? 'bg-brand' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
