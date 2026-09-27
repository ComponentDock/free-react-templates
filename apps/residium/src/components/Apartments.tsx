import { ChevronLeft, ChevronRight } from 'lucide-react'

const APARTMENTS = [
  {
    price: '$35,000',
    title: 'Colorful Little Apartment',
    beds: 2,
    baths: 2,
    sqft: 920,
    seed: 'apt-1',
  },
  { price: '$42,500', title: 'Modern Studio Loft', beds: 1, baths: 1, sqft: 650, seed: 'apt-2' },
  { price: '$58,000', title: 'Spacious Family Unit', beds: 3, baths: 2, sqft: 1200, seed: 'apt-3' },
  { price: '$39,000', title: 'Cozy Downtown Suite', beds: 2, baths: 1, sqft: 780, seed: 'apt-4' },
  {
    price: '$67,500',
    title: 'Luxury Penthouse View',
    beds: 3,
    baths: 3,
    sqft: 1800,
    seed: 'apt-5',
  },
  { price: '$31,000', title: 'Bright Garden Flat', beds: 1, baths: 1, sqft: 540, seed: 'apt-6' },
]

export function Apartments() {
  return (
    <section id="apartments" className="bg-[#f9f9ff] py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <h2 className="font-heading text-3xl font-bold text-navy-800">Featured Apartments</h2>
            <div className="mt-3 flex gap-1">
              <span className="h-1 w-12 bg-red-500" />
              <span className="h-1 w-4 bg-red-500" />
            </div>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous"
              className="flex h-10 w-10 items-center justify-center border border-gray-300 transition hover:border-red-500 hover:text-red-500"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next"
              className="flex h-10 w-10 items-center justify-center border border-gray-300 transition hover:border-red-500 hover:text-red-500"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {APARTMENTS.map(({ price, title, beds, baths, sqft, seed }) => (
            <div
              key={seed}
              className="group overflow-hidden bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/residium-${seed}/600/400`}
                  alt={title}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 bg-red-500 px-3 py-1 text-xs font-bold text-white">
                  {price}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-navy-800">{title}</h3>
                <ul className="mt-2 flex gap-4 text-sm text-gray-500">
                  <li>{beds} BD</li>
                  <li>{baths} BA</li>
                  <li>{sqft} SF</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
