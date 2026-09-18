import { Ship, Compass, Map, Globe } from 'lucide-react'

const services = [
  {
    icon: Ship,
    title: 'Special Activities',
    description:
      'Unique activities curated for adventurous travelers seeking extraordinary experiences.',
  },
  {
    icon: Compass,
    title: 'Travel Arrangements',
    description: 'Comprehensive travel planning from flights to accommodations and transfers.',
  },
  {
    icon: Map,
    title: 'Private Guide',
    description: 'Expert local guides who bring destinations to life with insider knowledge.',
  },
  {
    icon: Globe,
    title: 'Location Manager',
    description: 'Professional location scouting for events, shoots, and special occasions.',
  },
]

export function Services() {
  return (
    <section className="bg-section-alt py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.title} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="mt-4 font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-text-muted">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
