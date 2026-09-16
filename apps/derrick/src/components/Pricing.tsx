import { Building2 } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const plans = [
  {
    name: 'Basic Plan',
    price: '$29',
    description: 'Ideal for small projects and initial consultations.',
    feature: 'Open Source',
  },
  {
    name: 'Standard Plan',
    price: '$29',
    description: 'Perfect for growing construction businesses.',
    feature: 'Free 30 Day Trial',
  },
  {
    name: 'Premium Plan',
    price: '$29',
    description: 'Full access for enterprise construction firms.',
    feature: 'Custom Solutions',
  },
]

interface PricingProps {
  className?: string
}

export function Pricing({ className }: PricingProps) {
  return (
    <section id="pricing" className={`py-20 bg-gray-50 ${className ?? ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Pricing</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="border-2 border-dashed border-brand-200 p-8 text-center rounded-lg bg-white"
            >
              <Building2 className="text-brand-400 mx-auto mb-4" size={48} />
              <h3 className="text-xl font-medium text-gray-900 mb-4">{plan.name}</h3>
              <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
              <div className="border-t border-b border-dashed border-gray-200 py-4 mb-6">
                <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                <span className="text-gray-500 text-sm ml-2">per month</span>
              </div>
              <Button className="w-full bg-brand-500 text-white hover:bg-brand-600 rounded-none mb-4">
                Get started
              </Button>
              <a href="#" className="text-brand-500 text-sm hover:underline">
                {plan.feature}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
