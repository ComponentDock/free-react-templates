const plans = [
  {
    name: 'Basic',
    price: '$20',
    features: [
      '100 MB Disk Space',
      '2 Subdomains',
      '5 Email Accounts',
      'Webmail Support',
      'Customer Support 24/7',
    ],
  },
  {
    name: 'Standard',
    price: '$39',
    features: [
      '100 MB Disk Space',
      '2 Subdomains',
      '5 Email Accounts',
      'Webmail Support',
      'Customer Support 24/7',
    ],
  },
  {
    name: 'Unlimited',
    price: '$59',
    features: [
      '100 MB Disk Space',
      '2 Subdomains',
      '5 Email Accounts',
      'Webmail Support',
      'Customer Support 24/7',
    ],
  },
] as const

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-16 sm:py-24">
      <img
        src="https://picsum.photos/seed/colid-pricing/1920/1080"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-primary-300 to-primary-500 opacity-80"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl">
            Affordable Price
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-white/85">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit voluptates, temporibus
            at, facere harum fugiat!
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-md bg-white px-8 py-10 text-center text-muted shadow-xl"
            >
              <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
              <p className="mt-4 text-5xl font-bold text-primary-500">
                {plan.price}
                <span className="text-base font-medium text-gray-400"> /Month</span>
              </p>
              <ul className="mt-8 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button
                type="button"
                className="mt-8 rounded-full bg-primary-600 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-700"
              >
                Purchase
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
