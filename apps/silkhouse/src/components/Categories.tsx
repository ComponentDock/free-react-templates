const categories = [
  { name: 'Sunglasses', image: 'https://picsum.photos/seed/silkhouse-cat-1/400/400' },
  { name: 'Watches', image: 'https://picsum.photos/seed/silkhouse-cat-2/400/400' },
  { name: 'Hoodies', image: 'https://picsum.photos/seed/silkhouse-cat-3/400/400' },
  { name: 'Fashion', image: 'https://picsum.photos/seed/silkhouse-cat-4/400/400' },
]

export function Categories() {
  return (
    <section aria-label="Categories" className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#shop"
              className="group relative block aspect-square overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/40">
                <span className="translate-y-4 text-lg font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {cat.name}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
