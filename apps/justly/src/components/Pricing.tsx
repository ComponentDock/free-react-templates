import { Check } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const plans = [
  {
    duration: '6 Months',
    price: '$30',
    unit: '/mo',
    label: 'Single class',
    features: [
      'Free Riding',
      'Unlimited Equipment',
      'Personal Trainer',
      'Weight Loss Classes',
      'Month to Month',
    ],
  },
  {
    duration: '12 Months',
    price: '$25',
    unit: '/mo',
    label: 'All access',
    features: [
      'Free Riding',
      'Unlimited Equipment',
      'Personal Trainer',
      'Weight Loss Classes',
      'Month to Month',
    ],
  },
  {
    duration: '3 Months',
    price: '$40',
    unit: '/mo',
    label: 'Starter',
    features: [
      'Free Riding',
      'Unlimited Equipment',
      'Personal Trainer',
      'Weight Loss Classes',
      'Month to Month',
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-surface-light py-20" data-testid="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-4xl text-white text-center uppercase mb-12">Pricing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.duration}
              className="bg-surface border border-gray-800 p-8 text-center hover:border-brand transition-colors"
            >
              <p className="font-heading text-brand text-sm uppercase tracking-[0.2em] mb-2">
                {plan.duration}
              </p>
              <p className="font-heading text-5xl text-white mb-1">
                {plan.price}
                <span className="text-lg text-text-muted">{plan.unit}</span>
              </p>
              <p className="text-text-muted text-xs uppercase tracking-wider mb-6">
                ({plan.label})
              </p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center justify-center gap-2 text-text text-sm">
                    <Check className="w-4 h-4 text-brand flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <ButtonLink
                href="#contact"
                className="inline-flex border-2 border-brand text-brand px-8 py-3 font-heading text-xs uppercase tracking-[0.2em] hover:bg-brand hover:text-white transition-colors"
              >
                Join Now
              </ButtonLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
