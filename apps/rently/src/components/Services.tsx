import { Building2, Gift, Map, Plane } from 'lucide-react'

const services = [
  {
    title: 'Wedding Ceremony',
    icon: Gift,
    blurb: 'Arrive in style on your big day with our elegant chauffeured fleet.',
  },
  {
    title: 'City Transfer',
    icon: Building2,
    blurb: 'Reliable door-to-door transfers across the city, day and night.',
  },
  {
    title: 'Airport Transfer',
    icon: Plane,
    blurb: 'On-time pickups and drop-offs at every major airport terminal.',
  },
  {
    title: 'Whole City Tour',
    icon: Map,
    blurb: 'Explore the city at your own pace with a car and driver for the day.',
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
            Our Latest Services
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
