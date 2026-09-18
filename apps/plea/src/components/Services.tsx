import { Briefcase, Scale, HeartHandshake } from 'lucide-react'

const services = [
  {
    icon: Briefcase,
    title: 'Family Therapy',
    description:
      'Expert guidance for families navigating complex dynamics, conflicts, and transitions together.',
  },
  {
    icon: Scale,
    title: 'Legal Counseling',
    description:
      'Professional legal advice and support for family law, custody, divorce, and related matters.',
  },
  {
    icon: HeartHandshake,
    title: 'Relationship Guidance',
    description:
      'Strengthen your relationships through proven communication techniques and therapeutic strategies.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-[#f5f4f0] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-[#1a1a1a] md:text-4xl">Our Services</h2>
          <p className="mt-4 text-gray-600">
            Comprehensive counseling and legal services tailored to your needs
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg bg-white p-8 shadow-md transition-shadow hover:shadow-xl"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#589167]/10">
                <service.icon className="h-8 w-8 text-[#589167]" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-[#1a1a1a]">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
