import { Building2, Hammer, Home, LayoutTemplate, Palette, Sofa } from 'lucide-react'

const services = [
  {
    title: 'Residential Design',
    blurb:
      'Bespoke interiors for homes of every scale, from full renovations to curated styling, designed around how you actually live.',
    icon: Home,
  },
  {
    title: 'Commercial Design',
    blurb:
      'Workplaces and retail environments that express brand identity while keeping employees and customers comfortable.',
    icon: Building2,
  },
  {
    title: 'Hospitality Design',
    blurb:
      'Hotels, restaurants, and lounges with memorable atmospheres that turn first-time guests into loyal regulars.',
    icon: Sofa,
  },
  {
    title: 'Color & Material Consulting',
    blurb:
      'Palette, finish, and material guidance grounded in light, texture, and longevity — so every surface earns its place.',
    icon: Palette,
  },
  {
    title: 'Space Planning',
    blurb:
      'Thoughtful layouts that maximize flow, storage, and natural light, whether we are working with one room or an entire floor.',
    icon: LayoutTemplate,
  },
  {
    title: 'Renovation Management',
    blurb:
      'End-to-end oversight of contractors, permits, and schedules, keeping complex renovations on time and on budget.',
    icon: Hammer,
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400">
            Services
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
            Comprehensive Design Services
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            From the first sketch to the final styling, our studio covers every stage of the design
            journey.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="rounded-xl border border-gray-200 bg-white p-7 transition-shadow hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-400">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {service.blurb}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
