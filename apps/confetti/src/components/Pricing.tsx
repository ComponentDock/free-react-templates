const plans = [
  {
    day: 'Day 1',
    price: '$5',
    features: ['Increase traffic 50%', 'E-mail support', '10 Free Optimizations', '24/7 support'],
    active: false,
  },
  {
    day: 'Day 1, 2, 3',
    price: '$8',
    features: ['Increase traffic 50%', 'E-mail support', '10 Free Optimizations', '24/7 support'],
    active: true,
  },
  {
    day: 'Day 1, 2',
    price: '$6',
    features: ['Increase traffic 50%', 'E-mail support', '10 Free Optimizations', '24/7 support'],
    active: false,
  },
]

export function Pricing() {
  return (
    <section className="bg-paper py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Program Pricing
          </h2>
          <p className="mt-4 text-mist">Choose the pass that works best for you and your team.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.day}
              className={`rounded border bg-white p-8 text-center shadow-md transition-shadow hover:shadow-lg dark:bg-gray-950 ${
                plan.active
                  ? 'border-brand ring-2 ring-brand'
                  : 'border-gray-200 dark:border-gray-800'
              }`}
            >
              <span className="font-display text-sm font-semibold uppercase tracking-wide text-brand">
                {plan.day}
              </span>
              <h3 className="mt-4 font-display text-4xl font-bold text-ink dark:text-white">
                {plan.price}
              </h3>
              <ul className="mt-8 space-y-4 text-left text-mist">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-8 inline-block rounded border border-ink bg-ink px-8 py-3 font-display text-sm font-semibold uppercase tracking-wide text-white hover:bg-ink-dark dark:border-white dark:bg-white dark:text-ink dark:hover:bg-gray-200"
              >
                View Details
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
