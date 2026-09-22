import { Stethoscope, Bone, Hand } from 'lucide-react'
import { services, servicesTitle } from '../data'

const iconMap = {
  Stethoscope,
  Bone,
  Hand,
} as const

export function Services() {
  return (
    <section id="services" className="bg-alt-bg py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-heading sm:text-4xl">{servicesTitle}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-body">
            We offer a range of therapeutic services tailored to your recovery needs.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            return (
              <div
                key={service.title}
                className="rounded-lg bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                  <Icon aria-hidden="true" className="h-8 w-8 text-brand" />
                </div>
                <h3 className="text-xl font-semibold text-heading">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-body">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
