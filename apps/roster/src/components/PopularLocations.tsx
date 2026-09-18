import { MapPin } from 'lucide-react'

const cities = [
  { name: 'New York', count: 65, seed: 'roster-ny' },
  { name: 'Paris', count: 60, seed: 'roster-paris' },
  { name: 'Rome', count: 50, seed: 'roster-rome' },
  { name: 'Sydney', count: 42, seed: 'roster-sydney' },
  { name: 'Tokyo', count: 78, seed: 'roster-tokyo' },
  { name: 'London', count: 55, seed: 'roster-london' },
]

export function PopularLocations() {
  return (
    <section id="categories" className="border-b border-border-light py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-light text-heading">Explore Top Cities</h2>
          <p className="text-text-body">
            Let&apos;s uncover the best places to eat, drink, and shop nearest to you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cities.map((city) => (
            <div key={city.name} className="group relative overflow-hidden rounded-xl">
              <img
                src={`https://picsum.photos/seed/${city.seed}/600/400`}
                alt={city.name}
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-5 left-5">
                <h3 className="mb-2 text-2xl font-light text-white">{city.name}</h3>
                <span className="inline-flex items-center gap-1 rounded-full bg-brand px-3 py-1 text-sm font-medium text-white">
                  {city.count}+ <MapPin className="h-3 w-3" /> Listings
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
