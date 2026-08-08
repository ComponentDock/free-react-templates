import {
  ArrowRight,
  BarChart3,
  Camera,
  Cloud,
  Code2,
  Megaphone,
  Palette,
  Smartphone,
  Users,
} from 'lucide-react'

const categories = [
  { icon: Code2, title: 'Web Development', count: '156 courses' },
  { icon: BarChart3, title: 'Data Science', count: '98 courses' },
  { icon: Palette, title: 'UI/UX Design', count: '124 courses' },
  { icon: Users, title: 'Business', count: '87 courses' },
  { icon: Megaphone, title: 'Digital Marketing', count: '76 courses' },
  { icon: Smartphone, title: 'Mobile Development', count: '64 courses' },
  { icon: Cloud, title: 'Cloud & DevOps', count: '112 courses' },
  { icon: Camera, title: 'Photography', count: '43 courses' },
]

export function Categories() {
  return (
    <section id="categories" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-primary-100 px-3 py-1 text-sm font-semibold text-primary-700 dark:bg-primary-900/40 dark:text-primary-300">
            Explore Our Top Categories
          </span>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Browse by category
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Find the perfect course across eight in-demand fields.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <a
              key={category.title}
              href="#courses"
              className="group flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:border-primary-200 hover:shadow-md dark:border-gray-800 dark:bg-gray-900 dark:hover:border-primary-800"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white dark:bg-primary-900/40 dark:text-primary-400">
                <category.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <span className="flex-1">
                <span className="block font-bold text-gray-900 dark:text-white">
                  {category.title}
                </span>
                <span className="block text-sm text-gray-500 dark:text-gray-400">
                  {category.count}
                </span>
              </span>
              <ArrowRight
                className="h-4 w-4 text-gray-300 transition-colors group-hover:text-primary-600 dark:text-gray-600"
                aria-hidden="true"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
