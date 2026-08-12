import { PLANS, PRICING } from '../data'

/* Pricing — four plans (Basic/Advance/Expert/Pro) with three feature rows
   each and a "Choose Plan" button; Basic carries the free-forever tagline. */

export function Pricing() {
  return (
    <section id="pricing-section" className="bg-light py-24 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-[32px] font-bold text-navy dark:text-white sm:text-[40px]">
          {PRICING.heading}
        </h2>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col rounded-lg bg-white p-8 text-center shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
            >
              <h3 className="text-[20px] font-semibold text-navy dark:text-white">{plan.name}</h3>
              <p className="mt-4 text-[44px] font-bold text-navy dark:text-white">
                {plan.price}
                <span className="text-[18px] font-medium text-gray-400">/mo</span>
              </p>
              {plan.tagline && (
                <p className="mt-2 text-[14px] font-medium text-accent">{plan.tagline}</p>
              )}
              <ul className="mt-6 flex-1 space-y-3 text-[15px] text-gray-600 dark:text-gray-300">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <button
                type="button"
                className="mt-8 rounded-md bg-brand px-6 py-3 text-[16px] font-medium text-white transition-colors hover:bg-branddark"
              >
                {PRICING.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
