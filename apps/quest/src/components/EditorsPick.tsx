import { Plus } from 'lucide-react'

const CITIES = [
  {
    name: 'New York',
    destinations: 1643,
    image: 'https://picsum.photos/seed/quest-ny/800/600',
    large: true,
  },
  { name: 'Barcelona', destinations: 943, image: 'https://picsum.photos/seed/quest-bcn/800/400' },
  { name: 'Paris', destinations: 243, image: 'https://picsum.photos/seed/quest-paris/800/400' },
] as const

export function EditorsPick() {
  return (
    <section
      className="relative py-24 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          'linear-gradient(rgba(14,2,35,0.85), rgba(14,2,35,0.85)), url(https://picsum.photos/seed/quest-editors/1920/1080)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="w-12 h-0.5 bg-brand mx-auto mb-4" />
          <h3 className="text-white text-2xl font-bold">Cities you must see</h3>
          <p className="text-white/60 text-sm mt-2">Editor&apos;s pick</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left: large card */}
          <div className="relative overflow-hidden group">
            <img
              src={CITIES[0].image}
              alt={CITIES[0].name}
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex items-end justify-between">
              <div className="flex gap-3">
                <span className="bg-brand text-white text-xs font-bold px-3 py-1">
                  {CITIES[0].name}
                </span>
                <span className="bg-white/20 text-white text-xs font-bold px-3 py-1">
                  {CITIES[0].destinations} Destinations
                </span>
              </div>
              <button
                aria-label={`Add ${CITIES[0].name}`}
                className="w-10 h-10 bg-brand flex items-center justify-center text-white hover:bg-brand-hover transition-colors"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right: two smaller cards */}
          <div className="flex flex-col gap-6">
            {CITIES.slice(1).map((city) => (
              <div key={city.name} className="relative overflow-hidden group">
                <img
                  src={city.image}
                  alt={city.name}
                  className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-end justify-between">
                  <div className="flex gap-3">
                    <span className="bg-brand text-white text-xs font-bold px-3 py-1">
                      {city.name}
                    </span>
                    <span className="bg-white/20 text-white text-xs font-bold px-3 py-1">
                      {city.destinations} Destinations
                    </span>
                  </div>
                  <button
                    aria-label={`Add ${city.name}`}
                    className="w-8 h-8 bg-brand flex items-center justify-center text-white hover:bg-brand-hover transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
