import { Plane, Ship, Truck, Warehouse, ArrowRight } from 'lucide-react'

const SERVICES = [
  {
    icon: Plane,
    title: 'Air Freight',
    description:
      'Fast and reliable air cargo solutions for time-sensitive shipments across the globe with real-time tracking.',
  },
  {
    icon: Ship,
    title: 'Ocean Freight',
    description:
      'Cost-effective sea freight services with full container load and less-than-container load options.',
  },
  {
    icon: Truck,
    title: 'Road Transport',
    description:
      'Comprehensive road transport network with over 80 trucks in our fleet for domestic and cross-border delivery.',
  },
  {
    icon: Warehouse,
    title: 'Warehousing',
    description:
      'Strategic warehousing and distribution centers to store, manage, and dispatch your inventory efficiently.',
  },
] as const

export function Services() {
  return (
    <section id="services" aria-label="Services" className="bg-white py-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service) => {
          const Icon = service.icon
          return (
            <div
              key={service.title}
              className="group flex flex-col items-center px-6 py-16 text-center transition-colors hover:bg-gray-50"
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 transition-colors group-hover:border-brand group-hover:bg-brand/10">
                <Icon size={28} className="text-gray-600 group-hover:text-brand" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900">{service.title}</h3>
              <p className="mb-6 max-w-xs text-sm leading-relaxed text-gray-500">
                {service.description}
              </p>
              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-brand hover:bg-brand hover:text-white"
                aria-label={`Learn more about ${service.title}`}
              >
                <ArrowRight size={18} />
              </a>
            </div>
          )
        })}
      </div>
    </section>
  )
}
