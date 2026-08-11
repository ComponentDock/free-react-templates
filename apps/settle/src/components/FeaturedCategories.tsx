import { CATEGORIES, FEATURED_EXPLORE, FEATURED_TITLE } from '../data'

/* feature_part — h2 "Featured Category" + 4 image cards (~400px tall, bg
   #f8fbff) each with a title and an "Explore Now" link. */
export function FeaturedCategories() {
  return (
    <section className="bg-white py-16 dark:bg-ink">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-[26px] font-bold text-ink dark:text-white">
          {FEATURED_TITLE}
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((category) => (
            <a
              key={category.seed}
              href="#shop"
              className="group block rounded-[5px] bg-paper p-3 transition-shadow hover:shadow-lg dark:bg-white/5"
            >
              <div className="overflow-hidden rounded-[5px]">
                <img
                  src={`https://picsum.photos/seed/${category.seed}/600/760`}
                  alt={category.title}
                  className="h-[380px] w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-[17px] font-semibold text-ink dark:text-white">
                {category.title}
              </h3>
              <span className="mt-1 inline-block text-[13px] font-medium tracking-[0.08em] text-brand uppercase">
                {FEATURED_EXPLORE}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
