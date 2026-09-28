import { UtensilsCrossed, Fish, Coffee, Beef } from 'lucide-react'

const services = [
  {
    icon: UtensilsCrossed,
    title: 'Enjoy Eating',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: Fish,
    title: 'Fresh Sea Foods',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: Coffee,
    title: 'Cup of Coffees',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: Beef,
    title: 'Meat Eaters',
    description:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="relative bg-paper py-16">
      {/* Bottom slant */}
      <div
        className="absolute bottom-0 left-0 right-0 -mb-1 h-12 bg-white"
        style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }}
      />

      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <div key={service.title} className="text-left">
              <Icon className="mb-4 h-10 w-10 text-brand" aria-hidden="true" />
              <h3 className="mb-2 text-lg font-bold text-brand">{service.title}</h3>
              <p className="text-sm leading-relaxed text-mist">{service.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
