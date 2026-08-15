import { plans } from '../data'

export function Pricing() {
  return (
    <section id="pricing" aria-label="Our Best Pricing" className="bg-light py-24">
      <div className="mx-auto max-w-[1200px] px-4">
        <h2 className="text-center text-3xl font-bold text-ink sm:text-4xl">Our Best Pricing</h2>
        <p className="mx-auto mt-4 max-w-[560px] text-center text-base font-light text-gray-500">
          Even the all-powerful Pointing has no control about the blind texts.
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className="bg-white p-8 text-center shadow-[0_2px_5px_rgba(0,0,0,0.03)]"
            >
              <h3 className="text-lg font-semibold uppercase tracking-wide text-ink">
                {plan.name}
              </h3>
              <p className="mt-6 text-4xl font-bold text-ink">{plan.price}</p>
              <p className="mt-2 text-sm font-light text-gray-500">{plan.tagline}</p>
              <h4 className="mt-8 text-sm font-semibold uppercase tracking-wide text-ink">
                Enjoy All The Features
              </h4>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-sm font-light text-gray-500">
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href="#domain"
                className="mt-8 block w-full bg-[linear-gradient(45deg,#12e6ca,#8be55d)] px-3 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
              >
                Choose Plan
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
