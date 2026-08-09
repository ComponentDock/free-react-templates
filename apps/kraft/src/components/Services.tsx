import { Magnet, MonitorSmartphone, Smartphone, Search } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

interface Service {
  icon: LucideIcon
  title: string
}

const services: Service[] = [
  { icon: Magnet, title: 'Designing' },
  { icon: MonitorSmartphone, title: 'Branding Identity' },
  { icon: Smartphone, title: 'Mobile Application' },
  { icon: Search, title: 'Search Engine' },
]

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title }) => (
          <div key={title}>
            <Icon className="h-12 w-12 text-brand" aria-hidden="true" strokeWidth={1.5} />
            <h3 className="mt-4 text-xl font-normal text-black">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-mist">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestias id volume amet.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
