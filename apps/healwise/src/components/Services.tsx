import { Stethoscope, Siren, ClipboardCheck, Clock } from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'Qualified Doctors',
    description: 'Our doctors are highly qualified and experienced in their respective fields.',
  },
  {
    icon: Siren,
    title: 'Emergency Care',
    description: '24/7 emergency care services with rapid response times and professional staff.',
  },
  {
    icon: ClipboardCheck,
    title: 'Outdoor Checkup',
    description: 'Comprehensive outdoor checkup services for individuals and families.',
  },
  {
    icon: Clock,
    title: '24 Hours Service',
    description: 'Round the clock medical services available whenever you need them.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-page py-20" data-testid="services">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">
            Our Services
          </p>
          <h2 className="text-3xl font-bold text-ink md:text-4xl">What We Provide For You</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg bg-paper p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                <service.icon size={32} className="text-brand" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-ink">{service.title}</h3>
              <p className="text-sm leading-relaxed text-mist">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
