import { Lightbulb, GraduationCap, Briefcase, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Lightbulb,
    title: 'Better Future',
    description:
      'We build sustainable infrastructure that shapes better communities for generations to come.',
  },
  {
    icon: GraduationCap,
    title: 'Qualified Trainers',
    description:
      'Our team undergoes continuous training to stay at the forefront of engineering innovation.',
  },
  {
    icon: Briefcase,
    title: 'Job Opportunity',
    description:
      'We create employment opportunities and foster talent development within the construction sector.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-alt-bg py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand">Our Services</p>
          <h2 className="text-3xl font-bold text-heading">What We Offer</h2>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-lg bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <Icon className="mx-auto h-12 w-12 text-brand" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-bold text-heading">{title}</h3>
              <p className="mt-3 text-sm text-body">{description}</p>
              <a
                href="#services"
                className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-brand hover:underline"
              >
                Read more <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
