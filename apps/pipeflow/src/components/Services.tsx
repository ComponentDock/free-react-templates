import { Wrench, Home, Building } from 'lucide-react'

const services = [
  {
    icon: Wrench,
    title: 'Maintenance',
    description:
      'Regular maintenance keeps your plumbing system running smoothly. We offer comprehensive inspection and upkeep services to prevent costly repairs.',
  },
  {
    icon: Home,
    title: 'Residential Service',
    description:
      'From kitchen sinks to bathroom renovations, our residential plumbing services cover everything for your home. Fast, reliable, and affordable.',
  },
  {
    icon: Building,
    title: 'Commercial Service',
    description:
      'We handle large-scale commercial plumbing projects with precision. Our team is equipped to manage any commercial plumbing requirement.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 sm:text-4xl">
          Our services
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((svc) => {
            const Icon = svc.icon
            return (
              <div
                key={svc.title}
                className="rounded-lg bg-white p-8 text-center shadow-md transition-shadow hover:shadow-lg"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-400 text-white">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{svc.title}</h3>
                <p className="text-sm text-gray-600">{svc.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
