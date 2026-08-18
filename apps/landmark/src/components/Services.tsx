import { Compass, Handshake, KeyRound } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { Service } from '../data'
import { SERVICES } from '../data'

const ICONS: Record<string, LucideIcon> = {
  sell: Handshake,
  rent: KeyRound,
  find: Compass,
}

interface ServicesProps {
  items?: Service[]
}

export function Services({ items = SERVICES }: ServicesProps) {
  return (
    <section className="bg-blue-bg py-24">
      <div className="mx-auto max-w-[1200px] px-4">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-4xl font-medium text-white">How we help people?</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((service) => {
            const Icon = ICONS[service.icon] ?? Handshake
            return (
              <div key={service.title} className="flex flex-col items-center text-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/15">
                  <Icon className="h-9 w-9 text-white" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-2xl font-medium text-white">{service.title}</h3>
                <p className="mt-3 text-white/85">{service.blurb}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
