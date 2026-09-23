import { Paintbrush, Building2, Home, Pencil } from 'lucide-react'

const services = [
  {
    icon: Paintbrush,
    title: 'Interior Design',
    description:
      'As you might expect of a company that began as a high-end interiors contractor, we pay strict attention.',
  },
  {
    icon: Building2,
    title: 'Office Design',
    description:
      'Our commitment to exceptional quality has never wavered. To day ranks as one of the most highly-regarded construction.',
  },
  {
    icon: Home,
    title: 'Home Design',
    description:
      'Interdisciplinary architectural studio with cultural, residential and commercial projects built worldwide.',
  },
  {
    icon: Pencil,
    title: 'Design drawing',
    description:
      'Creating architectural and creative solutions to help people realize their vision and make them a reality.',
  },
] as const

const stats = [
  { number: 85, label: 'Projects\nCompleted' },
  { number: 127, label: 'Happy\nClients' },
  { number: 36, label: 'Awards\nReceived' },
  { number: 74, label: 'Cups Of\nCoffee' },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 font-display text-sm uppercase tracking-wider text-brand">
            Our specialization
          </span>
          <h2 className="font-display text-3xl font-bold text-body sm:text-4xl">What we do</h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="text-center">
              <service.icon className="mx-auto mb-4 h-12 w-12 text-brand" aria-hidden="true" />
              <h4 className="mb-3 font-display text-lg font-semibold text-body">{service.title}</h4>
              <p className="text-sm leading-relaxed text-mist">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-paper pt-12 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.number} className="text-center">
              <h2 className="mb-2 font-display text-4xl font-bold text-brand">{stat.number}</h2>
              <h5 className="text-sm font-medium text-mist whitespace-pre-line">{stat.label}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
