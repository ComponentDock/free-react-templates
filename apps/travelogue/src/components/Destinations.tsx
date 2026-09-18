const destinations = [
  {
    name: 'Bali, Indonesia',
    description:
      'A tropical paradise with lush rice terraces, stunning temples, and vibrant culture.',
    image: 'travelogue-dest-1',
  },
  {
    name: 'Santorini, Greece',
    description:
      'Iconic white-washed buildings perched on volcanic cliffs overlooking the Aegean Sea.',
    image: 'travelogue-dest-2',
  },
  {
    name: 'Kyoto, Japan',
    description: 'Ancient temples, serene gardens, and the beauty of cherry blossoms in spring.',
    image: 'travelogue-dest-3',
  },
  {
    name: 'Machu Picchu, Peru',
    description:
      'An ancient Incan citadel set high in the Andes Mountains, full of mystery and history.',
    image: 'travelogue-dest-4',
  },
] as const

export function Destinations() {
  return (
    <section id="destinations" className="bg-mist py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
          Popular Destinations
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-smoke">
          Hand-picked destinations that will take your breath away
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {destinations.map((dest) => (
            <article
              key={dest.name}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl dark:bg-gray-800"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${dest.image}/600/450`}
                  alt={dest.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold text-ink dark:text-white">
                  {dest.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-smoke">{dest.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
