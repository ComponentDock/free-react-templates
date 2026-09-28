const categories = [
  {
    title: 'Strawberry Cake',
    subtitle: 'Simple & Delicios',
    image: 'https://picsum.photos/seed/palatable-cat1/800/400',
  },
  {
    title: 'Chinesse Noodles',
    subtitle: 'Simple & Delicios',
    image: 'https://picsum.photos/seed/palatable-cat2/800/400',
  },
]

export function TopCategories() {
  return (
    <section className="py-20" aria-label="Top categories">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="relative h-64 lg:h-80 overflow-hidden group">
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-overlay" />
              <div className="relative z-10 h-full flex flex-col items-start justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-1">{cat.title}</h3>
                <h6 className="text-white/70 text-sm uppercase tracking-wider mb-4">
                  {cat.subtitle}
                </h6>
                <a
                  href="#"
                  className="inline-block bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 text-sm uppercase tracking-wider transition-colors"
                >
                  See Full Recipe
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
