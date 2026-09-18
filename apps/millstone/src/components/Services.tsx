import { Cog, Factory, BarChart3, ArrowRight } from 'lucide-react'

const SERVICES = [
  {
    icon: Cog,
    title: 'Automotive Manufacturing',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    icon: Factory,
    title: 'Heavy Industry Market',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
  {
    icon: BarChart3,
    title: 'Industry Analysis',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {SERVICES.map((service) => (
          <article key={service.title} className="group">
            <div className="mb-4">
              <service.icon className="text-primary-400" size={40} strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-lg font-bold text-heading mb-3">{service.title}</h3>
            <p className="font-body text-sm text-body leading-relaxed mb-4">
              {service.description}
            </p>
            <a
              href="#services"
              className="inline-flex items-center justify-center w-10 h-10 bg-primary-400 text-white rounded hover:bg-primary-500 transition-colors"
              aria-label={`Read more about ${service.title}`}
            >
              <ArrowRight size={18} />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
