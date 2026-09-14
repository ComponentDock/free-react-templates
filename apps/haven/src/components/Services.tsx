import { Map, UtensilsCrossed, Baby, Shirt, Car, Wine } from 'lucide-react'

const services = [
  {
    icon: Map,
    title: 'Travel Plan',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Catering Service',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    icon: Baby,
    title: 'Babysitting',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    icon: Shirt,
    title: 'Laundry',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    icon: Car,
    title: 'Hire Driver',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
  {
    icon: Wine,
    title: 'Bar & Drink',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-primary-400">
            What We Do
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            Discover Our Services
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <service.icon className="mx-auto h-10 w-10 text-primary-400" aria-hidden="true" />
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
