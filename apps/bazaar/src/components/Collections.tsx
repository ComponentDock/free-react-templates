const categories = [
  {
    label: 'Women',
    count: '25 items',
    image: 'https://picsum.photos/seed/bazaar-women/800/600',
  },
  {
    label: 'Men',
    count: '25 items',
    image: 'https://picsum.photos/seed/bazaar-men/800/600',
  },
  {
    label: 'Shoes',
    count: '25 items',
    image: 'https://picsum.photos/seed/bazaar-shoes/800/600',
  },
] as const

export function Collections() {
  return (
    <section id="catalogue" className="bg-fog py-20 transition-colors dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 flex items-center gap-3">
          <span className="h-8 w-1 shrink-0 bg-brand" aria-hidden="true" />
          <h2 className="font-sans text-2xl font-bold uppercase tracking-wide text-ink lg:text-3xl dark:text-white">
            Discover <span className="font-light">The Collections</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <a
              key={category.label}
              href="#shop"
              className="group relative block overflow-hidden bg-gray-200 shadow-sm"
            >
              <img
                src={category.image}
                alt={category.label}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-white/90 px-5 py-4 dark:bg-gray-950/90">
                <h3 className="font-sans text-lg font-bold uppercase tracking-wide text-ink dark:text-white">
                  {category.label}
                </h3>
                <p className="text-sm text-mist">{category.count}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
