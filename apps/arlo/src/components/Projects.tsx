import { BarChart3, Layout, ShoppingCart, Smartphone } from 'lucide-react'

const projects = [
  {
    title: 'E-commerce Platform',
    blurb:
      'A full-featured online store with real-time inventory, payment processing, and a headless architecture.',
    icon: ShoppingCart,
  },
  {
    title: 'Design System',
    blurb:
      'A token-driven component library powering consistent, accessible UI across five product teams.',
    icon: Layout,
  },
  {
    title: 'Analytics Dashboard',
    blurb: 'Real-time dashboards with streaming data, drill-down reports, and shareable insights.',
    icon: BarChart3,
  },
  {
    title: 'Mobile Fitness App',
    blurb:
      'A cross-platform fitness companion with workout plans, progress tracking, and social challenges.',
    icon: Smartphone,
  },
]

export function Projects() {
  return (
    <section id="projects" className="bg-white py-20 dark:bg-gray-950 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Featured Work
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            A selection of projects that showcase my approach to design and development.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <article
                key={project.title}
                className="group rounded-2xl border border-gray-200 bg-gray-50 p-8 transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-400">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {project.blurb}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
