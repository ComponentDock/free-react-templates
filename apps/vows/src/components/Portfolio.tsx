interface Couple {
  names: string
  venue: string
  image: string
}

const couples: Couple[] = [
  {
    names: 'Sarah & Michael',
    venue: 'The Grand Estate, Napa Valley',
    image: 'https://picsum.photos/seed/vows-portfolio-1/600/600',
  },
  {
    names: 'Emma & James',
    venue: 'Seaside Chapel, Malibu',
    image: 'https://picsum.photos/seed/vows-portfolio-2/600/600',
  },
  {
    names: 'Olivia & William',
    venue: 'Botanical Gardens, Charleston',
    image: 'https://picsum.photos/seed/vows-portfolio-3/600/600',
  },
  {
    names: 'Grace & Thomas',
    venue: 'Historic Mansion, Savannah',
    image: 'https://picsum.photos/seed/vows-portfolio-4/600/600',
  },
  {
    names: 'Isabella & Alexander',
    venue: 'Vineyard Estate, Sonoma',
    image: 'https://picsum.photos/seed/vows-portfolio-5/600/600',
  },
  {
    names: 'Charlotte & Benjamin',
    venue: 'Lakeside Resort, Lake Como',
    image: 'https://picsum.photos/seed/vows-portfolio-6/600/600',
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary-500">
            Our Work
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Our Portfolio
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            A glimpse of the celebrations we have had the joy of designing — each one as unique as
            the love it honored.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {couples.map((couple) => (
            <div
              key={couple.names}
              className="group overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-gray-100 transition-shadow hover:shadow-xl dark:bg-gray-900 dark:ring-gray-800"
            >
              <div className="overflow-hidden">
                <img
                  src={couple.image}
                  alt={couple.names}
                  className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-serif text-lg font-semibold text-gray-900 dark:text-white">
                  {couple.names}
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{couple.venue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
