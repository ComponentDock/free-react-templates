import { MapPin } from 'lucide-react'

const destinations = [
  { name: 'Santorini, Greece', seed: 'placeboard-dest-1' },
  { name: 'Bali, Indonesia', seed: 'placeboard-dest-2' },
  { name: 'Kyoto, Japan', seed: 'placeboard-dest-3' },
]

export function FeatureDestinations() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {destinations.map((dest) => (
            <a
              key={dest.name}
              href="#"
              className="group relative block h-80 overflow-hidden bg-cover bg-center"
              style={{
                backgroundImage: `url(https://picsum.photos/seed/${dest.seed}/600/400)`,
              }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/60" />

              <div className="absolute inset-x-0 bottom-0 p-6 text-center">
                <MapPin className="mx-auto mb-2 h-6 w-6 text-white" />
                <h3
                  className="mb-2 text-xl font-bold text-white"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {dest.name}
                </h3>
                <span className="text-sm font-medium text-white/70 transition-colors group-hover:text-white">
                  Visit This Place
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
