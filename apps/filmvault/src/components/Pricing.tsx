import { Camera } from 'lucide-react'

const plans = [
  {
    name: 'Silver',
    price: '50',
    features: [
      '2 TB of space',
      'Unlimited bandwidth',
      'Full backup systems',
      'Free domain',
      'Unlimited database',
    ],
    popular: false,
  },
  {
    name: 'Gold',
    price: '100',
    features: [
      '2 TB of space',
      'Unlimited bandwidth',
      'Full backup systems',
      'Free domain',
      'Unlimited database',
    ],
    popular: true,
  },
  {
    name: 'Platinum',
    price: '50',
    features: [
      '2 TB of space',
      'Unlimited bandwidth',
      'Full backup systems',
      'Free domain',
      'Unlimited database',
    ],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-[var(--font-heading)] text-3xl font-semibold leading-tight text-navy-900 md:text-4xl">
            Choose a plan
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-[var(--font-sans)] text-base text-navy-500/70">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros
            elementum tristique.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className="relative border border-navy-100 bg-white text-center">
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-navy-500 px-4 py-1 font-[var(--font-sans)] text-xs font-medium text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="border-b border-navy-100 px-6 py-8">
                <Camera className="mx-auto text-navy-400" size={32} strokeWidth={1.5} />
                <h3 className="mt-4 font-[var(--font-heading)] text-xl font-medium text-navy-900">
                  {plan.name}
                </h3>
                <p className="mt-1 font-[var(--font-sans)] text-sm text-navy-500/60">Only</p>
              </div>
              <div className="border-b border-navy-100 px-6 py-6">
                <span className="font-[var(--font-heading)] text-4xl font-semibold text-navy-900">
                  ${plan.price}.00
                </span>
              </div>
              <div className="px-6 py-8">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="font-[var(--font-sans)] text-sm text-navy-500/70">
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#pricing"
                  className="mt-8 inline-flex items-center border border-navy-900 px-8 py-3 font-[var(--font-heading)] text-sm uppercase tracking-[3px] text-navy-900 transition-colors hover:bg-navy-900 hover:text-white"
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
