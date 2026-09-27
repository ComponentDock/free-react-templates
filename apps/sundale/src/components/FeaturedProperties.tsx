import { MapPin, Bath, Car, Maximize } from 'lucide-react'

const properties = [
  {
    id: 1,
    title: 'Villa in Los Angeles',
    address: 'Upper Road 3411, no.34 CA',
    price: '$945,679',
    beds: 3,
    baths: 2,
    garage: 2,
    sqft: '120 sq ft',
    seed: 'sundale-property-1',
  },
  {
    id: 2,
    title: 'Town House in Los Angeles',
    address: 'Upper Road 3411, no.34 CA',
    price: '$720,500',
    beds: 2,
    baths: 2,
    garage: 2,
    sqft: '120 sq ft',
    seed: 'sundale-property-2',
  },
  {
    id: 3,
    title: 'House in Melbourne',
    address: '12 Collins Street, Melbourne',
    price: '$1,250,000',
    beds: 4,
    baths: 3,
    garage: 2,
    sqft: '240 sq ft',
    seed: 'sundale-property-3',
  },
  {
    id: 4,
    title: 'Apartment in New York',
    address: '45 Broadway, Manhattan, NY',
    price: '$890,000',
    beds: 2,
    baths: 1,
    garage: 1,
    sqft: '95 sq ft',
    seed: 'sundale-property-4',
  },
  {
    id: 5,
    title: 'Villa in Miami',
    address: '220 Ocean Drive, Miami Beach',
    price: '$2,100,000',
    beds: 5,
    baths: 4,
    garage: 3,
    sqft: '350 sq ft',
    seed: 'sundale-property-5',
  },
  {
    id: 6,
    title: 'Town House in Chicago',
    address: '88 Michigan Ave, Chicago',
    price: '$650,000',
    beds: 3,
    baths: 2,
    garage: 1,
    sqft: '180 sq ft',
    seed: 'sundale-property-6',
  },
]

export function FeaturedProperties() {
  return (
    <section id="properties" className="bg-[#f5f7f9] px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-800">Featured Properties</h2>
          <p className="text-gray-500">
            Suspendisse dictum enim sit amet libero malesuada feugiat.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((p) => (
            <div
              key={p.id}
              className="overflow-hidden rounded bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={`https://picsum.photos/seed/${p.seed}/600/400`}
                  alt={p.title}
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute left-4 top-4 rounded bg-tan-500 px-3 py-1 text-xs font-semibold text-white">
                  For Sale
                </span>
                <span className="absolute right-4 top-4 rounded bg-gray-900/80 px-3 py-1 text-sm font-bold text-white">
                  {p.price}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <h5 className="mb-1 text-lg font-bold text-gray-800">{p.title}</h5>
                <p className="mb-3 flex items-center gap-1 text-sm text-gray-500">
                  <MapPin className="h-4 w-4 text-tan-500" />
                  {p.address}
                </p>
                <p className="mb-4 text-sm text-gray-500">
                  Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada.
                </p>
                <div className="flex items-center justify-between border-t border-gray-100 pt-3 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Bath className="h-4 w-4" />
                    {p.baths}
                  </span>
                  <span className="flex items-center gap-1">
                    <Car className="h-4 w-4" />
                    {p.garage}
                  </span>
                  <span className="flex items-center gap-1">
                    <Maximize className="h-4 w-4" />
                    {p.sqft}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
