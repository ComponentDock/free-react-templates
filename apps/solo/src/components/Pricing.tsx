import { pricingIntro, pricingPlans } from '../data'

/** Pricing: three numbered cards (Economy / Business / Premium). On hover a
 *  card fills with the brand gradient and its text turns white, mirroring
 *  the reference's .single-price hover state. */
export function Pricing() {
  return (
    <section id="pricing" aria-label="Pricing" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold uppercase text-ink lg:text-4xl">
            {pricingIntro.heading}
          </h2>
          <p className="mt-5 text-base font-light leading-relaxed text-muted">
            {pricingIntro.lead}
          </p>
        </div>
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className="group bg-band px-6 py-10 text-center transition-colors hover:bg-gradient-to-br hover:from-primary hover:to-accent"
            >
              <p className="text-sm font-medium uppercase tracking-wide text-muted transition-colors group-hover:text-white/90">
                {plan.number}
              </p>
              <h3 className="mt-2 text-2xl font-semibold uppercase text-ink transition-colors group-hover:text-white">
                {plan.name}
              </h3>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-sm font-light text-muted transition-colors group-hover:text-white/90"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-3xl font-semibold text-ink transition-colors group-hover:text-white">
                {plan.price}
              </p>
              <a
                href="#pricing"
                className="mt-8 inline-block bg-gradient-to-br from-primary to-accent px-10 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors group-hover:bg-none group-hover:bg-white group-hover:text-primary"
              >
                {pricingIntro.cta}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
