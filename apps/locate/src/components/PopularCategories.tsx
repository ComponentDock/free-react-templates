import { Hotel, Calendar, Flower2, Store, Utensils, Bike } from 'lucide-react'

interface Category {
  icon: React.ElementType
  name: string
  count: string
}

const categories: Category[] = [
  { icon: Hotel, name: 'Hotels', count: '4,892' },
  { icon: Calendar, name: 'Events', count: '482' },
  { icon: Flower2, name: 'Spa', count: '194' },
  { icon: Store, name: 'Stores', count: '1,472' },
  { icon: Utensils, name: 'Restaurants', count: '439' },
  { icon: Bike, name: 'Other', count: '692' },
]

export function PopularCategories() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-light text-primary-500">Popular Categories</h2>
          <p className="mx-auto max-w-lg text-gray-500">
            Browse through our most popular categories to find exactly what you&apos;re looking for.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <a
                key={cat.name}
                href="#"
                className="flex flex-col items-center rounded-lg border border-gray-100 bg-white p-6 text-center transition-shadow hover:shadow-md"
              >
                <Icon size={32} className="mb-3 text-primary-500" />
                <span className="mb-1 text-sm font-semibold text-gray-800">{cat.name}</span>
                <span className="text-xs text-gray-400">{cat.count}</span>
              </a>
            )
          })}
        </div>
        <div className="mt-8 text-center">
          <a
            href="#"
            className="inline-block rounded border-2 border-primary-500 px-8 py-2 text-sm font-semibold text-primary-500 transition-colors hover:bg-primary-500 hover:text-white"
          >
            View All Categories
          </a>
        </div>
      </div>
    </section>
  )
}
