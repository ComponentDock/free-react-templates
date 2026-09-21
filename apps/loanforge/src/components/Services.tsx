import { Building2, Landmark, HardHat, Briefcase } from 'lucide-react'

const services = [
  {
    icon: Briefcase,
    title: 'Business Loan',
    description:
      'Flexible financing solutions designed to fuel your business growth and expansion plans.',
  },
  {
    icon: Landmark,
    title: 'Commercial Loans',
    description:
      'Comprehensive commercial lending products for real estate, equipment, and working capital.',
  },
  {
    icon: HardHat,
    title: 'Construction Loans',
    description:
      'Short-term financing to cover the cost of building or renovating commercial properties.',
  },
  {
    icon: Building2,
    title: 'Business Loan',
    description:
      'Tailored loan packages with competitive rates for startups and established enterprises.',
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-20">
      {/* Dark background */}
      <div className="absolute inset-0 bg-navy">
        <img
          src="https://picsum.photos/seed/loanforge-services/1920/800"
          alt=""
          className="h-full w-full object-cover opacity-20"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        {/* Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-heading text-sm font-bold uppercase tracking-wider text-brand">
            Services that we are providing
          </p>
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            High Performance Services For All Industries.
          </h2>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((svc) => (
            <div
              key={svc.title + svc.description}
              className="rounded-lg bg-white p-8 text-center shadow-lg transition-transform hover:-translate-y-1"
            >
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                <svc.icon size={32} className="text-brand" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-navy">{svc.title}</h3>
              <p className="text-sm leading-relaxed text-text">{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
