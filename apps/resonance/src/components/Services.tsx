import { BarChart3, FileText, Link, Megaphone, Shield, Trophy, type LucideIcon } from 'lucide-react'
import { services, type ServiceIcon } from '../data'

const iconMap: Record<ServiceIcon, LucideIcon> = {
  design: Shield,
  internet: Megaphone,
  social: FileText,
  seo: BarChart3,
  backlinks: Link,
  trophy: Trophy,
}

export function Services() {
  return (
    <section id="services" className="bg-white">
      <div className="mx-auto max-w-[1250px] px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-accent/20 px-5 py-1.5 text-[10px] font-bold tracking-widest text-accent uppercase">
            {services.pill}
          </span>
          <h2 className="mt-4 mb-5 text-3xl font-bold text-brand md:text-4xl">
            {services.heading}
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.items.map((service, index) => {
            const Icon = iconMap[service.icon]
            return (
              <div
                key={`${service.title}-${index}`}
                className="flex gap-6 border border-[#efefef] p-7 transition-colors hover:border-brand/30"
              >
                <div className="relative flex h-20 w-20 flex-none items-center justify-center">
                  <span
                    aria-hidden="true"
                    className="absolute top-0 left-0 h-10 w-10 rounded-full bg-accent/50"
                  />
                  <Icon className="relative h-[50px] w-[50px] text-brand" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-bold text-ink">{service.title}</h3>
                  <p className="leading-relaxed text-body">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
