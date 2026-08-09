import { Car, CreditCard, Headphones, Wrench } from 'lucide-react'

const services = [
  {
    title: 'Rental A Cars',
    blurb: 'Consectetur adipiscing elit incididunt ut labore et dolore magna aliqua.',
    icon: Car,
  },
  {
    title: 'Buying A Cars',
    blurb: 'Consectetur adipiscing elit incididunt ut labore et dolore magna aliqua.',
    icon: CreditCard,
  },
  {
    title: 'Car Maintenance',
    blurb: 'Consectetur adipiscing elit incididunt ut labore et dolore magna aliqua.',
    icon: Wrench,
  },
  {
    title: 'Support 24/7',
    blurb: 'Consectetur adipiscing elit incididunt ut labore et dolore magna aliqua.',
    icon: Headphones,
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">Our Services</p>
          <h2 className="mt-2 font-display text-3xl font-black text-ink dark:text-white">
            What We Offers
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl bg-paper p-8 text-center transition-shadow hover:shadow-md dark:bg-gray-900"
            >
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-lg bg-brand text-white">
                <service.icon className="h-7 w-7" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{service.blurb}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
