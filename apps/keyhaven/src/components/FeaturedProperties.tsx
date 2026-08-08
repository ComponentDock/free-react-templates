import { ArrowRight, Bath, BedDouble, MapPin, Ruler } from 'lucide-react'
import { Badge, cn } from '@free-react-templates/ui'

interface Property {
  name: string
  price: string
  location: string
  beds: string
  baths: string
  sqft: string
  isNew?: boolean
}

const properties: Property[] = [
  {
    name: 'Luxury Manhattan Penthouse',
    price: '$8.5M',
    location: 'New York, NY',
    beds: '4 Beds',
    baths: '4.5 Baths',
    sqft: '4,200 sqft',
    isNew: true,
  },
  {
    name: 'Modern Brooklyn Townhouse',
    price: '$3.2M',
    location: 'Brooklyn, NY',
    beds: '5 Beds',
    baths: '3.5 Baths',
    sqft: '3,800 sqft',
  },
  {
    name: 'Waterfront Hamptons Estate',
    price: '$24.5M',
    location: 'Southampton, NY',
    beds: '8 Beds',
    baths: '10 Baths',
    sqft: '12,000 sqft',
  },
  {
    name: 'Tribeca Industrial Loft',
    price: '$4.8M',
    location: 'New York, NY',
    beds: '3 Beds',
    baths: '2.5 Baths',
    sqft: '2,800 sqft',
  },
]

export function FeaturedProperties() {
  return (
    <section id="properties" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="font-serif text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
              Featured Properties
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Handpicked luxury properties in the most sought-after locations.
            </p>
          </div>
          <a
            href="#properties"
            className="flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700"
          >
            View All Properties
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {properties.map((property, index) => (
            <a
              key={property.name}
              href="#properties"
              className={cn(
                'group block overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl dark:bg-gray-800',
                index === 0 && 'lg:flex',
              )}
            >
              <div className={cn('relative overflow-hidden', index === 0 && 'lg:w-1/2')}>
                <img
                  src={`https://picsum.photos/seed/keyhaven-${index + 1}/800/600`}
                  alt={property.name}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute left-4 top-4 flex gap-2">
                  <Badge className="bg-primary-600 px-3 py-1 text-xs font-semibold text-white">
                    For Sale
                  </Badge>
                  {property.isNew && (
                    <Badge className="bg-gray-900 px-3 py-1 text-xs font-semibold text-white">
                      New
                    </Badge>
                  )}
                </div>
                <div className="absolute bottom-4 left-4 rounded-lg bg-white/95 px-4 py-2 text-lg font-bold text-gray-900 shadow-lg backdrop-blur-sm">
                  {property.price}
                </div>
              </div>

              <div className={cn('flex flex-col p-5 lg:p-6', index === 0 && 'lg:w-1/2')}>
                <h3 className="font-bold text-gray-900 group-hover:text-primary-600 dark:text-white dark:group-hover:text-primary-500">
                  {property.name}
                </h3>
                <p className="mt-1 flex items-center gap-1 text-sm text-gray-500">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  {property.location}
                </p>
                <div className="mt-4 flex items-center gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <BedDouble className="h-4 w-4" aria-hidden="true" />
                    {property.beds}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Bath className="h-4 w-4" aria-hidden="true" />
                    {property.baths}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Ruler className="h-4 w-4" aria-hidden="true" />
                    {property.sqft}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
