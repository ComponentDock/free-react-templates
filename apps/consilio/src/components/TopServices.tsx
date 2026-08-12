import { Scale, Shield, Target, type LucideIcon } from 'lucide-react'

interface Service {
  icon: LucideIcon
  title: string
  blurb: string
}

const services: Service[] = [
  {
    icon: Target,
    title: 'Strategy Planning',
    blurb:
      'We build sharp, executable growth strategies grounded in market data and your unique competitive position.',
  },
  {
    icon: Shield,
    title: 'Insurance Service',
    blurb:
      'Protect your operations and people with risk assessments and coverage programs tailored to your industry.',
  },
  {
    icon: Scale,
    title: 'Audit & Evaluation',
    blurb:
      'Independent audits and performance evaluations that reveal what works, what leaks, and what to do next.',
  },
]

export function TopServices() {
  return (
    <section aria-labelledby="top-services-heading" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12">
          <p className="mb-3 flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-eyebrow">
            <span className="h-0.5 w-14 bg-eyebrow" aria-hidden="true" />
            Our Top Services
          </p>
          <h2
            id="top-services-heading"
            className="font-display text-3xl font-bold text-brand-deep dark:text-white"
          >
            Our Best Services
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded border border-gray-100 p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <service.icon
                className="mb-5 h-10 w-10 text-accent transition-transform group-hover:scale-110"
                aria-hidden="true"
              />
              <h3 className="mb-3 font-display text-lg font-bold text-brand-deep dark:text-white">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-body dark:text-gray-400">
                {service.blurb}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
