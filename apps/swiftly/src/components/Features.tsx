import { Coins, BarChart3, CreditCard, FileText, Gem, Briefcase } from 'lucide-react'
import type { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-bold">{title}</h3>
      <p className="text-sm text-mist">{description}</p>
    </div>
  )
}

const features = [
  {
    icon: <Coins size={28} />,
    title: 'Cash Collection',
    description:
      'Manage your invoices from creation to payment. With Swiftly you will collect 100% of receivables.',
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Analytics',
    description:
      'Real-time dashboards and reports give you full visibility into your cash flow and revenue trends.',
  },
  {
    icon: <CreditCard size={28} />,
    title: 'Payment',
    description:
      'Accept payments from anywhere in the world with built-in support for multiple currencies.',
  },
  {
    icon: <FileText size={28} />,
    title: 'Invoicing',
    description: 'Create professional invoices in seconds and send them directly to your clients.',
  },
  {
    icon: <Gem size={28} />,
    title: 'Rewards',
    description: 'Loyalty programs and cashback incentives to keep your customers coming back.',
  },
  {
    icon: <Briefcase size={28} />,
    title: 'Enterprise',
    description:
      'Scalable solutions designed for growing businesses with advanced security and compliance.',
  },
]

export function Features() {
  return (
    <section className="bg-surface py-20" id="features">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-wider text-brand">
            Awesome Features
          </span>
          <h2 className="text-3xl font-bold">Cool Features</h2>
          <p className="mx-auto mt-3 max-w-lg text-mist">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}
