import { Home, Building2, Factory, TreePine } from 'lucide-react'
import type { ReactNode } from 'react'

interface CategoryCard {
  name: string
  count: string
  icon: ReactNode
}

const categories: CategoryCard[] = [
  {
    name: 'Land',
    count: '24 Properties',
    icon: <TreePine className="h-10 w-10 text-primary-500" />,
  },
  {
    name: 'Residential',
    count: '48 Properties',
    icon: <Home className="h-10 w-10 text-primary-500" />,
  },
  {
    name: 'Commercial',
    count: '32 Properties',
    icon: <Building2 className="h-10 w-10 text-primary-500" />,
  },
  {
    name: 'Industrial',
    count: '16 Properties',
    icon: <Factory className="h-10 w-10 text-primary-500" />,
  },
]

export function Categories() {
  return (
    <section id="services" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary-500">
            Our Categories
          </p>
          <h2 className="text-3xl font-extrabold text-ink">Explore Our Categories &amp; Places</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="group flex flex-col items-center rounded-lg border border-gray-200 bg-white p-8 text-center shadow-sm transition-all hover:border-primary-500 hover:shadow-md"
            >
              <div className="mb-4 rounded-full bg-primary-50 p-4 transition-colors group-hover:bg-primary-100">
                {cat.icon}
              </div>
              <h3 className="mb-1 text-lg font-bold text-ink">{cat.name}</h3>
              <p className="text-sm text-smoke">{cat.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
