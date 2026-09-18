import { ChevronLeft, ChevronRight, Search } from 'lucide-react'

const CITIES = [
  { name: 'Miami', image: 'https://picsum.photos/seed/manor-miami/300/200' },
  { name: 'Dublin', image: 'https://picsum.photos/seed/manor-dublin/300/200' },
  { name: 'Vienna', image: 'https://picsum.photos/seed/manor-vienna/300/200' },
  { name: 'Marbella', image: 'https://picsum.photos/seed/manor-marbella/300/200' },
  { name: 'New York', image: 'https://picsum.photos/seed/manor-newyork/300/200' },
  { name: 'Geneva', image: 'https://picsum.photos/seed/manor-geneva/300/200' },
]

export function Cities() {
  return (
    <section className="relative bg-navy-800 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="font-heading text-3xl font-bold text-white">cities clients prefer</h2>
          <span className="text-sm text-gray-400">Explore popular locations</span>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {CITIES.map((city) => (
              <a key={city.name} href="#" className="group relative overflow-hidden rounded-lg">
                <img
                  src={city.image}
                  alt={city.name}
                  className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-navy-800/40 transition-colors group-hover:bg-navy-800/60" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                  <Search className="h-6 w-6 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <span className="font-heading text-sm font-semibold text-white">{city.name}</span>
                </div>
              </a>
            ))}
          </div>

          <button
            className="absolute -left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-coral-400 text-white shadow-lg transition-colors hover:bg-coral-500"
            aria-label="Previous cities"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            className="absolute -right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-coral-400 text-white shadow-lg transition-colors hover:bg-coral-500"
            aria-label="Next cities"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
