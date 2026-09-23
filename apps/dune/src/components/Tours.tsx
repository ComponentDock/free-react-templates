const tours = [
  {
    title: 'Paris Tour Offer',
    duration: '5 days offer',
    price: '$65/day',
    seed: 'dune-paris',
    alt: 'Eiffel Tower at sunset',
  },
  {
    title: 'Rome Tour Offer',
    duration: '4 days offer',
    price: '$72/day',
    seed: 'dune-rome',
    alt: 'Roman Colosseum ancient architecture',
  },
  {
    title: 'Bali Tour Offer',
    duration: '7 days offer',
    price: '$58/day',
    seed: 'dune-bali',
    alt: 'Tropical rice terraces in Bali',
  },
  {
    title: 'Safari Tour Offer',
    duration: '6 days offer',
    price: '$89/day',
    seed: 'dune-safari',
    alt: 'Safari wildlife with elephants',
  },
] as const

export function Tours() {
  return (
    <section className="py-20 transition-colors dark:bg-gray-950 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-8">
            {tours.slice(0, 2).map((tour) => (
              <TourCard key={tour.title} tour={tour} />
            ))}
          </div>
          <div className="space-y-8">
            <div className="mb-8 lg:ml-12">
              <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                We offer worldwide tour plan recently
              </h2>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Discover amazing destinations with our carefully curated travel packages. From city
                escapes to wilderness adventures.
              </p>
            </div>
            {tours.slice(2, 4).map((tour) => (
              <TourCard key={tour.title} tour={tour} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TourCard({ tour }: { tour: (typeof tours)[number] }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      <img
        src={`https://picsum.photos/seed/${tour.seed}/600/300`}
        alt={tour.alt}
        className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        width={600}
        height={300}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="flex items-end justify-between">
          <div>
            <h3 className="text-lg font-bold text-white">{tour.title}</h3>
            <small className="text-sm text-gray-200">{tour.duration}</small>
          </div>
          <span className="text-lg font-bold text-brand">{tour.price}</span>
        </div>
      </div>
    </div>
  )
}
