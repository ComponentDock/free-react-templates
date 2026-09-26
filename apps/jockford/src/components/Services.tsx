import { Lightbulb, Code2, Smartphone, Palette, Server, Database } from 'lucide-react'

const services = [
  {
    icon: Lightbulb,
    title: 'Innovative Ideas',
    description: 'Creative solutions that push boundaries and deliver unique digital experiences.',
    color: 'bg-brand',
  },
  {
    icon: Code2,
    title: 'Software',
    description:
      'Robust, scalable software development using modern technologies and best practices.',
    color: 'bg-emerald-500',
  },
  {
    icon: Smartphone,
    title: 'Application',
    description: 'Native and cross-platform mobile applications with seamless user experiences.',
    color: 'bg-amber-500',
  },
  {
    icon: Palette,
    title: 'Graphic Design',
    description: 'Visually stunning designs that communicate your brand story effectively.',
    color: 'bg-rose-500',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Backend architecture and API design for high-performance applications.',
    color: 'bg-brand',
  },
  {
    icon: Database,
    title: 'Data Engineering',
    description: 'Database design and optimization for efficient data management.',
    color: 'bg-emerald-500',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-bg-secondary py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-4 text-3xl font-bold text-text-primary">Here are some of my expertise</h2>
        <p className="mb-12 max-w-2xl text-text-secondary">
          Delivering high-quality solutions across multiple domains with a focus on innovation and
          user experience.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-border bg-bg-primary p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${service.color} text-white`}
              >
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-text-primary">{service.title}</h3>
              <p className="text-sm text-text-secondary">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
