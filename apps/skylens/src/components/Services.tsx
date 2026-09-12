import { Camera, Building, HardHat } from 'lucide-react'

const services = [
  {
    icon: Camera,
    title: 'Residential Real Estate Photography',
    description:
      'Stunning aerial views of residential properties that help listings stand out and attract more buyers.',
  },
  {
    icon: Building,
    title: 'Commercial Real Estate Photography',
    description:
      'Professional aerial imagery for commercial properties, office buildings, and retail spaces.',
  },
  {
    icon: HardHat,
    title: 'Construction Site Monitoring',
    description:
      'Regular drone flyovers to document construction progress, track milestones, and ensure compliance.',
  },
]

export function Services() {
  return (
    <section id="services" className="section-padding bg-[#f8f9fa]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 text-center">
          <span className="mb-2 block font-body text-xs font-semibold uppercase tracking-widest text-section-label">
            Our Services
          </span>
          <h2 className="font-sans text-4xl font-bold uppercase text-heading">What We Offer</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded bg-brand/10">
                <service.icon className="h-8 w-8 text-brand" />
              </div>
              <h3 className="mb-4 font-sans text-lg font-semibold text-heading">{service.title}</h3>
              <p className="text-sm leading-relaxed text-body">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
