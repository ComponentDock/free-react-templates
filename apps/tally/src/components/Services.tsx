import { Calculator, FileText, DollarSign, TrendingUp } from 'lucide-react'

const SERVICES = [
  {
    icon: Calculator,
    title: 'Accounting',
    description:
      'Full-service accounting including bookkeeping, financial statements, and reconciliation.',
  },
  {
    icon: FileText,
    title: 'Tax / Compliance / Payroll',
    description:
      'Comprehensive tax planning, regulatory compliance, and efficient payroll management.',
  },
  {
    icon: DollarSign,
    title: 'Financial Services',
    description: 'Investment advisory, budgeting, forecasting, and financial planning services.',
  },
  {
    icon: TrendingUp,
    title: 'Growth & Funding Access',
    description: 'Strategic guidance on business expansion, funding options, and growth planning.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-white py-20" aria-label="Services">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">
            What We Do
          </p>
          <h2 className="text-3xl font-bold text-dark md:text-4xl">Our Services</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="rounded-lg border border-gray-100 bg-light p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon size={28} />
                </div>
                <h3 className="mb-2 font-bold text-dark">{service.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
