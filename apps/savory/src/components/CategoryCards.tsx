import { categories, postImage } from '../data'

export function CategoryCards() {
  return (
    <section aria-label="Recipe categories" className="mx-auto max-w-7xl px-4 pt-14 pb-4 sm:px-6">
      <div className="grid gap-6 md:grid-cols-3">
        {categories.map((category) => (
          <a
            key={category.title}
            href="#categories"
            className="group relative block overflow-hidden"
          >
            <img
              src={postImage(category.seed, 600, 500)}
              alt={category.alt}
              className="h-80 w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 flex justify-center pb-6">
              <div className="w-[calc(100%-60px)] bg-white py-4 text-center shadow-md transition-colors group-hover:bg-brand">
                <p className="text-xs font-semibold tracking-widest text-brand uppercase transition-colors group-hover:text-white">
                  {category.tag}
                </p>
                <h3 className="mt-1 font-display text-xl text-ink transition-colors group-hover:text-white">
                  {category.title}
                </h3>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
