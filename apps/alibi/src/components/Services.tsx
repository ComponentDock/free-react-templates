import { Scale, Gavel, FileSearch } from 'lucide-react'

const services = [
  {
    icon: Scale,
    title: 'Legal Consultation',
    description:
      'Get expert legal advice tailored to your specific situation. Our experienced attorneys provide comprehensive consultations to help you understand your options.',
  },
  {
    icon: Gavel,
    title: 'Trial Representation',
    description:
      'Our skilled trial lawyers will represent you in court with dedication and expertise. We fight tirelessly to achieve the best possible outcomes for our clients.',
  },
  {
    icon: FileSearch,
    title: 'Case Review',
    description:
      'We meticulously analyze every detail of your case to build the strongest possible strategy. Our thorough review process ensures no stone is left unturned.',
  },
]

export function Services() {
  return (
    <section id="services" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-ink sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-base text-mist">What we can do for you</p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="rounded-lg border border-gray-200 bg-white p-8 text-center transition-shadow hover:shadow-lg"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                  <Icon className="h-8 w-8 text-brand" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-ink">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-mist">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
