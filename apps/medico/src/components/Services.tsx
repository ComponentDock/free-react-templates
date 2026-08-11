import { Activity, HeartPulse, Pill, Stethoscope } from 'lucide-react'
import { services, servicesHeading, type Service } from '../data'

const icons: Record<Service['icon'], typeof Stethoscope> = {
  stethoscope: Stethoscope,
  heart: HeartPulse,
  activity: Activity,
  pill: Pill,
}

export function Services() {
  return (
    <section className="bg-section py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-4xl font-bold text-heading sm:text-5xl">
            {servicesHeading}
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = icons[service.icon]
            return (
              <article key={service.icon} className="text-center">
                <span className="mx-auto flex h-[50px] w-[50px] items-center justify-center rounded-full bg-icon-circle text-feature-title">
                  <Icon aria-hidden="true" className="h-6 w-6" />
                </span>
                <h4 className="mt-6 text-2xl font-medium text-feature-title">{service.title}</h4>
                <p className="mt-3 text-sm leading-6 text-muted">{service.blurb}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
