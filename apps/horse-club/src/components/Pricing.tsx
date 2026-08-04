const plans = [
  {
    number: '01',
    name: 'Basic',
    price: '£199.00',
    features: [
      'For the individuals',
      'Secure Online Transfer',
      'Unlimited Styles for interface',
      'Reliable Customer Service',
    ],
  },
  {
    number: '02',
    name: 'Economy',
    price: '£299.00',
    features: [
      'For the individuals',
      'Secure Online Transfer',
      'Unlimited Styles for interface',
      'Reliable Customer Service',
    ],
  },
  {
    number: '03',
    name: 'Premium',
    price: '£399.00',
    features: [
      'For the individuals',
      'Secure Online Transfer',
      'Unlimited Styles for interface',
      'Reliable Customer Service',
    ],
  },
  {
    number: '04',
    name: 'Enterprise',
    price: '£499.00',
    features: [
      'For the individuals',
      'Secure Online Transfer',
      'Unlimited Styles for interface',
      'Reliable Customer Service',
    ],
  },
] as const

export function Pricing() {
  return (
    <section id="pricing" className="bg-paper py-20 dark:bg-gray-900 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-ink dark:text-white lg:text-4xl">
            Choose the best plan that suits you
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed text-muted dark:text-gray-400">
            Who are in extremely love with eco friendly system.
          </p>
        </div>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-lg dark:bg-gray-950"
            >
              <span className="text-sm font-semibold uppercase tracking-widest text-brand">
                {plan.number}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-ink dark:text-white">{plan.name}</h3>
              <p className="mt-4 text-4xl font-bold text-brand">{plan.price}</p>
              <ul className="mt-6 space-y-3 text-sm font-light text-muted dark:text-gray-400">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 inline-block w-full rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-ink"
              >
                Purchase
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
