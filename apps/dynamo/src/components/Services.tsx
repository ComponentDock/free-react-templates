import { Cog, HardHat, Leaf, Zap, Droplets, Factory, type LucideIcon } from 'lucide-react'
import { services } from '../data'

const iconMap: Record<string, LucideIcon> = {
  Cog,
  HardHat,
  Leaf,
  Zap,
  Droplets,
  Factory,
}

export function Services() {
  return (
    <section data-section="services" className="relative z-10 bg-white">
      <div className="mx-auto max-w-[1227px] px-4">
        <div
          data-services-warp
          className="-mt-24 bg-white px-6 pb-8 pt-14 shadow-[0_10px_40px_rgba(0,0,0,0.12)] sm:px-10"
        >
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const Icon = iconMap[service.icon]!
              return (
                <div key={service.title} data-service-item className="text-center">
                  <div className="mx-auto flex h-[61px] w-[61px] items-center justify-center bg-primary-600 text-white">
                    <Icon className="h-8 w-8" aria-hidden="true" />
                  </div>
                  <h5 className="mt-5 text-lg font-semibold text-navy-900">{service.title}</h5>
                  <p className="mt-3 text-sm leading-relaxed text-muted-400">{service.blurb}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
