import { Briefcase, BarChart3, Users, Shield, TrendingUp, Wallet } from 'lucide-react'

const services = [
  {
    icon: Briefcase,
    title: 'Business Consulting',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.',
  },
  {
    icon: BarChart3,
    title: 'Market Analysis',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.',
  },
  {
    icon: Users,
    title: 'User Monitoring',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.',
  },
  {
    icon: Shield,
    title: 'Insurance Consulting',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.',
  },
  {
    icon: TrendingUp,
    title: 'Financial Investment',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.',
  },
  {
    icon: Wallet,
    title: 'Financial Management',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="border-b border-silver bg-mist py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold">Our Services</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="flex gap-4">
              <service.icon className="mt-1 h-8 w-8 shrink-0 text-primary-500" />
              <div>
                <h3 className="mb-2 text-lg font-bold">{service.title}</h3>
                <p className="mb-3 text-sm text-smoke">{service.description}</p>
                <a
                  href="#contact"
                  className="text-sm font-semibold text-primary-500 hover:text-primary-600"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
