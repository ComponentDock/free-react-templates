import { Hotel, UtensilsCrossed, Coffee, ShoppingBag, Sparkles, Dumbbell } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'

interface CategoryItem {
  name: string
  count: number
  Icon: ComponentType<SVGProps<SVGSVGElement>>
}

const categories: CategoryItem[] = [
  { name: 'Hotel', count: 20, Icon: Hotel },
  { name: 'Restaurant', count: 20, Icon: UtensilsCrossed },
  { name: 'Cafe', count: 20, Icon: Coffee },
  { name: 'Shopping Mall', count: 20, Icon: ShoppingBag },
  { name: 'Beauty & Spa', count: 20, Icon: Sparkles },
  { name: 'Fitness', count: 20, Icon: Dumbbell },
]

export function Categories() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2
            className="text-3xl font-bold text-heading"
            style={{ fontFamily: 'var(--font-family-heading)' }}
          >
            We help you to find
          </h2>
          <p className="mt-2 text-text-muted">Explore Categories</p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#"
              className="group flex flex-col items-center rounded-lg border border-border-light bg-bg-light p-6 text-center transition hover:border-brand hover:shadow-md"
            >
              <cat.Icon className="mb-3 h-10 w-10 text-brand" aria-hidden="true" />
              <h3 className="text-sm font-semibold text-heading group-hover:text-brand">
                {cat.name}
              </h3>
              <p className="mt-1 text-xs text-text-muted">{cat.count} Listing</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
