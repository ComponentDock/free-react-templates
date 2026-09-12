import { Briefcase, CreditCard, BarChart3, ShieldCheck, TrendingUp, Settings } from 'lucide-react'

const services = [
  {
    icon: Briefcase,
    title: 'Business Consulting',
    description: 'Expert guidance for your business financial strategy and growth.',
  },
  {
    icon: CreditCard,
    title: 'Credit Card',
    description: 'Flexible credit card solutions with rewards and security features.',
  },
  {
    icon: BarChart3,
    title: 'Income Monitoring',
    description: 'Real-time income tracking and analytics for better financial decisions.',
  },
  {
    icon: ShieldCheck,
    title: 'Insurance Consulting',
    description: 'Comprehensive insurance plans tailored to protect your assets.',
  },
  {
    icon: TrendingUp,
    title: 'Financial Investment',
    description: 'Strategic investment options to grow your wealth over time.',
  },
  {
    icon: Settings,
    title: 'Financial Management',
    description: 'Complete financial management services for individuals and businesses.',
  },
] as const

export function Services() {
  return (
    <section
      id="services"
      className="bg-paper py-20 transition-colors dark:bg-gray-900 lg:py-[120px]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            What We Offer
          </span>
          <h2 className="mt-4 text-3xl font-bold uppercase text-ink dark:text-white sm:text-4xl">
            Our Services
          </h2>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-lg dark:bg-gray-950"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <service.icon className="h-7 w-7" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-ink dark:text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
