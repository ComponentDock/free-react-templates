import { Search, Layers, Lightbulb } from 'lucide-react'

const SERVICES = [
  {
    title: 'Explore',
    icon: Search,
    items: ['Design Sprints', 'Product Strategy', 'UX Strategy'],
  },
  {
    title: 'Create',
    icon: Layers,
    items: ['Information', 'UX/UI Design', 'Branding'],
  },
  {
    title: 'Learn',
    icon: Lightbulb,
    items: ['Prototyping', 'User Testing', 'UI Testing'],
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-smoke">What I Do</span>
          <h2 className="mt-4 text-3xl font-semibold text-ink md:text-4xl">
            Strategy, design and a bit of magic
          </h2>
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-400/10">
                  <Icon size={28} className="text-primary-400" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-ink">{service.title}</h3>
                <ul className="space-y-1">
                  {service.items.map((item) => (
                    <li key={item} className="text-sm text-smoke">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
