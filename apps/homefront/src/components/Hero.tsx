import { MapPin } from 'lucide-react'
import { properties } from '../data'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center bg-primary pt-24 pb-16 md:min-h-[600px]"
    >
      <div className="container mx-auto px-4">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <div
              key={property.id}
              className="group relative overflow-hidden rounded-lg bg-white shadow-lg transition hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={property.image}
                  alt={property.address}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded bg-accent px-3 py-1 text-xs font-semibold text-white">
                  {property.status}
                </span>
              </div>
              <div className="p-4">
                <div className="mb-1 flex items-center gap-1 text-sm text-gray-500">
                  <MapPin size={14} />
                  <span>{property.location}</span>
                </div>
                <h3 className="mb-1 text-lg font-semibold text-primary">{property.address}</h3>
                <p className="mb-3 text-sm text-gray-600 line-clamp-2">{property.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-accent">{property.price}</span>
                  <a
                    href="#"
                    className="rounded bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-dark"
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
