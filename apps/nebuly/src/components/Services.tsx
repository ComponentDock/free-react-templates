import type { ComponentType } from 'react'
import { Cloud, Database, Headset, Server, Settings, Shield } from 'lucide-react'
import { SERVICES, type ServiceIcon } from '../data'

/* Cloud Services — light-gray band with six icon cards; icons map the
   original flaticon set to lucide equivalents in accent green. */

const iconMap: Record<
  ServiceIcon,
  ComponentType<{ className?: string; 'aria-hidden'?: boolean }>
> = {
  cloud: Cloud,
  server: Server,
  headset: Headset,
  shield: Shield,
  database: Database,
  settings: Settings,
}

export function Services() {
  return (
    <section id="services-section" className="bg-light py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[32px] font-bold text-navy dark:text-white sm:text-[40px]">
          {SERVICES.heading}
        </h2>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.items.map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <div
                key={service.title}
                className="rounded-lg bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                  <Icon className="h-8 w-8 text-accent" aria-hidden={true} />
                </div>
                <h3 className="mt-6 text-[20px] font-semibold text-navy dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-gray-500">{service.blurb}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
