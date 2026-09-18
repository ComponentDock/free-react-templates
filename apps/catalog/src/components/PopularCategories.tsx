import { Car, Sofa, Home, BookOpen, Tv, Pizza } from 'lucide-react'

const categories = [
  { icon: Car, name: 'Cars and Vehicles', count: 1921 },
  { icon: Sofa, name: 'Furniture', count: 2339 },
  { icon: Home, name: 'Real Estate', count: 4398 },
  { icon: BookOpen, name: 'Books and Magazines', count: 3298 },
  { icon: Tv, name: 'Electronics', count: 2932 },
  { icon: Pizza, name: 'Other', count: 183 },
]

export function PopularCategories() {
  return (
    <section className="py-12 md:py-20" id="pages">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 className="text-xl font-bold text-primary-500">Popular Categories</h2>
          <p className="mt-1 text-sm text-muted">Browse by category</p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <a
                key={cat.name}
                href="#"
                className="group rounded-lg bg-white p-6 text-center shadow-sm transition-all hover:scale-105 hover:bg-primary-500 hover:shadow-lg"
              >
                <Icon
                  size={40}
                  className="mx-auto mb-3 text-primary-500 transition group-hover:text-white"
                />
                <span className="mb-2 block text-sm text-body transition group-hover:text-white">
                  {cat.name}
                </span>
                <span className="inline-block rounded-full bg-card-bg px-3 py-1 text-xs text-ink transition group-hover:bg-primary-600 group-hover:text-white">
                  {cat.count.toLocaleString()}
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
