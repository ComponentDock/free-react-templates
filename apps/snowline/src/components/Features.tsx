const categories = [
  { label: 'Shop for Men', image: 'https://picsum.photos/seed/snowline-men/400/500' },
  { label: 'Shop for Women', image: 'https://picsum.photos/seed/snowline-women/400/500' },
  { label: 'Shop for Shoes', image: 'https://picsum.photos/seed/snowline-shoes/400/500' },
] as const

export function Features() {
  return (
    <section id="shop" className="overflow-hidden py-4">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 sm:px-6 md:grid-cols-3">
        {categories.map((cat) => (
          <div key={cat.label} className="group relative overflow-hidden rounded-sm">
            <img
              src={cat.image}
              alt={cat.label}
              className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-80 md:h-96"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/40">
              <span className="translate-y-4 rounded bg-white px-6 py-2 text-sm font-semibold text-heading opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {cat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
