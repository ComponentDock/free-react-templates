const CITIES = [
  { name: 'Miami', listings: 245, image: 'https://picsum.photos/seed/fern-city1/600/400' },
  { name: 'Chicago', listings: 182, image: 'https://picsum.photos/seed/fern-city2/600/400' },
  { name: 'Illinois', listings: 97, image: 'https://picsum.photos/seed/fern-city3/600/400' },
]

export function Cities() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-ink">
          Properties for these Cities
        </h2>
        <p className="mb-12 text-center text-mist">Explore top locations with the most listings</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CITIES.map((city) => (
            <div
              key={city.name}
              className="group relative h-64 cursor-pointer overflow-hidden rounded-lg"
            >
              <img
                src={city.image}
                alt={city.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-ink/40 transition-colors group-hover:bg-ink/50" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-bold text-white">{city.name}</h3>
                <p className="text-sm text-gray-200">{city.listings} Properties</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
