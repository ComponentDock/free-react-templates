import { categories } from '../data'

/** Strip of five photo category cards with bottom-centered labels. */
export function Categories() {
  return (
    <section aria-label="Shop by category" className="bg-white py-10">
      <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-5">
        {categories.map((category) => (
          <a
            key={category.label + category.image}
            href="#shop"
            onClick={(event) => event.preventDefault()}
            className="group relative block h-[270px] overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${category.image})` }}
          >
            <span className="absolute inset-x-0 bottom-5 text-center text-lg font-bold text-ink">
              {category.label}
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
