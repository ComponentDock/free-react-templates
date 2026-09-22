import { Activity, Apple, Dumbbell, Plus } from 'lucide-react'

const services = [
  {
    icon: Activity,
    title: 'Physical Activity',
    description:
      'Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum.',
  },
  {
    icon: Apple,
    title: 'Healthy Nutrition',
    description:
      'Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum.',
  },
  {
    icon: Dumbbell,
    title: 'Personal Training',
    description:
      'Praesent porttitor, nulla vitae posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut ipsum.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="text-center">
              <div className="mb-6 flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <service.icon size={40} />
                </div>
              </div>
              <h3 className="mb-4 text-xl font-medium text-brand-heading">{service.title}</h3>
              <p className="mb-4 text-brand-body">{service.description}</p>
              <a
                href="#"
                className="inline-flex items-center gap-1 text-sm font-semibold text-brand transition-colors hover:text-brand-dark"
                aria-label={`Learn more about ${service.title}`}
              >
                <Plus size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
