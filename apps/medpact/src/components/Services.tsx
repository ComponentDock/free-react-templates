import { HeartPulse, Stethoscope, Brain, Bone, type LucideIcon } from 'lucide-react'
import { servicesTitle, services, type Service } from '../data'

const iconMap: Record<Service['icon'], LucideIcon> = {
  'heart-pulse': HeartPulse,
  stethoscope: Stethoscope,
  brain: Brain,
  bone: Bone,
}

export function Services() {
  return (
    <section id="services" className="bg-section-bg py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <h2 className="text-center font-heading text-3xl font-bold text-heading sm:text-4xl">
          {servicesTitle}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[15px] text-muted">
          We provide a wide range of medical services to meet your healthcare needs.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <div
                key={service.title}
                className="rounded-lg border border-card-border bg-white p-6 text-center transition-shadow hover:shadow-lg"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                  <Icon aria-hidden="true" className="h-8 w-8 text-brand" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-heading">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
