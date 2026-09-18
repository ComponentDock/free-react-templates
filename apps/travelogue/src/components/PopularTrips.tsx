const trips = [
  {
    name: 'Island Hopping Adventure',
    duration: '7 Days',
    price: '$1,299',
    image: 'travelogue-trip-1',
  },
  {
    name: 'Cultural Heritage Tour',
    duration: '10 Days',
    price: '$1,899',
    image: 'travelogue-trip-2',
  },
  {
    name: 'Mountain Expedition',
    duration: '5 Days',
    price: '$899',
    image: 'travelogue-trip-3',
  },
] as const

export function PopularTrips() {
  return (
    <section id="trips" className="bg-mist py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
          Popular Trips
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-smoke">
          Our most loved travel packages crafted by expert planners
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {trips.map((trip) => (
            <article
              key={trip.name}
              className="group overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-xl dark:bg-gray-800"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={`https://picsum.photos/seed/${trip.image}/800/500`}
                  alt={trip.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold text-ink dark:text-white">
                    {trip.name}
                  </h3>
                  <span className="text-sm font-semibold text-primary-400">{trip.price}</span>
                </div>
                <p className="mt-2 text-sm text-smoke">{trip.duration}</p>
                <button
                  type="button"
                  className="mt-4 rounded-md bg-primary-400 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-500"
                >
                  Book Now
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
