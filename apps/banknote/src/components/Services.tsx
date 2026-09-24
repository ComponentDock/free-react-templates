import { Briefcase, CreditCard, BarChart3, Shield, TrendingUp, PiggyBank } from 'lucide-react'

const services = [
  {
    icon: Briefcase,
    title: 'Business Consulting',
    desc: 'Expert advice to grow and optimize your business operations.',
  },
  {
    icon: CreditCard,
    title: 'Credit Card',
    desc: 'Diverse card options with rewards and competitive rates.',
  },
  {
    icon: BarChart3,
    title: 'Income Monitoring',
    desc: 'Track and analyze your income streams with real-time dashboards.',
  },
  {
    icon: Shield,
    title: 'Insurance Consulting',
    desc: 'Comprehensive insurance solutions tailored to your needs.',
  },
  {
    icon: TrendingUp,
    title: 'Financial Investment',
    desc: 'Smart investment strategies to maximize your portfolio returns.',
  },
  {
    icon: PiggyBank,
    title: 'Financial Management',
    desc: 'End-to-end financial planning and management services.',
  },
]

export function Services() {
  return (
    <section id="services" className="border-b bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">Our Services</h2>
          <p className="mx-auto max-w-2xl text-gray-600">
            We offer a comprehensive range of financial services to meet your needs.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="rounded-lg bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <s.icon className="mb-4 h-10 w-10 text-brand" />
              <h4 className="mb-3 text-lg font-bold">{s.title}</h4>
              <p className="mb-4 text-gray-600">{s.desc}</p>
              <a href="#" className="text-sm font-semibold text-brand transition hover:underline">
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
