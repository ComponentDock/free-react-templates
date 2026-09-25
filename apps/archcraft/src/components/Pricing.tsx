import { Check, X } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: 30,
    period: 'year',
    features: [
      { text: 'Basic Design Consultation', included: true },
      { text: '2 Revision Rounds', included: true },
      { text: '3D Renders', included: true },
      { text: 'Project Management', included: false },
      { text: 'On-site Supervision', included: false },
    ],
  },
  {
    name: 'Professional',
    price: 72,
    period: 'year',
    features: [
      { text: 'Full Design Consultation', included: true },
      { text: '5 Revision Rounds', included: true },
      { text: '3D Renders + Walkthrough', included: true },
      { text: 'Project Management', included: true },
      { text: 'On-site Supervision', included: false },
    ],
  },
  {
    name: 'Enterprise',
    price: 149,
    period: 'year',
    features: [
      { text: 'Premium Design Consultation', included: true },
      { text: 'Unlimited Revisions', included: true },
      { text: 'Full 3D Suite', included: true },
      { text: 'Project Management', included: true },
      { text: 'On-site Supervision', included: true },
    ],
  },
] as const

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="mb-1 text-center text-sm font-semibold uppercase tracking-wider text-brand">
          Pricing
        </p>
        <h2 className="mb-10 text-center text-3xl font-bold text-ink">Choose Your Plan</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map(({ name, price, period, features }) => (
            <div key={name} className="rounded border border-line p-8 text-center">
              <h3 className="mb-4 text-xl font-bold text-ink">{name}</h3>
              <div className="mb-2">
                <span className="text-sm text-mist">$</span>
                <span className="text-4xl font-extrabold text-ink">{price}</span>
                <span className="text-sm text-mist">/{period}</span>
              </div>
              <p className="mb-6 text-xs text-mist">Billed annually</p>
              <ul className="mb-8 space-y-3 text-left text-sm">
                {features.map(({ text, included }) => (
                  <li key={text} className="flex items-center gap-2">
                    {included ? (
                      <Check className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    ) : (
                      <X className="h-4 w-4 shrink-0 text-mist" aria-hidden="true" />
                    )}
                    <span className={included ? 'text-ink' : 'text-mist line-through'}>{text}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="block w-full rounded border-2 border-brand bg-brand px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-transparent hover:text-brand"
              >
                Buy Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
