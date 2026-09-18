const categoryCards = [
  { name: 'Amazing Places', count: 85, seed: 'dirly-places' },
  { name: 'Concerts', count: 42, seed: 'dirly-concerts' },
  { name: 'Travel Guide', count: 67, seed: 'dirly-travel' },
  { name: 'Music Festival', count: 31, seed: 'dirly-festival' },
]

export function PopularCategories() {
  return (
    <section id="categories" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="mb-2 font-[family-name:var(--font-family-heading)] text-lg italic text-brand">
            Discover
          </p>
          <h2 className="font-[family-name:var(--font-family-heading)] text-4xl font-bold italic text-heading">
            Most Popular Categories
          </h2>
        </div>

        {/* Category cards grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categoryCards.map((card) => (
            <a
              key={card.name}
              href="#listings"
              className="group relative overflow-hidden rounded-xl"
            >
              <img
                src={`https://picsum.photos/seed/${card.seed}/400/300`}
                alt={card.name}
                className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="mb-1 text-lg font-semibold text-white">{card.name}</h3>
                <span className="inline-block rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  0{card.count % 10} Listings
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
