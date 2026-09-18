import { User, Briefcase, Headphones, Cpu, Award, MessageSquare } from 'lucide-react'

const services = [
  {
    icon: User,
    title: 'Expert Technicians',
    description:
      'Usage of the Internet is becoming more common due to rapid advancement of technology.',
  },
  {
    icon: Briefcase,
    title: 'Professional Service',
    description:
      'Usage of the Internet is becoming more common due to rapid advancement of technology.',
  },
  {
    icon: Headphones,
    title: 'Great Support',
    description:
      'Usage of the Internet is becoming more common due to rapid advancement of technology.',
  },
  {
    icon: Cpu,
    title: 'Technical Skills',
    description:
      'Usage of the Internet is becoming more common due to rapid advancement of technology.',
  },
  {
    icon: Award,
    title: 'Highly Recommended',
    description:
      'Usage of the Internet is becoming more common due to rapid advancement of technology.',
  },
  {
    icon: MessageSquare,
    title: 'Positive Reviews',
    description:
      'Usage of the Internet is becoming more common due to rapid advancement of technology.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold text-gray-900">
            Some Features That Made Us Unique
          </h2>
          <p className="text-gray-500">Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div key={s.title}>
              <s.icon className="mb-3 h-8 w-8 text-brand-500" />
              <h4 className="mb-2 font-semibold text-gray-900">{s.title}</h4>
              <p className="text-sm text-gray-500">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
