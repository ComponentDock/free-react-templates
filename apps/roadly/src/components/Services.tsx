import { CalendarCheck, Car, Headphones, MapPin } from 'lucide-react'

const services = [
  {
    title: '24/7 Car Support',
    icon: Headphones,
    blurb: 'Round-the-clock roadside assistance and phone support for every rental.',
  },
  {
    title: 'Lots of location',
    icon: MapPin,
    blurb: 'Pick-up and drop-off points across hundreds of cities and airports.',
  },
  {
    title: 'Reservation',
    icon: CalendarCheck,
    blurb: 'Lock in your preferred car in seconds with instant booking confirmation.',
  },
  {
    title: 'Rental Cars',
    icon: Car,
    blurb: 'A modern fleet of sedans, SUVs and vans at transparent daily rates.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-brand">
            Our Services
          </span>
          <h2 className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl">
            Our Services
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-2xl border border-gray-100 bg-paper p-6 text-center transition-shadow hover:shadow-md"
            >
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                <service.icon className="h-8 w-8" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-ink">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{service.blurb}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
