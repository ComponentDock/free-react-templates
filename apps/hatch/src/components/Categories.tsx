import { Briefcase, Home, Wrench } from 'lucide-react'

const categories = [
  {
    title: 'Maintenance',
    icon: Wrench,
    blurb: 'Keep your app healthy with regular upkeep, patches, and performance tuning.',
  },
  {
    title: 'Residental Service',
    icon: Home,
    blurb: 'A cozy, personal touch for household and family-friendly applications.',
  },
  {
    title: 'Commercial Service',
    icon: Briefcase,
    blurb: 'Scalable tooling built for teams, dashboards, and business workloads.',
  },
] as const

export function Categories() {
  return (
    <section id="categories" className="bg-paper py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-night dark:text-white sm:text-4xl">
            Latest News from all categories
          </h2>
          <p className="mt-4 leading-relaxed text-muted dark:text-gray-400">
            Who are in extremely love with eco friendly system.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <article
                key={category.title}
                className="bg-white p-10 text-center shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-transform hover:-translate-y-1 dark:bg-gray-900"
              >
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-primary-500 to-azure text-white">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold text-night dark:text-white">
                  {category.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted dark:text-gray-400">
                  {category.blurb}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
