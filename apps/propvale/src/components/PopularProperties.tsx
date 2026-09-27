import { MapPin, Maximize, BedDouble, Bath } from 'lucide-react'

const properties = [
  {
    id: 1,
    title: 'Luxury Family Home',
    location: '123 Main St, New York',
    price: '$350,000',
    sqft: '1,200',
    beds: 3,
    baths: 2,
    tag: 'For Sale',
    image: 'https://picsum.photos/seed/propvale-1/400/300',
  },
  {
    id: 2,
    title: 'Modern Apartment',
    location: '456 Oak Ave, Los Angeles',
    price: '$1,800/mo',
    sqft: '850',
    beds: 2,
    baths: 1,
    tag: 'For Rent',
    image: 'https://picsum.photos/seed/propvale-2/400/300',
  },
  {
    id: 3,
    title: 'Beachfront Villa',
    location: '789 Ocean Dr, Miami',
    price: '$1,200,000',
    sqft: '3,500',
    beds: 5,
    baths: 4,
    tag: 'For Sale',
    image: 'https://picsum.photos/seed/propvale-3/400/300',
  },
  {
    id: 4,
    title: 'Cozy Studio',
    location: '321 Pine Ln, Chicago',
    price: '$1,200/mo',
    sqft: '450',
    beds: 1,
    baths: 1,
    tag: 'For Rent',
    image: 'https://picsum.photos/seed/propvale-4/400/300',
  },
  {
    id: 5,
    title: 'Suburban Ranch',
    location: '654 Elm St, Houston',
    price: '$475,000',
    sqft: '2,100',
    beds: 4,
    baths: 3,
    tag: 'For Sale',
    image: 'https://picsum.photos/seed/propvale-5/400/300',
  },
  {
    id: 6,
    title: 'Downtown Loft',
    location: '987 Broadway, New York',
    price: '$2,500/mo',
    sqft: '1,100',
    beds: 2,
    baths: 2,
    tag: 'For Rent',
    image: 'https://picsum.photos/seed/propvale-6/400/300',
  },
]

export function PopularProperties() {
  return (
    <section id="popular" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="font-display text-3xl font-semibold text-ink dark:text-gray-100">
          Popular Properties
        </h2>
        <p className="mt-3 text-gray-500 dark:text-gray-400">Explore our most popular listings</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span
                  className={`absolute left-3 top-3 rounded px-3 py-1 text-xs font-semibold text-white ${
                    property.tag === 'For Sale' ? 'bg-primary-400' : 'bg-navy'
                  }`}
                >
                  {property.tag}
                </span>
              </div>

              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-ink dark:text-gray-100">
                  {property.title}
                </h3>
                <div className="mt-2 flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400">
                  <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
                  {property.location}
                </div>
                <p className="mt-3 text-lg font-bold text-primary-400">{property.price}</p>
              </div>

              <div className="flex items-center gap-4 border-t border-gray-100 px-5 py-3 text-sm text-gray-500 dark:border-gray-800 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <Maximize className="h-4 w-4" aria-hidden="true" />
                  {property.sqft} sqft
                </span>
                <span className="flex items-center gap-1">
                  <BedDouble className="h-4 w-4" aria-hidden="true" />
                  {property.beds} Bed
                </span>
                <span className="flex items-center gap-1">
                  <Bath className="h-4 w-4" aria-hidden="true" />
                  {property.baths} Bath
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
