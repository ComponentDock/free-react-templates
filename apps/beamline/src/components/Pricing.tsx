const plans = [
  { price: '78', featured: false },
  { price: '88', featured: true },
  { price: '98', featured: false },
] as const

const features = ['10 Construction Drawings', 'Selection Materials', 'Unlimited Revision'] as const

export function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-brand">
          Pricing
        </p>
        <h2 className="mt-3 text-center text-4xl font-extralight leading-tight text-ink dark:text-white">
          Price & Plans
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.price}
              className={`rounded-lg p-8 text-center shadow-sm transition-shadow hover:shadow-md ${
                plan.featured ? 'bg-brand text-white' : 'bg-white dark:bg-gray-900'
              }`}
            >
              <h3
                className={`text-xl font-bold ${plan.featured ? 'text-white' : 'text-ink dark:text-white'}`}
              >
                Planning Solution
              </h3>
              <p
                className={`mt-6 text-5xl font-extrabold ${plan.featured ? 'text-white' : 'text-ink dark:text-white'}`}
              >
                <span className="align-top text-2xl">$</span>
                {plan.price}
                <span
                  className={`text-base font-semibold ${plan.featured ? 'text-white/80' : 'text-mist'}`}
                >
                  /mos
                </span>
              </p>
              <ul className="mt-6 space-y-3">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className={`text-sm ${plan.featured ? 'text-white/90' : 'text-mist dark:text-gray-300'}`}
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className={`mt-8 w-full rounded-full px-6 py-3 text-sm font-bold uppercase tracking-wide transition-colors ${
                  plan.featured
                    ? 'bg-white text-brand hover:bg-paper'
                    : 'bg-brand text-white hover:bg-brand-dark'
                }`}
              >
                Get Started
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
