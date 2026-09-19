import { MapPin, BedDouble, Bath, Square } from 'lucide-react'
import { featuredProperties } from '../data'

export function FeaturedProperties() {
  return (
    <section id="property" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-primary">Recent Properties</h2>
          <p className="mt-2 text-gray-600">Browse our latest property listings</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProperties.map((property) => (
            <div
              key={property.id}
              className="group overflow-hidden rounded-lg border border-gray-100 bg-white shadow transition hover:shadow-lg"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.address}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded bg-primary px-3 py-1 text-xs font-semibold text-white">
                  {property.status}
                </span>
              </div>
              <div className="p-4">
                <div className="mb-1 flex items-center gap-1 text-xs text-gray-500">
                  <MapPin size={12} />
                  <span>{property.address}</span>
                </div>
                <div className="mb-2 text-xs text-gray-400">{property.type}</div>
                <div className="mb-3 text-lg font-bold text-accent">{property.price}</div>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1">
                    <BedDouble size={14} />
                    {property.beds}
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath size={14} />
                    {property.baths}
                  </span>
                  <span className="flex items-center gap-1">
                    <Square size={14} />
                    {property.sqft}sqft
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
