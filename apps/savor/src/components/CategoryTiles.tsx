import { categories, categoriesLabel, imgUrl } from '../data'

export function CategoryTiles() {
  return (
    <section aria-label={categoriesLabel} className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {categories.map((category) => (
          <a
            key={category.name}
            href={`#${category.name.toLowerCase()}`}
            className="group relative block aspect-square overflow-hidden"
          >
            <img
              src={imgUrl(category.seed, 400, 400)}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <h2 className="font-serif text-2xl font-bold text-white">{category.name}</h2>
              <p className="mt-1 text-xs font-bold uppercase tracking-[2px] text-white/80">
                {category.posts}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
