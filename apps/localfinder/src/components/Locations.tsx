import { MapPin } from 'lucide-react'

const locations = [
  { name: 'New York', listings: 2840, image: 'https://picsum.photos/seed/lf-loc1/400/300' },
  { name: 'Los Angeles', listings: 1925, image: 'https://picsum.photos/seed/lf-loc2/400/300' },
  { name: 'Chicago', listings: 1430, image: 'https://picsum.photos/seed/lf-loc3/400/300' },
  { name: 'Miami', listings: 980, image: 'https://picsum.photos/seed/lf-loc4/400/300' },
]

export function Locations() {
  return (
    <section className="py-16 bg-page">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-ink mb-3">Featured Locations</h2>
        <p className="text-muted text-sm mb-10">
          Discover amazing places and services in your neighborhood
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {locations.map((loc) => (
            <a
              key={loc.name}
              href="#"
              className="relative rounded-xl overflow-hidden group block h-56"
            >
              <img
                src={loc.image}
                alt={loc.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4 text-left">
                <div className="flex items-center gap-1 text-white text-xs mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {loc.name}
                </div>
                <span className="text-white/70 text-xs">
                  {loc.listings.toLocaleString()} Listings
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
