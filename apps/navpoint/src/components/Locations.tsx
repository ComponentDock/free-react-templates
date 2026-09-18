const LOCATIONS = [
  { name: 'Amsterdam', seed: 'navpoint-amsterdam' },
  { name: 'Paris', seed: 'navpoint-paris' },
  { name: 'Singapore', seed: 'navpoint-singapore' },
  { name: 'Chicago', seed: 'navpoint-chicago' },
  { name: 'New York', seed: 'navpoint-newyork' },
] as const

export function Locations() {
  return (
    <section className="py-20 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-semibold text-text-primary text-center mb-12">
        Explore Hot Locations
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {LOCATIONS.map((loc) => (
          <a
            key={loc.name}
            href="#"
            className="relative group overflow-hidden rounded-lg aspect-[3/4]"
          >
            <img
              src={`https://picsum.photos/seed/${loc.seed}/400/500`}
              alt={loc.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
              <span className="text-white font-semibold text-lg">{loc.name}</span>
              <span className="block text-brand text-2xl font-bold mt-1">+</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
