import { Briefcase, CreditCard, BarChart3, ShieldCheck, TrendingUp, Wallet } from 'lucide-react'

const serviceItems = [
  {
    icon: Briefcase,
    title: 'Business Consulting',
    desc: 'Expert business advisory services to grow your enterprise.',
  },
  {
    icon: CreditCard,
    title: 'Credit Card Services',
    desc: 'Premium credit card options with exclusive rewards.',
  },
  {
    icon: BarChart3,
    title: 'Income Monitoring',
    desc: 'Real-time income tracking and financial analytics.',
  },
  {
    icon: ShieldCheck,
    title: 'Insurance Consulting',
    desc: 'Comprehensive insurance solutions for complete protection.',
  },
  {
    icon: TrendingUp,
    title: 'Financial Investment',
    desc: 'Strategic investment portfolios tailored to your risk profile.',
  },
  {
    icon: Wallet,
    title: 'Financial Management',
    desc: 'Professional wealth management and financial planning.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-ink">Our Services</h2>
          <p className="mx-auto max-w-xl text-gray-500">
            We offer a wide range of financial services to meet all your banking needs.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {serviceItems.map((s) => (
            <div
              key={s.title}
              className="rounded-xl bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <s.icon className="mb-4 h-10 w-10 text-brand" />
              <h3 className="mb-2 text-lg font-bold text-ink">{s.title}</h3>
              <p className="text-sm text-gray-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
