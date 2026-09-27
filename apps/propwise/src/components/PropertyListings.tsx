import { MapPin, Bed, Bath, Square } from 'lucide-react'

const properties = [
  {
    id: 1,
    image: 'https://picsum.photos/seed/propwise-p1/600/400',
    price: '$350,000',
    location: 'New York, NY',
    beds: 3,
    baths: 2,
    sqft: '1,800',
    type: 'Apartment',
  },
  {
    id: 2,
    image: 'https://picsum.photos/seed/propwise-p2/600/400',
    price: '$425,000',
    location: 'Los Angeles, CA',
    beds: 4,
    baths: 3,
    sqft: '2,200',
    type: 'House',
  },
  {
    id: 3,
    image: 'https://picsum.photos/seed/propwise-p3/600/400',
    price: '$280,000',
    location: 'Chicago, IL',
    beds: 2,
    baths: 2,
    sqft: '1,200',
    type: 'Condo',
  },
  {
    id: 4,
    image: 'https://picsum.photos/seed/propwise-p4/600/400',
    price: '$550,000',
    location: 'Miami, FL',
    beds: 5,
    baths: 4,
    sqft: '3,000',
    type: 'Villa',
  },
  {
    id: 5,
    image: 'https://picsum.photos/seed/propwise-p5/600/400',
    price: '$310,000',
    location: 'Austin, TX',
    beds: 3,
    baths: 2,
    sqft: '1,600',
    type: 'Townhouse',
  },
  {
    id: 6,
    image: 'https://picsum.photos/seed/propwise-p6/600/400',
    price: '$475,000',
    location: 'Seattle, WA',
    beds: 4,
    baths: 3,
    sqft: '2,400',
    type: 'House',
  },
] as const

export function PropertyListings() {
  return (
    <section id="property" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-heading">Featured Properties</h2>
          <p className="mt-3 text-sm text-body">
            Find the perfect property that suits your lifestyle and budget.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-all hover:shadow-lg"
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={`${property.type} in ${property.location}`}
                  className="h-52 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded bg-brand px-3 py-1 text-xs font-semibold text-white">
                  {property.type}
                </span>
              </div>
              <div className="p-5">
                <div className="mb-2 text-xl font-bold text-brand">{property.price}</div>
                <div className="mb-3 flex items-center gap-1.5 text-sm text-body">
                  <MapPin className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  {property.location}
                </div>
                <div className="flex items-center gap-4 border-t border-gray-100 pt-3 text-xs text-body">
                  <span className="flex items-center gap-1">
                    <Bed className="h-4 w-4" aria-hidden="true" />
                    {property.beds} Beds
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath className="h-4 w-4" aria-hidden="true" />
                    {property.baths} Baths
                  </span>
                  <span className="flex items-center gap-1">
                    <Square className="h-4 w-4" aria-hidden="true" />
                    {property.sqft} sqft
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
