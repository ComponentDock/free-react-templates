import { MapPin } from 'lucide-react'

const DESTINATIONS = [
  { name: 'Bali, Indonesia', tours: 12, image: 'https://picsum.photos/seed/jetpath-bali/600/400' },
  {
    name: 'Santorini, Greece',
    tours: 8,
    image: 'https://picsum.photos/seed/jetpath-santorini/600/400',
  },
  { name: 'Kyoto, Japan', tours: 10, image: 'https://picsum.photos/seed/jetpath-kyoto/600/400' },
  {
    name: 'Machu Picchu, Peru',
    tours: 6,
    image: 'https://picsum.photos/seed/jetpath-machu/600/400',
  },
  { name: 'Swiss Alps', tours: 9, image: 'https://picsum.photos/seed/jetpath-swiss/600/400' },
  { name: 'Maldives', tours: 7, image: 'https://picsum.photos/seed/jetpath-maldives/600/400' },
]

export function Destinations() {
  return (
    <section id="destinations" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-jet-teal font-semibold text-sm uppercase tracking-wider mb-2">
            Popular Destinations
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-jet-navy">
            Trending Places to Visit
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESTINATIONS.map((dest) => (
            <a
              key={dest.name}
              href="#"
              className="group relative rounded-2xl overflow-hidden h-72 block"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 text-white">
                <h3 className="font-display text-xl font-bold mb-1">{dest.name}</h3>
                <p className="text-white/70 text-sm flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {dest.tours} tours available
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
