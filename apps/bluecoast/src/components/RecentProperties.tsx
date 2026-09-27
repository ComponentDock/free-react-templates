import { Maximize2, BedDouble, Bath } from 'lucide-react'

interface Property {
  id: number
  image: string
  price: string
  location: string
  sqft: string
  bedrooms: string
  bathrooms: string
  label: string
}

const properties: Property[] = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/bluecoast-p1/400/300',
    price: '$2,500',
    location: 'New York, NY',
    sqft: '120 sqft',
    bedrooms: '3',
    bathrooms: '2',
    label: 'For rent',
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/bluecoast-p2/400/300',
    price: '$3,800',
    location: 'Los Angeles, CA',
    sqft: '200 sqft',
    bedrooms: '4',
    bathrooms: '3',
    label: 'For rent',
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/bluecoast-p3/400/300',
    price: '$1,900',
    location: 'Chicago, IL',
    sqft: '95 sqft',
    bedrooms: '2',
    bathrooms: '1',
    label: 'For rent',
  },
]

export function RecentProperties() {
  return (
    <section className="py-20" aria-labelledby="recent-properties-heading">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2
          id="recent-properties-heading"
          className="mb-12 text-center text-3xl font-bold text-text-dark"
        >
          Recent Properties
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((prop) => (
            <article
              key={prop.id}
              className="group overflow-hidden rounded-[22px] bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={prop.image}
                  alt={prop.location}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute right-3 top-3 rounded-full bg-accent-green px-4 py-1 text-xs font-semibold text-white">
                  {prop.price}
                </span>
                <span className="absolute left-3 top-3 rounded-full bg-brand-primary px-3 py-1 text-xs font-medium text-white">
                  {prop.label}
                </span>
              </div>
              <div className="p-5">
                <p className="mb-3 text-sm text-text-gray">{prop.location}</p>
                <div className="flex items-center gap-4 text-xs text-text-light">
                  <span className="flex items-center gap-1">
                    <Maximize2 size={14} /> {prop.sqft}
                  </span>
                  <span className="flex items-center gap-1">
                    <BedDouble size={14} /> {prop.bedrooms} Beds
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath size={14} /> {prop.bathrooms} Baths
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
