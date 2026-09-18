const destinations = [
  { name: 'Bali', image: 'https://picsum.photos/seed/trailquest-dest-1/600/400' },
  { name: 'Maldives', image: 'https://picsum.photos/seed/trailquest-dest-2/600/400' },
  { name: 'Santorini', image: 'https://picsum.photos/seed/trailquest-dest-3/600/400' },
]

export function FeaturedDestinations() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center font-display text-3xl md:text-4xl">
          See our latest vacation ideas
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {destinations.map((dest) => (
            <div
              key={dest.name}
              className="group relative h-64 cursor-pointer overflow-hidden rounded"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${dest.image})` }}
              />
              <div className="absolute inset-0 bg-black/40 transition-opacity group-hover:bg-black/30" />
              <div className="absolute inset-0 flex items-end p-6">
                <h3 className="font-display text-2xl text-white">{dest.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
