const plans = [
  {
    name: 'Basic',
    price: '$49',
    period: '/mos',
    features: ['5 Dog Walk', '3 Vet Visit', '3 Pet Spa', 'Free Supports'],
  },
  {
    name: 'Personal',
    price: '$79',
    period: '/mos',
    features: ['5 Dog Walk', '3 Vet Visit', '3 Pet Spa', 'Free Supports'],
  },
  {
    name: 'Business',
    price: '$109',
    period: '/mos',
    features: ['5 Dog Walk', '3 Vet Visit', '3 Pet Spa', 'Free Supports'],
  },
] as const

export function Pricing() {
  return (
    <section id="pricing" className="bg-paper py-16 dark:bg-gray-900 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-black text-gray-900 sm:text-4xl dark:text-white">
          Affordable Packages
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="flex flex-col rounded-2xl bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
              <p className="mt-4 text-4xl font-black text-brand">
                {plan.price}
                <span className="text-base font-semibold text-gray-500 dark:text-gray-400">
                  {plan.period}
                </span>
              </p>
              <ul className="mt-6 space-y-3 text-sm font-medium text-gray-600 dark:text-gray-300">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-8 rounded-full bg-brand px-8 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-strong"
              >
                Get Started
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
