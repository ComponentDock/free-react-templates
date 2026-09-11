import { Hammer, Building2, HardHat } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { ButtonLink } from '@free-react-templates/ui'

const services = [
  {
    icon: Hammer,
    title: 'House Renovation',
    description:
      'We transform existing spaces with expert renovation services, breathing new life into homes while preserving their unique character.',
  },
  {
    icon: Building2,
    title: 'Construction Consultant',
    description:
      'Our experienced consultants provide strategic guidance through every phase of your construction project, ensuring optimal results.',
  },
  {
    icon: HardHat,
    title: 'General Contracting',
    description:
      'Full-service general contracting solutions from planning to completion, delivered with precision and professionalism.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-paper py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-2 text-3xl font-bold text-heading">Services</h2>
        <div className="mb-12 h-1 w-16 bg-brand" />

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-xl border border-gray-200 bg-paper p-6 shadow-sm"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand/10">
                <service.icon className="text-brand" size={28} />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-heading">{service.title}</h3>
              <p className="mb-6 text-mist leading-relaxed">{service.description}</p>
              <ButtonLink href="#services" variant="outline">
                Learn More
              </ButtonLink>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <ButtonLink
            href="#services"
            variant="primary"
            className={cn('bg-brand hover:bg-brand-dark')}
          >
            View All Services
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
