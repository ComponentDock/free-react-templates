import { Truck, Ship, Plane, Package } from 'lucide-react'

const services = [
  {
    icon: Truck,
    title: 'Road Transport',
    description: 'Efficient road freight services across all major routes with real-time tracking.',
  },
  {
    icon: Ship,
    title: 'Sea Cargo',
    description: 'International ocean freight with competitive rates and reliable schedules.',
  },
  {
    icon: Plane,
    title: 'Air Freight',
    description: 'Fast and secure air cargo solutions for time-sensitive shipments.',
  },
  {
    icon: Package,
    title: 'Warehouse',
    description: 'Strategic warehousing and distribution centers in key locations.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold uppercase text-dark">Our Services</h2>
          <p className="mx-auto max-w-2xl text-mist">
            Comprehensive logistics solutions tailored to your business needs.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-lg border border-gray-100 bg-white p-6 text-center shadow-sm transition-all hover:border-brand/20 hover:shadow-md"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                <service.icon className="h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="mb-2 text-lg font-bold text-dark">{service.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-mist">{service.description}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-sm font-medium text-brand transition-colors hover:text-brand-dark"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
