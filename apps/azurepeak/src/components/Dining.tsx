const venues = [
  {
    title: 'The Azure',
    description:
      'Our signature fine-dining restaurant featuring panoramic ocean views and a menu of contemporary coastal cuisine.',
    image: 'https://picsum.photos/seed/azurepeak-azure/600/400',
    hours: '6:00 PM – 11:00 PM',
  },
  {
    title: 'Coral Bar',
    description:
      'Handcrafted cocktails and premium spirits in an intimate, candlelit atmosphere with live jazz.',
    image: 'https://picsum.photos/seed/azurepeak-coral/600/400',
    hours: '5:00 PM – 1:00 AM',
  },
  {
    title: 'Sunrise Cafe',
    description:
      'Start your day with artisan pastries, freshly brewed coffee, and a stunning ocean sunrise.',
    image: 'https://picsum.photos/seed/azurepeak-sunrise/600/400',
    hours: '7:00 AM – 11:00 AM',
  },
]

export function Dining() {
  return (
    <section id="dining" className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
            Culinary Experiences
          </p>
          <h2 className="font-display text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Fine Dining
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {venues.map((venue) => (
            <article
              key={venue.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl dark:bg-gray-800"
            >
              <div className="overflow-hidden">
                <img
                  src={venue.image}
                  alt={venue.title}
                  className="aspect-[3/2] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white">
                  {venue.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{venue.description}</p>
                <p className="mt-3 text-xs font-medium text-amber-500">{venue.hours}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
