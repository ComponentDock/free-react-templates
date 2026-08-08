import {
  BarChart3,
  Briefcase,
  Cloud,
  Code2,
  Megaphone,
  Palette,
  ShieldCheck,
  Users,
  type LucideIcon,
} from 'lucide-react'

const categories: ReadonlyArray<{ name: string; icon: LucideIcon; color: string }> = [
  {
    name: 'Software Engineering',
    icon: Code2,
    color: 'bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-300',
  },
  {
    name: 'Creative Design',
    icon: Palette,
    color: 'bg-pink-100 text-pink-600 dark:bg-pink-900/40 dark:text-pink-300',
  },
  {
    name: 'Digital Marketing',
    icon: Megaphone,
    color: 'bg-cyan-100 text-cyan-600 dark:bg-cyan-900/40 dark:text-cyan-300',
  },
  {
    name: 'Data & Analytics',
    icon: BarChart3,
    color: 'bg-violet-100 text-violet-600 dark:bg-violet-900/40 dark:text-violet-300',
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    color: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-300',
  },
  {
    name: 'Leadership & Management',
    icon: Users,
    color: 'bg-amber-100 text-amber-600 dark:bg-amber-900/40 dark:text-amber-300',
  },
  {
    name: 'Cybersecurity',
    icon: ShieldCheck,
    color: 'bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-300',
  },
  {
    name: 'Product Management',
    icon: Briefcase,
    color: 'bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-300',
  },
] as const

export function Categories() {
  return (
    <section id="categories" className="bg-gray-100/50 py-20 dark:bg-gray-900/50 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Browse by Category
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Explore our diverse catalog of courses across every in-demand field.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <a
                key={category.name}
                href="#courses"
                className="card-hover group rounded-2xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
              >
                <span
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${category.color}`}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-gray-900 dark:text-white">
                  {category.name}
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">12 courses</p>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
