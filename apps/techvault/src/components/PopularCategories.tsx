const CATEGORIES = [
  { name: 'Computers', image: 'https://picsum.photos/seed/techvault-cat1/300/300' },
  { name: 'Laptops', image: 'https://picsum.photos/seed/techvault-cat2/300/300' },
  { name: 'Cameras', image: 'https://picsum.photos/seed/techvault-cat3/300/300' },
  { name: 'Smartphones', image: 'https://picsum.photos/seed/techvault-cat4/300/300' },
]

export function PopularCategories() {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 font-display text-2xl font-bold text-ink">Popular Categories</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {CATEGORIES.map((cat) => (
            <a key={cat.name} href="#" className="group relative overflow-hidden rounded-lg">
              <img
                src={cat.image}
                alt={cat.name}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="font-display text-lg font-bold text-white">{cat.name}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
