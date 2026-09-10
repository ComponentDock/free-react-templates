import { Calculator, TrendingUp, Users, BookOpen } from 'lucide-react'

const services = [
  {
    icon: Calculator,
    title: 'Tax Planning',
    description:
      'Strategic tax planning to minimize your tax liability and maximize savings. We help you navigate complex tax regulations.',
  },
  {
    icon: TrendingUp,
    title: 'Financial Analysis',
    description:
      'Comprehensive financial analysis to understand your business performance and identify growth opportunities.',
  },
  {
    icon: Users,
    title: 'Payroll Services',
    description:
      'Complete payroll management ensuring timely and accurate processing of employee compensation and benefits.',
  },
  {
    icon: BookOpen,
    title: 'Bookkeeping',
    description:
      'Professional bookkeeping services to maintain accurate financial records and ensure compliance.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="py-16 bg-mist">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-smoke">
            Our Services
          </span>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
            What We Offer
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="rounded-lg bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-50 text-primary-500">
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-smoke">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
