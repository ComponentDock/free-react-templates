const categories = [
  { name: "Women's", seed: 'shoplane-women' },
  { name: 'Accessories', seed: 'shoplane-accessories' },
  { name: "Men's", seed: 'shoplane-men' },
]

export function CategoryBanners() {
  return (
    <section className="bg-white py-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#shop"
              className="group relative flex h-64 items-center justify-center overflow-hidden rounded bg-cover bg-center transition-transform hover:scale-[1.02]"
              style={{ backgroundImage: `url(https://picsum.photos/seed/${cat.seed}/600/400)` }}
            >
              <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40" />
              <span className="relative rounded bg-white px-6 py-2 text-sm font-semibold uppercase tracking-wide text-gray-900 shadow transition-colors group-hover:bg-coral-500 group-hover:text-white">
                {cat.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
