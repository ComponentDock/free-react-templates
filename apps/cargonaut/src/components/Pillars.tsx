import { Globe2, MonitorSmartphone, Truck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { pillars, type PillarIcon } from '../data'

const icons: Record<PillarIcon, LucideIcon> = {
  Truck,
  MonitorSmartphone,
  Globe2,
}

export function Pillars() {
  return (
    <section className="px-4 py-28">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        {pillars.map((pillar) => {
          const Icon = icons[pillar.icon]
          return (
            <article key={pillar.title} className="pr-0 md:pr-8">
              <Icon className="h-9 w-9 text-brand" aria-hidden="true" />
              <h3 className="mt-5 text-2xl font-normal text-navy">{pillar.title}</h3>
              <p className="mt-3 text-body">{pillar.description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
