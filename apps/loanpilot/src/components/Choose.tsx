import { Zap, Shield, CheckCircle, TrendingDown, Users, Eye } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Quick & Easy',
    description: 'Fast application process with quick disbursement of funds.',
  },
  {
    icon: Shield,
    title: 'Absolute Security',
    description: 'Your data and transactions are protected with bank-level security.',
  },
  {
    icon: CheckCircle,
    title: 'Quick Approval',
    description: 'Get approved within hours, not days. We value your time.',
  },
  {
    icon: TrendingDown,
    title: 'Low Interest Rates',
    description: 'Competitive interest rates designed to save you money.',
  },
  {
    icon: Users,
    title: 'Customer Support',
    description: 'Dedicated support team available 24/7 to assist you.',
  },
  {
    icon: Eye,
    title: 'Transparent Process',
    description: 'No hidden fees. Complete transparency in every step.',
  },
] as const

export function Choose() {
  return (
    <section id="choose" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">Why People Choose Us</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div key={feature.title} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-navy">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-body-text-secondary">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
