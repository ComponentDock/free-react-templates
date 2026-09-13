import { MapPin, Star } from 'lucide-react'

const destinations = [
  { name: 'Philippines', rating: 4.8, image: 'https://picsum.photos/seed/tidal-ph/400/300' },
  { name: 'Canada', rating: 4.7, image: 'https://picsum.photos/seed/tidal-ca/400/300' },
  { name: 'Thailand', rating: 4.9, image: 'https://picsum.photos/seed/tidal-th/400/300' },
  { name: 'Australia', rating: 4.6, image: 'https://picsum.photos/seed/tidal-au/400/300' },
  { name: 'Greece', rating: 4.8, image: 'https://picsum.photos/seed/tidal-gr/400/300' },
] as const

export function DestinationSelect() {
  return (
    <section
      id="destination"
      aria-label="Destinations"
      className="relative py-20 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://picsum.photos/seed/tidal-parallax/1920/800')",
      }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand">Explore</p>
          <h2 className="mt-3 text-3xl font-bold text-white">Select Your Destination</h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((dest) => (
            <div
              key={dest.name}
              className="group overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={dest.image}
                  alt={`${dest.name} destination`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">{dest.name}</h3>
                    <div className="mt-1 flex items-center gap-1 text-sm text-text-secondary">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Popular Destination</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm font-medium text-brand">
                    <Star className="h-4 w-4 fill-brand" aria-hidden="true" />
                    {dest.rating}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
