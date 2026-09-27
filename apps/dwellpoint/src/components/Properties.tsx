import { Check, X as XIcon } from 'lucide-react'

interface Property {
  title: string
  beds: number
  baths: number
  sqm: number
  pool: boolean
  bar: boolean
  price: string
  image: string
}

const properties: Property[] = [
  {
    title: '04 Bed Duplex',
    beds: 4,
    baths: 3,
    sqm: 750,
    pool: true,
    bar: false,
    price: '$3.5M',
    image: 'https://picsum.photos/seed/dwellpoint-p1/600/400',
  },
  {
    title: '03 Bed Apartment',
    beds: 3,
    baths: 2,
    sqm: 520,
    pool: false,
    bar: true,
    price: '$2.8M',
    image: 'https://picsum.photos/seed/dwellpoint-p2/600/400',
  },
  {
    title: '05 Bed Villa',
    beds: 5,
    baths: 4,
    sqm: 900,
    pool: true,
    bar: true,
    price: '$4.2M',
    image: 'https://picsum.photos/seed/dwellpoint-p3/600/400',
  },
]

function Tag({ label, available }: { label: string; available: boolean }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs text-gray-500">
      {available ? (
        <Check className="h-3 w-3 text-green-500" />
      ) : (
        <XIcon className="h-3 w-3 text-red-400" />
      )}
      {label}
    </span>
  )
}

function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="overflow-hidden rounded-xl shadow-lg transition-shadow hover:shadow-xl">
      <div className="overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-56 w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="mb-3 text-lg font-semibold text-gray-800">{property.title}</h3>
        <div className="mb-4 flex flex-wrap gap-3">
          <Tag label={`${property.beds} Beds`} available />
          <Tag label={`${property.baths} Baths`} available />
          <Tag label={`${property.sqm} sqm`} available />
          <Tag label="Pool" available={property.pool} />
          <Tag label="Bar" available={property.bar} />
        </div>
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <h4 className="text-lg font-bold text-gray-800">Total: {property.price}</h4>
          <a
            href="#"
            className="rounded bg-crimson-400 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-crimson-500"
          >
            For Sale
          </a>
        </div>
      </div>
    </div>
  )
}

export function Properties() {
  return (
    <section id="properties" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-800">Our Top Rated Properties</h2>
          <p className="mx-auto max-w-xl text-gray-500">
            Browse our curated selection of premium properties, handpicked for quality, location,
            and value.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((p) => (
            <PropertyCard key={p.title} property={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
