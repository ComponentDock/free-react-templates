import { Briefcase, Cake, Gem, UtensilsCrossed } from 'lucide-react'

const services = [
  {
    title: 'Catering Services',
    description:
      'Flawless catering for weddings, galas and corporate dinners, prepared by our chefs.',
    icon: UtensilsCrossed,
  },
  {
    title: 'Birthday Party',
    description: 'Memorable birthday celebrations with custom menus and dedicated service.',
    icon: Cake,
  },
  {
    title: 'Business Meetings',
    description: 'Private dining and meeting spaces with seasonal tasting menus.',
    icon: Briefcase,
  },
  {
    title: 'Wedding Party',
    description: 'Elegant wedding receptions, from intimate dinners to grand ballrooms.',
    icon: Gem,
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="group rounded-md border border-gray-100 bg-white p-8 text-center transition-all hover:-translate-y-1 hover:border-primary-500 hover:shadow-lg"
              >
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-primary-600 transition-colors group-hover:bg-primary-500 group-hover:text-white">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
