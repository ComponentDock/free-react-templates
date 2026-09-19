const categories = [
  {
    name: "Women's",
    image: 'https://picsum.photos/seed/riviere-women/400/500',
    href: '#women',
  },
  {
    name: 'Winter Clothing',
    image: 'https://picsum.photos/seed/riviere-winter/400/500',
    href: '#winter',
  },
  {
    name: "Men's",
    image: 'https://picsum.photos/seed/riviere-men/400/500',
    href: '#men',
  },
  {
    name: 'Accessories',
    image: 'https://picsum.photos/seed/riviere-acc/400/500',
    href: '#accessories',
  },
]

export function ShopByCategory() {
  return (
    <section className="bg-white py-16 dark:bg-gray-950" id="categories">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="font-[var(--font-heading)] mb-10 text-center text-3xl font-bold text-ink dark:text-white">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={cat.href}
              className="group relative block h-64 overflow-hidden rounded-lg md:h-80"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-4 left-4 text-lg font-semibold text-white">
                {cat.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
