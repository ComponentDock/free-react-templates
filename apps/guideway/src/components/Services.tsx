import { BarChart3, Briefcase, Shield, Globe, ClipboardCheck, Search } from 'lucide-react'

const services = [
  {
    icon: BarChart3,
    title: 'Business Analysis',
    description:
      'Comprehensive analysis to identify opportunities and optimize your business operations.',
  },
  {
    icon: Briefcase,
    title: 'Business Consulting',
    description:
      'Strategic consulting to help your organization achieve sustainable growth and success.',
  },
  {
    icon: Shield,
    title: 'Business Insurance',
    description:
      'Protect your business with tailored insurance solutions and risk management strategies.',
  },
  {
    icon: Globe,
    title: 'Global Investigation',
    description:
      'In-depth research and investigation services for businesses operating across borders.',
  },
  {
    icon: ClipboardCheck,
    title: 'Audit & Evaluation',
    description:
      'Thorough auditing and evaluation to ensure compliance and operational excellence.',
  },
  {
    icon: Search,
    title: 'Marketing Strategy',
    description:
      'Data-driven marketing strategies to increase visibility and drive customer engagement.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-navy lg:text-4xl">
            Our Best Services
          </h2>
          <p className="mx-auto max-w-2xl text-mist">
            Separated they live in. A small river named Duden flows by their place and supplies it
            with the necessary regelialia. It is a paradisematic country.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-xl border border-border p-8 text-center transition-shadow hover:shadow-lg"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand/10">
                <s.icon className="h-7 w-7 text-brand" aria-hidden="true" />
              </div>
              <h3 className="mb-3 font-heading text-lg font-semibold text-navy">{s.title}</h3>
              <p className="text-sm leading-relaxed text-mist">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
