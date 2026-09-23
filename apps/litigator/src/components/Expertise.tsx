import { Briefcase, Gavel, Lightbulb, Shield, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Briefcase,
    title: 'Labor and Employment',
    description:
      'Comprehensive legal support for workplace disputes, employment contracts, and regulatory compliance.',
  },
  {
    icon: Gavel,
    title: 'Corporate & Civil Litigation',
    description: 'Aggressive courtroom representation for complex civil and corporate disputes.',
  },
  {
    icon: Lightbulb,
    title: 'Intellectual Property Law',
    description:
      'Protect your innovations, trademarks, copyrights, and trade secrets with expert IP counsel.',
  },
  {
    icon: Shield,
    title: 'Criminal Prosecution and Defense',
    description: 'Vigorous defense and prosecution representation in all criminal matters.',
  },
] as const

export function Expertise() {
  return (
    <section id="expertise" className="bg-surface py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-3xl font-bold text-white sm:text-4xl">
          More <span className="text-primary-400">Expertise</span>
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-lg border border-gray-700 bg-gray-800/50 p-6"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded bg-primary-400/10">
                <service.icon className="h-7 w-7 text-primary-400" aria-hidden="true" />
              </div>
              <h3 className="mb-3 text-lg font-semibold text-white">{service.title}</h3>
              <p className="mb-4 text-sm text-gray-400">{service.description}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-sm font-medium text-primary-400 transition-colors hover:text-primary-300"
              >
                Learn More <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
