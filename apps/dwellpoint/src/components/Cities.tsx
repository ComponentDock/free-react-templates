const cities = [
  { name: 'New York', image: 'https://picsum.photos/seed/dwellpoint-c1/400/300' },
  { name: 'Los Angeles', image: 'https://picsum.photos/seed/dwellpoint-c2/400/300' },
  { name: 'Chicago', image: 'https://picsum.photos/seed/dwellpoint-c3/400/300' },
  { name: 'Houston', image: 'https://picsum.photos/seed/dwellpoint-c4/400/300' },
]

export function Cities() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-gray-800">Demandable Cities</h2>
          <p className="mx-auto max-w-xl text-gray-500">
            Explore properties in the most sought-after locations. We cover all major metropolitan
            areas.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cities.map(({ name, image }) => (
            <div key={name} className="group relative overflow-hidden rounded-lg">
              <img
                src={image}
                alt={name}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <a
                  href="#"
                  className="rounded bg-crimson-400 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-crimson-500"
                >
                  Book Now
                </a>
              </div>
              <h3 className="absolute bottom-4 left-4 text-lg font-semibold text-white">{name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
