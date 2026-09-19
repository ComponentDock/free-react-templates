const CATEGORIES = [
  { name: 'Fashion', image: 'https://picsum.photos/seed/shopbox-cat1/400/500' },
  { name: 'Accessories', image: 'https://picsum.photos/seed/shopbox-cat2/400/500' },
  { name: 'Footwear', image: 'https://picsum.photos/seed/shopbox-cat3/400/500' },
  { name: 'Lifestyle', image: 'https://picsum.photos/seed/shopbox-cat4/400/500' },
]

export function FeaturedCategories() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-10 text-center text-2xl font-bold text-primary-500">Shop by Category</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {CATEGORIES.map((cat) => (
            <a key={cat.name} href="#" className="group relative block overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 transition group-hover:bg-black/40" />
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
