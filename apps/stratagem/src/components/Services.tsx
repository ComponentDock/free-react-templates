import { BarChart3, Rocket, Building2, DollarSign, UtensilsCrossed, Plane } from 'lucide-react'
import { type LucideIcon } from 'lucide-react'

interface ServiceItem {
  icon: LucideIcon
  title: string
  description: string
}

const services: ServiceItem[] = [
  {
    icon: BarChart3,
    title: 'Marketing & SEO Agency',
    description:
      'Strategic digital marketing solutions to boost your online presence and drive qualified traffic.',
  },
  {
    icon: Rocket,
    title: 'Startup Agency',
    description: 'End-to-end consulting for startups from ideation to market launch and scaling.',
  },
  {
    icon: Building2,
    title: 'Corporate Business',
    description: 'Enterprise-level consulting to optimize operations and maximize profitability.',
  },
  {
    icon: DollarSign,
    title: 'Finance Solution',
    description: 'Financial planning, analysis, and strategy to secure your business future.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Food & Restaurant',
    description: 'Restaurant consulting from menu design to operations and customer experience.',
  },
  {
    icon: Plane,
    title: 'Travel Agency',
    description: 'Travel industry consulting to create memorable experiences and grow bookings.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-light text-navy md:text-4xl">What we Do?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-mist">
          We provide comprehensive consulting services tailored to your industry needs
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-gray-100 p-8 text-center transition-shadow hover:shadow-lg"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                <service.icon className="h-8 w-8 text-brand" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-navy">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{service.description}</p>
              <a
                href="#"
                className="mt-4 inline-block text-sm font-medium text-brand hover:text-brand-dark"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
