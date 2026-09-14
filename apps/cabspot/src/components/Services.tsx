import { Car, Briefcase, Bus } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const services = [
  {
    icon: Car,
    title: 'Taxi Service',
    description:
      'Fast and reliable taxi rides to any destination. Our professional drivers ensure a comfortable journey from start to finish.',
    color: 'text-taxi',
  },
  {
    icon: Briefcase,
    title: 'Office Pick-ups',
    description:
      'Convenient pick-up and drop-off services for office commuters. Book in advance and never be late for work again.',
    color: 'text-cyan-accent',
  },
  {
    icon: Bus,
    title: 'Event Transportation',
    description:
      'Group transportation for events, conferences, and special occasions. We handle large parties with ease and efficiency.',
    color: 'text-blue-accent',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-[#f9f9ff] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-2xl font-bold text-gray-900 md:text-3xl">
          What Services We Offer
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-sm bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <service.icon className={cn('mx-auto mb-4 h-12 w-12', service.color)} />
              <h3 className="mb-3 text-lg font-bold text-gray-900">{service.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
