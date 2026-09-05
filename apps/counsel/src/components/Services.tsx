import { Scale, Gavel, Shield, Users } from 'lucide-react'

const services = [
  {
    icon: Scale,
    title: 'Get Law Advice',
    description:
      'Our experienced attorneys provide comprehensive legal consultations tailored to your specific situation and needs.',
  },
  {
    icon: Gavel,
    title: 'Review The Case',
    description:
      'We meticulously analyze every detail of your case to build the strongest possible strategy for success.',
  },
  {
    icon: Shield,
    title: 'Winning Guarantee',
    description:
      'With decades of courtroom experience, we fight tirelessly to secure favorable outcomes for our clients.',
  },
  {
    icon: Users,
    title: 'Fully Support',
    description:
      'From initial consultation to final resolution, our team provides unwavering support throughout the legal process.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-base text-mist">What we can do for you</p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="rounded-xl border border-gray-200 bg-white p-8 text-center transition-shadow hover:shadow-lg"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                  <Icon className="h-8 w-8 text-brand" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-ink">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-mist">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
