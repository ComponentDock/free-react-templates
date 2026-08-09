import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Standard',
    price: '£199',
    tagline: 'For the individuals',
    features: [
      '2.5 GB Free Photos',
      'Secure Online Transfer Indeed',
      'Unlimited Styles for interface',
      'Reliable Customer Service',
      'Manual Backup Provided',
    ],
  },
  {
    name: 'Business',
    price: '£399',
    tagline: 'Few would argue that, despite the advancements',
    features: [
      '2.5 GB Free Photos',
      'Secure Online Transfer Indeed',
      'Unlimited Styles for interface',
      'Reliable Customer Service',
      'Manual Backup Provided',
    ],
  },
  {
    name: 'Ultimate',
    price: '£499',
    tagline: 'Few would argue that, despite the advancements',
    features: [
      '2.5 GB Free Photos',
      'Secure Online Transfer Indeed',
      'Unlimited Styles for interface',
      'Reliable Customer Service',
      'Manual Backup Provided',
    ],
  },
] as const

export function Pricing() {
  return (
    <section id="price" className="bg-white py-20 transition-colors dark:bg-gray-950 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-black text-ink dark:text-white lg:text-4xl">
            Choose the Perfect Plan for you
          </h2>
          <p className="mt-4 text-mist dark:text-gray-400">
            Who are in extremely love with eco friendly system.
          </p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col rounded-2xl bg-paper p-8 text-center transition-shadow hover:shadow-xl dark:bg-gray-900"
            >
              <h3 className="font-display text-2xl font-bold text-ink dark:text-white">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm text-mist dark:text-gray-400">{plan.tagline}</p>
              <p className="mt-6 font-display text-5xl font-black text-ink dark:text-white">
                {plan.price}
              </p>
              <ul className="mt-8 flex-1 space-y-3 text-left text-sm text-mist dark:text-gray-400">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="mt-8 rounded-[25px] bg-gradient-to-r from-brand to-brand-dark px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
              >
                Purchase Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
