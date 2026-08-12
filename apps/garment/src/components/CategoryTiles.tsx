import { categories } from '../data'

export function CategoryTiles() {
  return (
    <section aria-label="Shop by category" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-3 sm:px-6">
        {categories.map((category) => (
          <a
            key={category.label}
            href={`#${category.label.toLowerCase()}`}
            className="group relative block h-[240px] overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${category.image})` }}
          >
            <span className="absolute inset-0 bg-white/0 transition-colors group-hover:bg-white/60 dark:group-hover:bg-black/40" />
            <span className="absolute inset-0 flex items-center justify-center font-display text-3xl font-bold uppercase text-ink dark:text-white">
              {category.label}
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
