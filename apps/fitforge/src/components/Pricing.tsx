import { Check, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Free Crossfit Trial',
    price: '$0',
    features: ['1 Day Free Trial', '1 Sauna Access', 'No Risks & No Obligations'],
    featured: false,
  },
  {
    name: 'Basic Membership',
    price: '$30',
    features: ['Basic Sub', 'Sauna Access', 'Unlimited access before 10AM'],
    featured: true,
  },
  {
    name: 'Unlimited Sub',
    price: '$55',
    features: ['Unlimited Access', 'Unlimited Sauna Access', 'Assisted Training'],
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="relative py-20 bg-dark">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('https://picsum.photos/seed/fitforge-plans/1920/800')" }}
      />
      <div className="absolute inset-0 bg-dark/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Choose a plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col items-center rounded-lg p-8 text-center ${
                plan.featured
                  ? 'bg-brand text-white scale-105 shadow-xl'
                  : 'bg-white/10 text-white backdrop-blur-sm'
              }`}
            >
              <div className="font-heading text-5xl font-bold mb-2">{plan.price}</div>
              <h3 className="font-heading text-xl font-semibold mb-6">{plan.name}</h3>
              <ul className="mb-8 space-y-3 w-full">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center justify-center gap-2 text-sm">
                    <Check className="h-4 w-4 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={`inline-flex items-center gap-2 rounded px-6 py-3 text-sm font-semibold transition-colors ${
                  plan.featured
                    ? 'bg-white text-brand hover:bg-white/90'
                    : 'bg-brand text-white hover:bg-brand-dark'
                }`}
              >
                Get it now
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
