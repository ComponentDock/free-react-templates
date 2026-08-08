import {
  Code2,
  GraduationCap,
  HeartPulse,
  Megaphone,
  Palette,
  Target,
  Wallet,
  Wrench,
  type LucideIcon,
} from 'lucide-react'

interface Category {
  name: string
  count: number
  icon: LucideIcon
  tile: string
}

const categories: Category[] = [
  {
    name: 'Technology',
    count: 840,
    icon: Code2,
    tile: 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-400',
  },
  {
    name: 'Design',
    count: 320,
    icon: Palette,
    tile: 'bg-pink-100 text-pink-600 dark:bg-pink-900/50 dark:text-pink-400',
  },
  {
    name: 'Marketing',
    count: 275,
    icon: Megaphone,
    tile: 'bg-orange-100 text-orange-600 dark:bg-orange-900/50 dark:text-orange-400',
  },
  {
    name: 'Finance',
    count: 190,
    icon: Wallet,
    tile: 'bg-accent-100 text-accent-600 dark:bg-accent-900/50 dark:text-accent-400',
  },
  {
    name: 'Healthcare',
    count: 210,
    icon: HeartPulse,
    tile: 'bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-400',
  },
  {
    name: 'Education',
    count: 165,
    icon: GraduationCap,
    tile: 'bg-purple-100 text-purple-600 dark:bg-purple-900/50 dark:text-purple-400',
  },
  {
    name: 'Sales',
    count: 230,
    icon: Target,
    tile: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-400',
  },
  {
    name: 'Engineering',
    count: 310,
    icon: Wrench,
    tile: 'bg-teal-100 text-teal-600 dark:bg-teal-900/50 dark:text-teal-400',
  },
] as const

export function Categories() {
  return (
    <section id="categories" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            Explore by Category
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Browse thousands of openings across every industry and role.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <a
              key={category.name}
              href="#jobs"
              className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-primary-300 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
            >
              <span
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${category.tile}`}
              >
                <category.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                {category.name}
              </h3>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                {category.count} open positions
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
