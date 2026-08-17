import { categories } from '../data'

export function Categories() {
  return (
    <section
      aria-label="Browse categories"
      className="relative z-10 -mt-20 bg-mist px-4 pb-16 sm:px-6"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {categories.map((category) => {
          const Icon = category.icon
          const active = category.active ?? false
          return (
            <a
              key={category.name}
              href="#listing"
              className={`group relative flex flex-col items-center rounded-[4px] p-8 text-center shadow-[0_5px_14px_-6px_rgba(0,0,0,0.07)] transition-colors ${
                active
                  ? 'bg-brand text-white'
                  : 'bg-white text-neutral-900 hover:bg-brand hover:text-white'
              }`}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-10 -right-10 h-[200px] w-[200px] rounded-full bg-white/10 opacity-0 transition-opacity group-hover:opacity-100"
              />
              <Icon
                aria-hidden="true"
                className={`h-[60px] w-[60px] transition-colors ${
                  active ? 'text-white' : 'text-brand group-hover:text-white'
                }`}
                strokeWidth={1.2}
              />
              <h2 className="mt-4 text-[20px] font-semibold">{category.name}</h2>
              <p className="mt-2 text-[14px] font-semibold uppercase tracking-wide text-black/50 transition-colors group-hover:text-white/80">
                <span
                  className={`mr-1 rounded-[4px] px-[5px] py-[2px] transition-colors ${
                    active
                      ? 'bg-white/20 text-white'
                      : 'bg-black/5 text-brand group-hover:bg-white/20 group-hover:text-white'
                  }`}
                >
                  {category.count}
                </span>
                Listings
              </p>
            </a>
          )
        })}
      </div>
    </section>
  )
}
