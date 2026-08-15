import { BarChart3, Code, Megaphone, PenTool, Search, Target } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { services, type Service, type ServiceIconName } from '../data'

const iconMap: Record<ServiceIconName, LucideIcon> = {
  search: Search,
  target: Target,
  chart: BarChart3,
  pen: PenTool,
  code: Code,
  megaphone: Megaphone,
}

function ServiceIcon({ name }: { name: ServiceIconName }) {
  const Icon = iconMap[name]
  return <Icon className="h-6 w-6" aria-hidden="true" />
}

function ServiceCard({ service }: { service: Service }) {
  if (service.circular) {
    return (
      <article className="flex flex-col items-center px-6 py-8 text-center">
        <span className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-brand text-white">
          <ServiceIcon name={service.icon} />
        </span>
        <h3 className="mb-3 text-lg font-medium text-ink">{service.title}</h3>
        <p className="text-sm leading-relaxed text-ink/70">{service.blurb}</p>
      </article>
    )
  }
  return (
    <article className="px-6 py-8 text-center">
      <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-band text-brand">
        <ServiceIcon name={service.icon} />
      </span>
      <h3 className="mb-3 text-lg font-medium text-ink">{service.title}</h3>
      <p className="text-sm leading-relaxed text-ink/70">{service.blurb}</p>
    </article>
  )
}

export function Services() {
  const firstRow = services.slice(0, 3)
  const secondRow = services.slice(3)

  return (
    <section id="services" aria-label="Services" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-4 text-center">
          <span className="mb-2 block text-sm text-brand">
            Search Engine &amp; Social Media Optimization Experts
          </span>
          <h2 className="text-3xl font-normal text-ink md:text-[30px]">
            Our Service Keeps you Happy
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {firstRow.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
        <div className={cn('mt-12 grid gap-6 border-t border-gray-100 pt-10 md:grid-cols-3')}>
          {secondRow.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}
