import { Building2, Hammer, Home, Leaf, Paintbrush, Settings } from 'lucide-react'

const services = [
  {
    title: 'Residential Construction',
    description:
      'Custom homes built to your specifications. From luxury estates to modern family homes, we bring your dream residence to life.',
    icon: Home,
  },
  {
    title: 'Commercial Buildings',
    description:
      'Office complexes, retail spaces, and industrial facilities designed for functionality, efficiency, and lasting durability.',
    icon: Building2,
  },
  {
    title: 'Renovation & Remodeling',
    description:
      'Transform your existing space with expert renovations. We modernize structures while preserving their character and value.',
    icon: Hammer,
  },
  {
    title: 'Interior Design',
    description:
      'Complete interior solutions from space planning to material selection, creating environments that are both beautiful and functional.',
    icon: Paintbrush,
  },
  {
    title: 'Project Management',
    description:
      'End-to-end project oversight with transparent budgets, reliable timelines, and a single accountable point of contact.',
    icon: Settings,
  },
  {
    title: 'Green Building',
    description:
      'Sustainable construction practices with energy-efficient materials and environmentally responsible building methods.',
    icon: Leaf,
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            What We Build
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            From foundation to finish, we offer comprehensive construction services tailored to your
            unique vision and requirements.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:border-gray-800 dark:bg-gray-800"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
