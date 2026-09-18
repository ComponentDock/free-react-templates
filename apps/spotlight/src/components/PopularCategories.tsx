import {
  Building2,
  Music,
  Dumbbell,
  ShoppingBag,
  UtensilsCrossed,
  MoreHorizontal,
} from 'lucide-react'

const categories = [
  { icon: Building2, name: 'Apartments', count: '3,921' },
  { icon: Music, name: 'Events', count: '398' },
  { icon: Dumbbell, name: 'Fitness', count: '1,229' },
  { icon: ShoppingBag, name: 'Department Store', count: '32,891' },
  { icon: UtensilsCrossed, name: 'Restaurants', count: '29,221' },
  { icon: MoreHorizontal, name: 'Other', count: '219' },
]

export function PopularCategories() {
  return (
    <section className="bg-light-bg py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-light text-primary">Popular Categories</h2>
          <p className="text-body">Browse by category</p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat) => {
            const Icon = cat.icon
            return (
              <a
                key={cat.name}
                href="#"
                className="flex flex-col items-center rounded-lg border border-border bg-white p-6 text-center transition-all hover:border-primary hover:shadow-md"
              >
                <Icon className="mb-3 h-8 w-8 text-primary" />
                <span className="mb-1 text-sm font-semibold text-heading">{cat.name}</span>
                <span className="text-xs text-body">{cat.count}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
