import { categories } from '../data'

export function Categories() {
  return (
    <section id="categories" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-12 text-center">
          <span className="mb-3 block font-script text-3xl text-brand">Most popular</span>
          <h2 className="text-3xl font-semibold text-navy md:text-5xl">Featured Categories</h2>
        </div>

        {/* Category grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.name}
                className="group cursor-pointer rounded-xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:border-brand/20 hover:shadow-md"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 transition-colors group-hover:bg-brand/20">
                  <Icon
                    aria-hidden="true"
                    className="h-7 w-7 text-brand transition-transform group-hover:scale-110"
                  />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-navy">{cat.name}</h3>
                <p className="text-[14px] text-muted">{cat.count} Listings</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
