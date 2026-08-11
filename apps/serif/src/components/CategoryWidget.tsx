import { categories, categoryTitle } from '../data'

export function CategoryWidget() {
  return (
    <div className="bg-widget px-[30px] py-12">
      <h2 className="relative pb-3 text-xl font-bold text-ink after:absolute after:bottom-0 after:left-0 after:h-[4px] after:w-[20%] after:bg-brand">
        {categoryTitle}
      </h2>
      <ul className="mt-6 flex flex-col gap-[15px]">
        {categories.map((category) => (
          <li key={category.name}>
            <a
              href="#"
              className="flex items-center justify-between bg-white px-5 py-[13px] text-sm font-light text-cat transition-all hover:shadow-[0_10px_30px_rgba(153,153,153,0.2)] hover:text-brand"
            >
              <span>{category.name}</span>
              <span>({category.count})</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
