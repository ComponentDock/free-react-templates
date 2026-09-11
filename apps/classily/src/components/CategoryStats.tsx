import { Home, Briefcase, Car, Laptop, Sofa, Shirt } from 'lucide-react'
import type { ElementType } from 'react'

interface CategoryItem {
  name: string
  count: number
  icon: ElementType
}

const categories: CategoryItem[] = [
  { name: 'Real Estate', count: 245, icon: Home },
  { name: 'Jobs', count: 189, icon: Briefcase },
  { name: 'Vehicles', count: 312, icon: Car },
  { name: 'Electronics', count: 156, icon: Laptop },
  { name: 'Furniture', count: 98, icon: Sofa },
  { name: 'Fashion', count: 203, icon: Shirt },
]

export function CategoryStats() {
  return (
    <section id="about" className="bg-white py-16 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <div
                key={category.name}
                className="flex flex-col items-center gap-3 rounded-lg border border-gray-200 p-6 text-center transition-colors hover:border-brand dark:border-gray-800 dark:hover:border-brand"
              >
                <Icon className="h-8 w-8 text-brand" aria-hidden="true" />
                <span className="text-sm font-medium text-ink dark:text-white">
                  {category.name}
                </span>
                <span className="rounded-full border border-brand bg-paper px-3 py-1 text-xs font-semibold text-brand dark:bg-gray-800">
                  {category.count}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
