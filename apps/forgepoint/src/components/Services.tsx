import { Cpu, Factory, BarChart3, ArrowRight } from 'lucide-react'

const SERVICES = [
  {
    icon: Cpu,
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
    <section id="services" className="bg-white py-4 dark:bg-navy-deep">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-0 md:grid-cols-3">
        {SERVICES.map((svc, i) => (
          <div
            key={svc.title}
            className={`relative p-10 ${
              i === 0 || i === 2 ? 'bg-paper dark:bg-navy' : 'bg-white dark:bg-navy-deep'
            }`}
          >
            <svc.icon className="mb-6 h-12 w-12 text-brand" aria-hidden="true" />
            <h3 className="font-display text-xl font-semibold text-ink dark:text-white">
              {svc.title}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              {svc.description}
            </p>
            <a
              href="#services"
              className="absolute bottom-0 right-0 bg-brand p-4 text-white transition-colors hover:bg-navy"
              aria-label={`Learn more about ${svc.title}`}
            >
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
