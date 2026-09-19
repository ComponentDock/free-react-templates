import { ChevronRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const categories = [
  { name: 'Running', count: 48, image: 'https://picsum.photos/seed/lacecraft-running/400/400' },
  { name: 'Sneakers', count: 86, image: 'https://picsum.photos/seed/lacecraft-sneakers/400/400' },
  {
    name: 'Basketball',
    count: 32,
    image: 'https://picsum.photos/seed/lacecraft-basketball/400/400',
  },
  { name: 'Sandals', count: 24, image: 'https://picsum.photos/seed/lacecraft-sandals/400/400' },
]

export function Categories() {
  return (
    <section className="bg-white py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
            Shop by Category
          </h2>
          <a
            href="#categories-all"
            className="flex items-center gap-1 text-sm font-medium text-primary-500 hover:text-primary-600"
          >
            View All
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href={`#category-${cat.name.toLowerCase()}`}
              className={cn(
                'group relative overflow-hidden rounded-2xl',
                'bg-gray-100 dark:bg-gray-900',
              )}
            >
              <img
                src={cat.image}
                alt={`${cat.name} shoes`}
                className="aspect-square w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="font-display text-lg font-bold text-white">{cat.name}</h3>
                <p className="text-sm text-gray-200">{cat.count} products</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
