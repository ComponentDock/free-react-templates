import { Film, Calendar, Camera, Building } from 'lucide-react'

const SERVICES = [
  {
    icon: Film,
    title: 'Fashion Shows',
    description:
      'We organize and manage high-end fashion shows with top models from around the world.',
  },
  {
    icon: Calendar,
    title: 'Special Events',
    description: 'From galas to private events, we provide professional talent for every occasion.',
  },
  {
    icon: Camera,
    title: 'Commercial Photo',
    description: 'Our models work with leading photographers for commercial and editorial shoots.',
  },
  {
    icon: Building,
    title: 'Model School',
    description:
      'We offer professional training programs for aspiring models of all experience levels.',
  },
]

export function Services() {
  return (
    <section className="bg-gray-50 py-20" data-testid="services">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-heading">{service.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
