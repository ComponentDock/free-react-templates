const places = [
  { name: 'Singapore', tours: 8, seed: 'getaway-sg' },
  { name: 'Canada', tours: 2, seed: 'getaway-ca' },
  { name: 'Thailand', tours: 5, seed: 'getaway-th' },
  { name: 'Australia', tours: 5, seed: 'getaway-au' },
]

export function BestPlaces() {
  return (
    <section id="destination" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 md:text-4xl">
          Best Place Destination
        </h2>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {places.map(({ name, tours, seed }) => (
            <a key={name} href="#" className="group relative block h-64 overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${seed}/400/400`}
                alt={name}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold">{name}</h3>
                <span className="text-sm">{tours} Tours</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
