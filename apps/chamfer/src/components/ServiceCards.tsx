import { Lightbulb, PaintBucket, Sofa } from 'lucide-react'

const services = [
  {
    icon: Lightbulb,
    title: 'Lighting',
    description:
      'Strategic lighting design that enhances ambiance and functionality, from ambient overhead to task-focused accent lighting.',
  },
  {
    icon: PaintBucket,
    title: 'Interior Design',
    description:
      'Comprehensive interior design services covering space planning, color consultation, material selection, and furniture curation.',
  },
  {
    icon: Sofa,
    title: 'Office Decoration',
    description:
      'Professional office environments that boost productivity and reflect your brand identity through thoughtful design.',
  },
] as const

export function ServiceCards() {
  return (
    <section id="services" className="bg-light-bg py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold uppercase tracking-wider text-dark-text md:text-4xl">
          Best Interior Services
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 bg-brand-red" />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-none border border-gray-200 bg-white p-8 text-center transition-shadow hover:shadow-lg"
            >
              <service.icon className="mx-auto h-12 w-12 text-brand-red" aria-hidden="true" />
              <h3 className="mt-6 font-display text-lg font-bold uppercase tracking-wider text-dark-text">
                <a href="#contact" className="transition-colors hover:text-brand-red">
                  {service.title}
                </a>
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-gray">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
