import { Building2, Home, Ruler } from 'lucide-react'
import { Card } from '@free-react-templates/ui'

const services = [
  {
    title: 'Commercial Architecture Design',
    blurb: 'Offices, retail and mixed-use buildings planned around flow and daylight.',
    icon: Building2,
  },
  {
    title: 'Residential Architecture Design',
    blurb: 'Homes that balance privacy, comfort, and curb appeal from the first sketch.',
    icon: Home,
  },
  {
    title: 'Architecture Design',
    blurb: 'Full design guidance — concept, detailing, and construction documentation.',
    icon: Ruler,
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-lavender py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand">
            Our Expertise
          </p>
          <span aria-hidden="true" className="mx-auto mt-3 block h-1 w-14 bg-brand" />
          <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-tight text-ink dark:text-white">
            What We Do?
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="rounded-none border border-gray-100 bg-white p-8 text-center shadow-sm transition-colors hover:border-brand dark:border-gray-800 dark:bg-gray-950"
            >
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                <service.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-6 font-display text-xl font-bold uppercase tracking-wide text-ink dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-400">
                {service.blurb}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
