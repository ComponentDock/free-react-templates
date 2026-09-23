import { Ruler, Paintbrush, Lightbulb } from 'lucide-react'

const services = [
  {
    icon: Ruler,
    title: 'Architecture',
    desc: 'If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.',
  },
  {
    icon: Paintbrush,
    title: 'Interior Design',
    desc: 'If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.',
  },
  {
    icon: Lightbulb,
    title: 'Concept Design',
    desc: 'If you are looking at blank cassettes on the web, you may be very confused at the difference in price. You may see some for as low as $.17 each.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-light-bg py-20">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <h2 className="font-heading text-3xl font-bold text-heading">Offerings to My Clients</h2>
        <p className="mx-auto mt-3 max-w-2xl text-body-muted">
          If you are looking at blank cassettes on the web, you may be very confused at the
          difference in price.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-lg bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <Icon className="mx-auto h-12 w-12 text-brand-purple" />
              <h3 className="mt-6 font-heading text-xl font-semibold text-heading">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-body-muted">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
