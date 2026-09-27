import { Check } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

interface PlanProps {
  name: string
  price: number
  features: string[]
  highlighted?: boolean
}

const plans: PlanProps[] = [
  {
    name: 'Free',
    price: 0,
    features: ['150 GB Bandwidth', '100 GB Storage', '$1.00 / GB Overages', 'All features'],
    highlighted: true,
  },
  {
    name: 'Startup',
    price: 19,
    features: ['450 GB Bandwidth', '400 GB Storage', '$2.00 / GB Overages', 'All features'],
  },
  {
    name: 'Premium',
    price: 49,
    features: ['250 GB Bandwidth', '200 GB Storage', '$5.00 / GB Overages', 'All features'],
  },
  {
    name: 'Pro',
    price: 99,
    features: ['450 GB Bandwidth', '400 GB Storage', '$20.00 / GB Overages', 'All features'],
  },
]

function PricingCard({ name, price, features, highlighted }: PlanProps) {
  return (
    <div
      className={`rounded-lg p-8 text-center ${
        highlighted ? 'bg-primary-300 text-white shadow-xl' : 'bg-white text-ink shadow-md'
      }`}
    >
      <h3 className="mb-2 text-xl font-semibold">{name}</h3>
      <div className="mb-4 text-4xl font-bold">
        <sup className="text-lg">$</sup>
        {price}
      </div>
      <p className="mb-6 text-sm opacity-80">100% free. Forever</p>
      <Button
        className={`mb-6 w-full rounded-full py-3 ${
          highlighted
            ? 'bg-white text-primary-300 hover:bg-gray-100'
            : 'bg-primary-300 text-white hover:bg-primary-400'
        }`}
      >
        Get Started
      </Button>
      <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider opacity-70">
        Enjoy All The Features
      </h4>
      <ul className="space-y-3 text-left">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm">
            <Check size={16} className="shrink-0" />
            {f}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Pricing() {
  return (
    <section id="pricing" className="bg-surface-alt py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <span className="text-sm font-medium uppercase tracking-wider text-primary-300">
            Pricing Plans
          </span>
          <h2 className="mt-2 text-3xl font-bold text-ink">Our Best Pricing</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} />
          ))}
        </div>
      </div>
    </section>
  )
}
